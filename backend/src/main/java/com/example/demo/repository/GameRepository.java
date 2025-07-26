package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.GameInfo;

public interface GameRepository extends JpaRepository<GameInfo, Integer>, GameRepositoryCustom {
	
	// 조회
	GameInfo findBygNum(int gNum);
	
	// 개수
	int countByGiFprice(int giFprice);
	int countByGiFpriceAndGiPlatform(int giFprice, String giPlatform);
	int countByGiStateContaining(String giState);
	int countByGiStateContainingAndGiPlatform(String giState, String giPlatform);
}
