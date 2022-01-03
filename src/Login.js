import React from 'react';
import './Login.css'

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png" alt=""/>
<Button type="submit" onClick={signIn}>
Sign In
</Button>
      </div>
    </div>
  )
}

export default Login;
