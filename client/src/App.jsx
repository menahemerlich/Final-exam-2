import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import AddLauncherPage from './pages/AddLauncherPage';
import LauncherDetailsPage from './pages/LauncherDetailsPage';
import Provider from './context/Provider';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new-launcher' element={<AddLauncherPage />} />
          <Route path='/details/:launcherId' element={<LauncherDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
