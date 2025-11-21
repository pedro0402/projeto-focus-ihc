import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import GameSoundtrack from './pages/GameSoundtrack';
import FavoritesPage from './pages/FavoritesPage';
import { PlayerProvider } from './context/PlayerContext';
import { FavoritesProvider } from './context/FavoritesCotext';

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
              path='/game/classicos-8-bit'
              element={
                <MainLayout>
                  <LayoutWithSidebar>
                    <FavoritesPage/>
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