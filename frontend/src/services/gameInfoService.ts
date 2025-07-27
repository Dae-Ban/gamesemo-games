import axios from 'axios';
import { ApiResponse } from '../types/ApiResponse';
import { GameInfo } from '../types/GameInfo';
import { GameFilterState } from '../store/gameSlice';

export const fetchGameList = async (filters: GameFilterState, page: number): Promise<GameInfo[]> => {
  const { size, state, platform, sort } = filters;

  const response = await axios.get<ApiResponse<GameInfo[]>>(
    `http://localhost/game/list`,
    {
      params: {
        size,
        page,
        state,
        platform,
        sort,
      },
    }
  );

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
