import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import AddLauncherPage from './pages/AddLauncherPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/new-launcher' element={<AddLauncherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
