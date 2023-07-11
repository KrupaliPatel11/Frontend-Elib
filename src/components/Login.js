import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const Login = () => {
  const papeStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: "45px auto"
  }
  const avatarStyle = {
    backgroundColor: '#1bbd'
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:1337/user/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('token', token);
      navigate('/user/dashboard');
      alert("Login Successfull");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <Grid>
      <Paper elevation={10} style={papeStyle}>
        <Grid align={'center'} marginTop={4}>
          <Avatar style={avatarStyle}></Avatar>
          <h3> <b>User Login</b> </h3>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField style={{ marginTop: 5 }} onChange={(e) => setEmail(e.target.value)} id="email" label="Email" variant="standard" placeholder='Your Email' type='email' fullWidth required />
          <TextField style={{ paddingTop: 3 }} onChange={(e) => setPassword(e.target.value)} id="password" label="Password" variant="standard" placeholder='Your Password' type='password' fullWidth required />
          <Button style={{ marginTop: 15 }} type="submit" color="primary" fullWidth variant='contained'>Login</Button>

        </form>
        <Typography style={{ marginTop: 15 }}>Do You Have Account ?
          <Link href="/signup">
            Register Here
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;
