import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserAuth } from '../hook/UserAuth';

const Login = () => {
    const navigate = useNavigate()
    const locatinon = useLocation();
    const fromPAge = locatinon.state?.from?.pathname || '/';

    const {signin} = UserAuth();

    const hendletSubnit = (event) =>{
        event.preventDfult();
        const form = event.target;
        const user = form.username.value;
        
        signin(user, () => navigate(fromPAge, {replace: true}))
    }

  return (
    <div>
        <h1>login page</h1>
        <form onSubmit={hendletSubnit}>
            <label>
                Name: <input name='username' />
            </label>
            <button type="submit" className='Editpost__btn'>Login</button>
        </form>
    </div>
  )
}

export  {Login}