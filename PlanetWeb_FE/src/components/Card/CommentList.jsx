import React from 'react';
import CommentCard from './CommentCard';
import { Grid } from '@mui/material';

const sampleComments = [
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'John Doe',
    job: 'Software Engineer',
    comment: '"Planet Protectors mission resonates with my belief that environmental conservation is a collective responsibility. The dedication and tangible results of this project are inspiring. Its not just about planting trees; its about nurturing the future of our planet. I am proud to support this remarkable initiative."'
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    job: 'Product Manager',
    comment: '"As a singer, I\'ve always used my voice to connect with people and make a positive impact. The "Planet Protectors" project does the same, only through the harmony of nature. It\'s beautiful to see how they\'re restoring life and hope in our forests. I\'m honored to be a part of this movement.'
  },
  {
    avatar: 'https://via.placeholder.com/150',
    name: 'Alice Johnson',
    job: 'UX Designer',
    comment: '"Teaching physics has always made me appreciate the intricate balance of our universe. The "Planet Protectors" project brings that balance to life on a local scale. It demonstrates that small actions can have vast consequences in the realm of ecology. This project is a living lesson for my students and for us all." '
  }
];

const CommentList = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {sampleComments.map((item, index) => (
        <Grid item key={index}>
          <CommentCard 
            avatar={item.avatar} 
            name={item.name} 
            job={item.job} 
            comment={item.comment} 
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentList;
