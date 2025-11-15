import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LayoutWithSidebar from './layouts/LayoutWithSidebar';
import Home from './pages/Home';
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
            </LayoutWithSidebar>
          </MainLayout>
          }
        />
      </Routes>
    </Router>
  ) 
}

export default App
