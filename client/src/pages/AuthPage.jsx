import React from 'react';
import './AuthPage.scss'
// import { NavLink,Link } from 'react-router-dom';
import { Link,  NavLink} from 'react-router-dom';


const AuthPage = () => {
    return (
           <React.Fragment>

            <div className="container">
                <div className="auth-page">

                    <NavLink to="login">
                    <h3>Авторизация</h3>
                    <form className='form form-login'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name='email'
                                    className="validate"
                                />
                            </div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="password"
                                name='password'
                                className="validate"
                            />
                            <label htmlFor="password">Пароль</label>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light  btn blue">Войти</button>
                            <a href='/' className='btn-outline btn-reg'>         Нет акаунта?</a>

                        </div>
                      </form>
                    </NavLink>
                    
                      <NavLink to="/registration">
                    <h3>Регистрация</h3>
                    <form className='form form-login'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    name='email'
                                    className="validate"
                                />
                            </div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="password"
                                name='password'
                                className="validate"
                            />
                            <label htmlFor="password">Пароль</label>
                        </div>
                        <div className="row">
                            <button className="wawes-effect wawes-light  btn blue">Регистрация</button>
                            <Link to='/' className='btn-outline btn-reg'>       Уже есть акаунт?</Link>

                        </div>

                    </form>
                    </NavLink>
                </div>
            </div>

            </React.Fragment>

    );
};

export default AuthPage;