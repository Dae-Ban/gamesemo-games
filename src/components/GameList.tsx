import React, { useEffect, useState } from "react";
import axios from "axios";
import { GameInfo } from "../types/GameInfo"; // 타입 따로 정의한 경우

function GameList({ count = 10 }: { count: number }) {
  const [games, setGames] = useState<GameInfo[]>([]);

  useEffect(() => {
    axios.get<GameInfo[]>(`http://3.34.122.138/game/list/${count}`)
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error("게임 목록 불러오기 실패:", error);
      });
  }, [count]);

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
