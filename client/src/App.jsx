
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import AuthPage from './pages/AuthPage';
// import {Routes,Route,NavLink} from "react-router-dom"
// import registration from './pages/AuthPage'
// import {Login } from './pages/AuthPage'


function App() {
  return (
    <div className="app">

        {/* <Routes>
          <Route path="/registration" element={ <NavLink to="/registration"></NavLink>}/>
          <Route path="/login" element={ <NavLink to="/login"></NavLink>}/>
        </Routes> */}
<NavBar/>
<AuthPage/>
      

    </div>
  );
}

export default App;
