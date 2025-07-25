import React, { useEffect, useState } from "react";
import { GameInfo } from "../types/GameInfo"; // GameInfo 타입
import { fetchGameList } from "../services/GameApi";
import { useSelector } from "react-redux";
import { RootState } from '../store';

const GameList = () => {
  const amount = useSelector((state: RootState) => state.gameFilter.amount);
  const [games, setGames] = useState<GameInfo[]>([]);

  useEffect(() => {
    fetchGameList(amount)
      .then(setGames)
      .catch(error => {
        console.error("게임 목록 불러오기 실패:", error);
      });
  }, [amount]);

  return (
    <div>
      <h2>게임 목록</h2>
      <ul>
        {games.map(game => (
          <li key={game.giNum}>
            <img src={game.giThumb} alt={game.giTitle} width="120" /><br />
            <a href={game.giLink} target="_blank" rel="noopener noreferrer">
              {game.giTitle}
            </a> ({game.giPlatform})<br />
            원가: {game.giPrice.toLocaleString()}원 → 할인: {game.giPrice.toLocaleString()}원<br />
            평점: {game.giRate}점
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
