import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameInfo } from '../types/GameInfo';

export interface GameFilterState {
  page: number;
  amount: number;
  state: string;
  platform: string;
  sort: string;
  games: GameInfo[];
  loading: boolean;
}

const initialState: GameFilterState = {
  page: 1,
  amount: 20,
  state: 'dc',
  platform: 'all',
  sort: 'rateDesc',
  games: [],
  loading: false,
};

export const gameFilterSlice = createSlice({
  name: 'gameFilter',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    // 여기에 필요한 reducer 추가
  },
});

export const { setAmount } = gameFilterSlice.actions;
export default gameFilterSlice.reducer;
