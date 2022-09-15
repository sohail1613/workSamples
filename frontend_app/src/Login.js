import Button from '@mui/icons-material/SmartButton';
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = () => {
        //sign in...
    }
  return (
    <div className='login'>
        <div className='login_logo'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png' alt='' />
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Facebook.svg.png' alt='' />
        </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login