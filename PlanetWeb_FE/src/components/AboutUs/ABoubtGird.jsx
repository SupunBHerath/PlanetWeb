import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../../../public/Image/a1.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AboutUs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img src={image} alt="" style={{backgroundColor:'red' , width:'100%'}}/>
        </Grid>
        <Grid item xs={12} md={4} className=''>
            <div className="pading p-4">
            <h1 className='display-2'>Planet Protectors</h1>
            <br />
             <h3>In a world grappling with critical environmental challenges, the “Planet Protectors” project emerges as a beacon of hope and positive change. Led by the venerable Most Ven. Thihthagalle Anandasiri Thero and fueled by the unwavering dedication of IUHS University Undergraduates, this initiative is a resolute response to the pressing need for environmental conservation and youth engagement.</h3>
             <button className='btn btn-success float-end p-2 mt-3'>Read More</button>
            </div>
         
        </Grid>
      </Grid>
    </Box>
  );
}
