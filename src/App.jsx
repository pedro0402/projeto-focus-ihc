import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LayoutWithSidebar from './layouts/LayoutWithSidebar';

import Home from './pages/Home';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route 
          path='/'
          element={
          <LayoutWithSidebar>
            <Home/>
          </LayoutWithSidebar>
          }
        />
      </Routes>
    </Router>
  ) 
}

export default App
