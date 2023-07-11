import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Link } from '@mui/material';
import FileSaver from 'file-saver';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({ data }) {
  const handleClick = () => {
    FileSaver.saveAs("https://firebasestorage.googleapis.com/v0/b/recipeverse-1cf6a.appspot.com/o/2lnJwijf5Ih4qHXbs4MYq8JD8nu2%2Frecipes-08f1a18d-2697-4177-a2d7-bcdc3033c350.png?alt=media&token=3918bdf9-4217-4ee9-890c-d9723a773f2f", "image.jpg");
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
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              {/* <Img alt="complex" src={`file://${data.image}`} /> */}
              <Img alt="complex" src={`https://images.yourstory.com/cs/images/companies/263f3cf8df68-ZignutsTechnolab-1657791691163.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff`}/>
              {/* <Img alt="complex" src="/Users/ztlab131/Krupali/elib/src/zignuts.png"/> */}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Title : {data.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Author : {data.author}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                ID: {data.id}
              </Typography> */}
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  <Button style={{ marginTop: 15 }} type="submit" color="primary" fullWidth variant='contained' onClick={handleClick}>Download</Button>
                  {/* <Link  href='https://firebasestorage.googleapis.com/v0/b/recipeverse-1cf6a.appspot.com/o/2lnJwijf5Ih4qHXbs4MYq8JD8nu2%2Frecipes-0b30dd73-6838-4016-a6d1-da2c1b5388b8.png?alt=media&token=2499ced9-ea52-4c62-a83b-c6bfcb9c366d' download >link</Link> */}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}