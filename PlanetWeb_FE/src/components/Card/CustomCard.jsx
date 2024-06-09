import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CustomCard = ({ image, title, description, link }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        transition: 'transform 0.3s', 
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        } 
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt={title}
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
