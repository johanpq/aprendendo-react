import './App.css'

// ! Reaaproveitamento de estruturas
import { Outlet } from 'react-router-dom' // O contéudo da rota vai ser inserido no outlet

// ! Navegando entre links
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <div>React Router</div>
        <Outlet />
        <div>Footer</div>
      </div>
    </>
  )
}

export default App
