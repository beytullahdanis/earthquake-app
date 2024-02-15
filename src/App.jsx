import { Route, Routes } from 'react-router-dom'
import Map from './components/Map'
import Homepage from './pages/Homepage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/map' element={<Map/>}></Route>
      </Routes>
  )
}

export default App
