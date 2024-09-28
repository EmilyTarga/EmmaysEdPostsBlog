import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';

export default function PostCard({key, id, title, body}) {
  let postId = id;

  return (
    <Link href={`/post/${postId}/edit`}>
    <Card className='lg:w-auto w-25' sx={{ maxWidth: 345 }} key={key}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
           {title} 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {body} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}