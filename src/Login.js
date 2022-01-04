import React from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import { auth, provider} from './firebase';


function Login() {
    const signIn = () => {
auth.signInWithPopup(provider)
.then(result => {
    console.log(result.user);
})
.catch((error) => alert(error.message));
    };
  return (
    <div className="login">
      <div className="login__logo">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" alt=""/>

      </div>
      <Button type="submit" onClick={signIn}>
Sign In
</Button>
    </div>
  )
}

export default Login;
