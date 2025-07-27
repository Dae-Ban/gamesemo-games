import axios from 'axios';
import { ApiResponse } from '../types/ApiResponse';
import { GameInfo } from '../types/GameInfo';

export const fetchGameList = async (count: number): Promise<GameInfo[]> => {
  const response = await axios.get<ApiResponse<GameInfo[]>>(`http://localhost/game/list?size=${count}`);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data.data;
};

export const fetchGameInfo = async (gNum: number): Promise<GameInfo[]> => {
  const response = await axios.get<ApiResponse<GameInfo[]>>(`http://localhost/game/${gNum}`);
  
  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data.data;
};
