import axios from 'axios';
import { GameInfo } from '../types/GameInfo';

export const fetchGameList = async (count: number): Promise<GameInfo[]> => {
  const response = await axios.get<GameInfo[]>(`http://3.34.122.138/game/list/${count}`);
  return response.data;
};
