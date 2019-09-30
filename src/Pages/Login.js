import React from 'react';

import './Login.css'

function Login(){

    return (<div className="login">
            <img className="foto" alt="Foto" src="https://cdn-dpsp.pxos.com.br/logos/logo_dpsp_home.png"></img>
            <form className='form' action="https://www.w3schools.com/html/html_forms.asp">
            <input className="user" type='text' ></input>
            <input className="user1" type='password'></input>
            <button className="bt">Login</button>
            </form>
            </div>
            );
}

export default Login;