package com.example.demo.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@Repository
public class GameRepositoryImpl implements GameRepositoryCustom {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<GameInfo> filteredList(Pagenation pgn) {
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT * FROM ( ");
		sql.append("SELECT a.*, ROWNUM rn FROM ( ");
		sql.append("SELECT * FROM game_info WHERE gi_date >= SYSTIMESTAMP - INTERVAL '1' DAY ");

		if (!"free".equals(pgn.getGiState())) {
			sql.append("AND gi_state LIKE '%' || :giState || '%' ");
		} else {
			sql.append("AND gi_fprice = 0 ");
		}

		if (!"all".equals(pgn.getGiPlatform())) {
			sql.append("AND gi_platform = :giPlatform ");
		}

		switch (pgn.getSort()) {
		case "priceAsc" -> sql.append("ORDER BY gi_fprice ASC ");
		case "priceDesc" -> sql.append("ORDER BY gi_fprice DESC ");
		case "rateDesc" -> sql.append("ORDER BY gi_rate DESC ");
		default -> sql.append("ORDER BY gi_num ASC ");
		}

		sql.append(") a ) WHERE rn BETWEEN :startRow AND :endRow");

		Query query = em.createNativeQuery(sql.toString(), GameInfo.class);
		if (!"free".equals(pgn.getGiState()))
			query.setParameter("giState", pgn.getGiState());
		if (!"all".equals(pgn.getGiPlatform()))
			query.setParameter("giPlatform", pgn.getGiPlatform());
		query.setParameter("startRow", pgn.getStartRow());
		query.setParameter("endRow", pgn.getEndRow());
		
		return query.getResultList();
	}

}
