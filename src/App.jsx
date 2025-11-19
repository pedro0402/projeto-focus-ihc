import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomBar from "./components/bottombar/BottomBar"
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import LayoutWithoutSidebar from './layouts/LayoutWithoutSidebar';
import Home from './pages/Home';
import Soundtracks from './pages/Soundtracks'
import MainLayout from './layouts/MainLayout';
import GameSoundtrack from './pages/GameSoundtrack';


function App() {
  return (
    
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
    </Router>
  ) 
}

export default App
