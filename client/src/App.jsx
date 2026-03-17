import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import AddLauncherPage from './pages/AddLauncherPage';
import LauncherDetailsPage from './pages/LauncherDetailsPage';
import Provider from './context/Provider';
import UpdateLauncher from './components/UpdateLauncher';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/new-launcher' element={<AddLauncherPage />} />
          <Route path='/update-launcher' element={<UpdateLauncher/>}/>
          <Route path='/details/:launcherId' element={<LauncherDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
