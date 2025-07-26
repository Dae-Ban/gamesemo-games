package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;
import com.example.demo.service.GameService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/game")
public class GameController {
	private final GameService service;
	
	@GetMapping("/list/{amount}")
	public List<GameInfo> list(@PathVariable("amount") int amount,
			@RequestParam(name = "page", defaultValue = "1") int page,
			@RequestParam(name = "state", defaultValue = "dc") String giState,
			@RequestParam(name = "platform", defaultValue = "all") String giPlatform,
			@RequestParam(name = "sort", defaultValue = "rateDesc") String sort) {
		Pagenation pgn = new Pagenation(service.getCount(giState, giPlatform), amount, page);
		pgn.setGiState(giState);
		pgn.setGiPlatform(giPlatform);
		pgn.setSort(sort);
		System.out.println(sort);
		return service.getGameList(pgn);
	}
}
