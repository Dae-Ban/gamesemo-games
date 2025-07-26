import { useEffect, useState } from 'react';
import { fetchGameList } from '../services/gameInfoService';
import { GameInfo } from '../types/GameInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const GameList = () => {
  const [games, setGames] = useState<GameInfo[]>([]);
  const amount = useSelector((state: RootState) => state.gameFilter.amount);

  useEffect(() => {
    fetchGameList(amount)
      .then(setGames)
      .catch(error => {
        console.error("게임 목록 불러오기 실패:", error);
      });
  }, [amount]);

  return (
    <div>
      {games.map((game: any) => (
        <div key={game.giNum}>
          <h3>{game.giTitle}</h3>
          <img src={game.giThumb} alt={game.giTitle} width={150} />
          <p>가격: {game.giFprice}원 / 평소: {game.giPrice}원</p>
          <p>할인율: {game.giRate}%</p>
          <a href={game.giLink} target="_blank" rel="noreferrer">구매 링크</a>
        </div>
      ))}
    </div>
  );
}

export default GameList;
