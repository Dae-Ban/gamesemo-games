package com.example.demo.repository;

import java.util.List;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;

public interface GameRepositoryCustom {
	
	List<GameInfo> filteredList(Pagenation pgn);

}
