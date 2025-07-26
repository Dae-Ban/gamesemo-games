package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;
import com.example.demo.repository.GameRepository;
import com.example.demo.repository.GameRepositoryCustom;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {
	private final GameRepository gameRepository;
	private final GameRepositoryCustom gameRepositoryCustom;
	
	public int getCount(String giState, String giPlatform) {
		return 0;
	}

	public List<GameInfo> getGameList(Pagenation pgn) {
		return null;
	}
	
	
}
