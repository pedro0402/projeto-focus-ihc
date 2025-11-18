import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutWithoutSidebar from './layouts/LayoutWithoutSidebar';
import BottomBar from "./components/bottombar/BottomBar"
import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/Home';
import Soundtracks from './pages/Soundtracks'
import MainLayout from './layouts/MainLayout';


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
            <BottomBar/>
            </LayoutWithSidebar>
          </MainLayout>
          }
        />
        <Route path='/soundtracks' element={
          <MainLayout>
            <LayoutWithoutSidebar>
               <Soundtracks/>
            </LayoutWithoutSidebar>
          </MainLayout>
          }/>
      </Routes>
    </Router>
  ) 
}

export default App
