package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Pagenation;
import com.example.demo.entity.GameInfo;
import com.example.demo.exception.GameNotFoundException;
import com.example.demo.response.ApiResponse;
import com.example.demo.service.GameService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/game")
public class GameController {
	private final GameService service;

	@GetMapping("/list")
	public ResponseEntity<ApiResponse<List<GameInfo>>> list(
			HttpServletRequest request,
			@RequestParam(name = "size", defaultValue = "20") int size,
			@RequestParam(name = "page", defaultValue = "1") int page,
			@RequestParam(name = "state", defaultValue = "dc") String giState,
			@RequestParam(name = "platform", defaultValue = "all") String giPlatform,
			@RequestParam(name = "sort", defaultValue = "rateDesc") String sort) {

		if (size <= 0 || page <= 0) {
			throw new IllegalArgumentException("amount와 page는 1 이상이어야 합니다.");
		}

		int total = service.countGames(giState, giPlatform);
		Pagenation pgn = new Pagenation(total, size, page);
		pgn.setGiState(giState);
		pgn.setGiPlatform(giPlatform);
		pgn.setSort(sort);

		List<GameInfo> list = service.getGameList(pgn);
		return ResponseEntity.ok(ApiResponse.success(request, 200, list));
	}

	@GetMapping("/{gNum}")
	public ResponseEntity<ApiResponse<GameInfo>> details(
			HttpServletRequest request,
			@PathVariable("gNum") int gNum) {
		
		if (gNum <= 0)
			throw new IllegalArgumentException("gNum은 1 이상이어야 합니다.");
		
		GameInfo gi = service.findBygNum(gNum);
		
		if (gi == null) throw new GameNotFoundException(gNum);
		
		return ResponseEntity.ok(ApiResponse.success(request, 200, gi));
	}
}
