import { useEffect, useRef, useState } from 'react';
import { fetchGameList } from '../services/gameInfoService';
import { GameInfo } from '../types/GameInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/index';

const GameList = () => {
  const [games, setGames] = useState<GameInfo[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const filters = useSelector((state: RootState) => state.gameFilter);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      try {
        const newGames = await fetchGameList(filters, page);
        if (newGames.length === 0) {
          setHasMore(false);
        } else {
          setGames(prev => [...prev, ...newGames]);
        }
      } catch (e) {
        console.error("게임 목록 불러오기 실패:", e);
      }
      setLoading(false);
    };

    loadGames();
  }, [page, filters]);

  // 스크롤 감지용 Ref
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, loading]);

  return (
    <tbody>
      {games.map((game) => (
        <tr key={game.giNum}>
          <td><img src={game.giThumb} alt={game.giTitle} /></td>
          <td>{game.giTitle}</td>
          <td>-{game.giRate}%</td>
          <td>{game.giPrice}원</td>
          <td>{game.giFprice}원</td>
          <td><a href={game.giLink} target="_blank" rel="noreferrer">구매 링크</a></td>
        </tr>
      ))}
      <tr>
        <td colSpan={6}>
          {hasMore && !loading && <div ref={observerRef} style={{ height: 20 }} />}
          {loading && <p>로딩 중...</p>}
          {!hasMore && <p>더 이상 게임이 없습니다.</p>}
        </td>
      </tr>
    </tbody>
  );
};

export default GameList;
