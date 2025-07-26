import axios from 'axios';
import { GameInfo } from '../types/GameInfo';

export const fetchGameList = async (count: number): Promise<GameInfo[]> => {
  const response = await axios.get<GameInfo[]>(`localhost/game/list/${count}`);
  return response.data;
};
