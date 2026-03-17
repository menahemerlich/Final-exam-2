import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './pages/HomePage';
import AddLauncherPage from './pages/AddLauncherPage';
import LauncherDetailsPage from './pages/LauncherDetailsPage';
import Provider from './context/Provider';
import UpdateLauncher from './components/UpdateLauncher';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LoginProtected from './protected/LoginProtected';
import AdminProtected from './protected/AdminProtected';
import IntelligenceProtected from './protected/IntelligenceProtected';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<LoginProtected />}>
            <Route element={<AdminProtected />}>
              <Route path='/register' element={<RegisterPage />} />
            </Route>
            <Route path='/home' element={<HomePage />} />
            <Route element={<IntelligenceProtected />}>
              <Route path='new-launcher' element={<AddLauncherPage />} />
              <Route path='/update-launcher' element={<UpdateLauncher />} />
            </Route>
            <Route path='/details/:launcherId' element={<LauncherDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
