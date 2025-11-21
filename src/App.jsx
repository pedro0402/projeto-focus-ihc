import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import GameSoundtrack from './pages/GameSoundtrackPage';
import FavoritesPage from './pages/FavoritesPage';
import { PlayerProvider } from './context/PlayerContext';
import { FavoritesProvider } from './context/FavoritesCotext';
import PlaylistPage from './pages/PlaylistPage';

function App() {
  return (
    <FavoritesProvider>
      <PlayerProvider>  
        <Router>
          <Routes>
            <Route 
              path='/'
              element={
                <MainLayout>
                  <LayoutWithSidebar>
                    <Home/>
                  </LayoutWithSidebar>
                </MainLayout>
              }
            />            
            <Route 
              path='/game/:gameId' 
              element={
                <MainLayout>
                  <LayoutWithSidebar>
                    <GameSoundtrack/>
                  </LayoutWithSidebar>
                </MainLayout>
              }
            />
            <Route 
              path='/curtidos'
              element={
                <MainLayout>
                  <LayoutWithSidebar>
                    <FavoritesPage/>
                  </LayoutWithSidebar>
                </MainLayout>
              }
            />
            <Route 
              path='/playlist/:playlistId'
              element={
                <MainLayout>
                  <LayoutWithSidebar>
                    <PlaylistPage/>
                  </LayoutWithSidebar>
                </MainLayout>
              }
            />
          </Routes>
        </Router>
      </PlayerProvider>    
    </FavoritesProvider>
  ) 
}

export default App