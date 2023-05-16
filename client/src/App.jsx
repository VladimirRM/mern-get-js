
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import AuthPage from './pages/AuthPage';
import {Routes,Route} from "react-router-dom"
// import registration from './pages/AuthPage'
// import {Login } from './pages/AuthPage'


function App() {
  return (
    <div className="app">

<Routes>
<Route
     <Route  path='NavBar' element={<NavBar/>}/>
  <Route path="/login"  element={<AuthPage/>}/>
  <Route path="/registration"  element={<AuthPage/>}/>
</Routes>

      

    </div>
  );
}

export default App;
