package com.example.demo.exception;

public class GameNotFoundException extends RuntimeException {
	public GameNotFoundException(int gNum) {
		super("해당 번호의 게임(" + gNum + ")을 찾을 수 없습니다.");
	}
}