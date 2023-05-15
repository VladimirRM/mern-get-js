import React from 'react';
import './AuthPage.scss'


const AuthPage = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="auth-page">
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
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn btn blue">Войти</button>
                            <a href='/' className='btn-outline btn-reg'>Нет акаунта?</a>

                        </div>

                    </form>

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
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="row">
                            <button className="waves-effect waves-light btn btn blue">Войти</button>
                            <a href='/' className='btn-outline btn-reg'>Нет акаунта?</a>

                        </div>

                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AuthPage;