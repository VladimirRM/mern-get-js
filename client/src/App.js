
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="app">
   <NavBar/>
      <AuthPage/>
      <form className='form form-login'>
        <div className="row">
          <div className="input-field col s12">
            <input 
            type="email" 
            name='email'
            className="validate"
            />
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name='email'
            className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
