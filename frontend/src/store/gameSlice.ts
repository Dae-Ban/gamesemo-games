import { GameInfo } from "../types/GameInfo";

interface GameFilterState {
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
  loading: false
};