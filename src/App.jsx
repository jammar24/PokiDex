import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'


function App() { 
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} /> 
      
      <Route element={<ProtectedRoutes/>}>
       <Route  path='/Pokedex'  element={ <Pokedex/> } />
       <Route path='/Pokedex/:id' element={<PokeInfo />} />
      </Route>

     </Routes>
    </div>
  )
}

export default App
