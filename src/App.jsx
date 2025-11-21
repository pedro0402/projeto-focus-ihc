import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import GameSoundtrack from './pages/GameSoundtrack';
import FavoritesPage from './pages/FavoritesPage'; // 👈 Importar a nova página
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <Router>
      <PlayerProvider>  
        <Routes>
          <Route 
            path='/'
            element={
            <MainLayout>
              <LayoutWithSidebar>
                <Home/>
              </LayoutWithSidebar>
            </MainLayout>
            }/>
          <Route path='/game/:gameId' element={
            <MainLayout>
              <LayoutWithSidebar>
                <GameSoundtrack/>
              </LayoutWithSidebar>
            </MainLayout>
          }/>
          {/* 👇 Adicionar a nova rota */}
          <Route path='/favoritos' element={
            <MainLayout>
              <LayoutWithSidebar>
                <FavoritesPage/>
              </LayoutWithSidebar>
            </MainLayout>
          }/>
        </Routes>
      </PlayerProvider>    
    </Router>
  ) 
}

export default App