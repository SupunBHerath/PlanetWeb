import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Typography } from '@mui/material';

const CommentCard = ({ avatar, name, job, comment }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} alt={name} />
        }
        title={name}
        subheader={job}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
