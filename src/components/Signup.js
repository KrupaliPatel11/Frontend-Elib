import React, { useState } from 'react'
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Sign = () => {

  const papeStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: "45px auto"
  }
  const avatarStyle = {
    backgroundColor: '#1bbd'
  }
  const style = {
    marginTop: 5
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()
  // let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:1337/user/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data) {
      console.log(data);
      alert("User Created");
      navigate('/login');
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <Grid>
      <Paper elevation={10} style={papeStyle}>
        <Grid align={'center'} >
          <Avatar style={avatarStyle}></Avatar>
          <h3> <b>Register</b> </h3>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField onChange={(e) => setName(e.target.value)} style={style} name='name' id="name" label="Name" variant="standard" placeholder='Your Name' type='name' fullWidth required />
          <TextField onChange={(e) => setEmail(e.target.value)} style={style} id="email" name="email" label="Email" variant="standard" placeholder='Your Email' type='email' fullWidth required />
          <TextField onChange={(e) => setPassword(e.target.value)} style={{ paddingTop: 3 }} name='password' id="password" label="Password" variant="standard" placeholder='Your Password' type='password' fullWidth required />
          <Button style={{ marginTop: 15 }} type="submit" color="primary" fullWidth variant='contained'>Register</Button>
        </form>
        <Typography style={{ marginTop: 15 }}>Already Have An Account ?
          <Link href="/login">
            Login Here
          </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Sign
