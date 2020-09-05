import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from "./reducer"
import { useStateValue } from "./StateProvider"

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth()
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src='data:image/png;base64,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' alt='' 
                />
                <img 
                    src='https://i0.wp.com/rashgh.com/wp-content/uploads/2019/11/skynews-facebook-logo_4826956.jpg?fit=1200%2C675&ssl=1' alt=''
                />
            </div>
            <Button type='submit' onClick={signIn} >
                SignIn
            </Button>
        </div>
    )
}

export default Login
