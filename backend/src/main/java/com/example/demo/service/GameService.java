package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;
import com.example.demo.repository.GameRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {
	private final GameRepository repo;

	public int countGames(String giState, String giPlatform) {
		boolean isFree = "free".equals(giState);
		boolean isAll = "all".equals(giPlatform);

		if (isFree && isAll) {
			return (int) repo.countByGiFprice(0);
		} else if (isFree) {
			return (int) repo.countByGiFpriceAndGiPlatform(0, giPlatform);
		} else if (isAll) {
			return (int) repo.countByGiStateContaining(giState);
		} else {
			return (int) repo.countByGiStateContainingAndGiPlatform(giState, giPlatform);
		}
	}

	public List<GameInfo> getGameList(Pagenation pgn) {
		return repo.filteredList(pgn);
	}
	
	public GameInfo findBygNum(int gNum) {
		return repo.findBygNum(gNum);
	}

}
