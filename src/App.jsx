import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import LayoutWithoutSidebar from './layouts/LayoutWithoutSidebar';
import Home from './pages/Home';
import Soundtracks from './pages/Soundtracks'
import MainLayout from './layouts/MainLayout';
import GameSoundtrack from './pages/GameSoundtrack';
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
          <Route path='/soundtracks' element={
            <MainLayout>
              <LayoutWithoutSidebar>
                <Soundtracks/>
              </LayoutWithoutSidebar>
            </MainLayout>
            }/>
          <Route path='/game/:gameId' element={
            <MainLayout>
              <LayoutWithSidebar>
                <GameSoundtrack/>
              </LayoutWithSidebar>
            </MainLayout>
          }/>
        </Routes>
      </PlayerProvider>    
    </Router>
  ) 
}

export default App
