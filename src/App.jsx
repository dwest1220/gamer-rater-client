import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import { Game } from "./components/games/game"
import { Login } from "./components/pages/login"
import { Register } from "./components/pages/register"
import { Authorized } from "./components/pages/auth"
import Home from "./components/pages/home"
import { SingleGame } from "./components/games/SingleGame"
import { AddGame } from "./components/games/AddGame"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Authorized />}>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Game />} />
              <Route path="/games/:id" element={<SingleGame />} />
              <Route path="/games/add" element={<AddGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
