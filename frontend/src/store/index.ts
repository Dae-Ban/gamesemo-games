import { configureStore } from '@reduxjs/toolkit';
import gameFilterReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    gameFilter: gameFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
