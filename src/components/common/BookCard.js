
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, Link } from '@mui/material';
import axios from 'axios';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({ data }) {
  const PDF_FILE = `http://localhost:1337/${data.pdf.split("/public/")[1]}`;
  const handleClick = (url) => {
    axios({
      url: `http://localhost:1337/user/book/download/${data.id}`,
      method: "GET",
      responseType: 'blob'    
    }).then((response) => {
      const href = URL.createObjectURL(response.data);
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `file.pdf`);
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href)
    })
  }


  return (
    <div className="col m-2">
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 600,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Title : {data.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Author : {data.author}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  {console.log(`http://localhost:1337${data.pdf.split("/public")[1]}`)}
                  <Button style={{ marginTop: 15 }} type="submit" color="primary" fullWidth variant='contained' onClick={() => { handleClick(PDF_FILE) }}>Download Pdf</Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}



