import React from 'react';
import CustomCard from './CustomCard';
import { Grid } from '@mui/material';

const sampleData = [
  {
    image: 'https://via.placeholder.com/345x140',
    title: 'Card Title 1',
    description: 'This is a description of the first card.',
    link: '#' 
  },
  {
    image: 'https://via.placeholder.com/345x140',
    title: 'Card Title 2',
    description: 'This is a description of the second card.',
    link: '#' 
  },
  {
    image: 'https://via.placeholder.com/345x140',
    title: 'Card Title 3',
    description: 'This is a description of the third card.',
    link: '#' 
  },
  {
    image: 'https://via.placeholder.com/345x140',
    title: 'Card Title 3',
    description: 'This is a description of the third card.',
    link: '#' 
  }
];

const CardList = () => {
  return (
    <Grid container spacing={8} justifyContent="center">
      {sampleData.map((item, index) => (
        <Grid item key={index}>
          <CustomCard image={item.image} title={item.title} description={item.description} link={item.link} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
