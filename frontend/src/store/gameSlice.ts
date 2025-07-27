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
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.state = action.payload;
    },
    setPlatform: (state, action: PayloadAction<string>) => {
      state.platform = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setGames: (state, action: PayloadAction<GameInfo[]>) => {
      state.games = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setSize,
  setState,
  setPlatform,
  setSort,
  setGames,
  setLoading,
} = gameFilterSlice.actions;

export default gameFilterSlice.reducer;
