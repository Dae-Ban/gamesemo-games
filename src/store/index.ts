import { configureStore } from '@reduxjs/toolkit';
import gameFilterReducer from './gameSlice';

export const store = configureStore({
  reducer: {
    gameFilter: gameFilterReducer,
  },
});

// 여기서 RootState 타입을 자동 추론해서 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
