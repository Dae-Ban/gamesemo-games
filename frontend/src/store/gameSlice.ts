import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameInfo } from '../types/GameInfo';

export interface GameFilterState {
  size: number;
  state: string;
  platform: string;
  sort: string;
  games: GameInfo[];
  loading: boolean;
}

const initialState: GameFilterState = {
  size: 20,
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
      state.size = action.payload;
    },
  },
});

export const { setAmount } = gameFilterSlice.actions;
export default gameFilterSlice.reducer;
