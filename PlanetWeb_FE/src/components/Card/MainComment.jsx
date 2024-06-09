import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../../../public/Image/thero.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MainComment() {
    return (
        <Box sx={{ flexGrow: 1 }} className='container'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={image} alt="" style={{  width: '400px',height:'400px' }} />
                </Grid>
                <Grid item xs={12} md={6} className=''>
                    <div className="pading p-4">
                        <h2>
                            People destroy the environment because the environment and people are divided in mind. Verily the leaves of the tree and you are not two but one. The destruction of the great rivers and trees of the earth is our own destruction.
                            To love ourselves is to protect nature</h2>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
