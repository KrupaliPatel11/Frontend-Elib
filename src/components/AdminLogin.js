import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'

const AdminLogin = () => {
  const papeStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: "45px auto"
  }
  const avatarStyle = {
    backgroundColor: '#1bbd'
  }

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  // }

  return (
    <Grid>
      <Paper elevation={10} style={papeStyle}>
        <Grid align={'center'} marginTop={4}>
          <Avatar style={avatarStyle}></Avatar>
          <h3> <b>Admin Login</b> </h3>
        </Grid>
        <TextField style={{ marginTop: 5 }} id="standard-basic" label="Email" variant="standard" placeholder='Your Email' type='email' fullWidth required />
        <TextField style={{ paddingTop: 3 }} id="standard-basic" label="Password" variant="standard" placeholder='Your Password' type='password' fullWidth required />
        <Button style={{ marginTop: 15 }} type="submit" color="primary" fullWidth variant='contained'>Login</Button>
      </Paper>
    </Grid>
  )
}

export default AdminLogin
