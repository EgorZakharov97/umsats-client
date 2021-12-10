import * as React from 'react';
import Typography from '@mui/material/Typography';
import { ListItem, Divider, ListItemText, Badge, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function CartCard() {
  const styles = {
    imgStyle: {
      width: '30px',
      height: '30px',
      marginRight: '10px'
    },
    returnDate: {
      margin: '0 10px'
    }
  }
  return (
    <>
      <ListItem>
        <img style={styles.imgStyle} src="https://source.unsplash.com/random" />
        <ListItemText>Item name</ListItemText>
        <ListItemText><Typography variant="body2">Descriotion</Typography></ListItemText>
          
        <Typography style={styles.returnDate} variant="subtitle1">Return: 23-23-23</Typography>

        <IconButton>
          <Badge color="secondary">
            <DeleteForeverIcon />
          </Badge>
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
}