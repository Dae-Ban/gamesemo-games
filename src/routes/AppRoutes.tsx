import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GameListPage from '../pages/GameListPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GameListPage />} />
      
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
