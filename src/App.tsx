 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutWrapper from './components/common/LayoutWrapper'
 
 
 

function App() {
   
  return (
    <LayoutWrapper>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
      </Routes>
    </LayoutWrapper>
  )
}

export default App
