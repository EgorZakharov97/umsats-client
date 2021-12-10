import React from 'react'
import { Container, Box, List, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@mui/material';
import CartCard from '../components/cartCard';
import Heading from '../components/heading';

export default function Cart() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const cartData = [1,2,3,4,5]

  const styles = {
    button: {
      marginLeft: 'auto'
    }
  }
  
  return (
    <Container>
      <Heading heading="Cart" subheading="You recently added to the cart" />
      <List>
        {cartData.map(item => {
          return <CartCard/>
        })}
      </List>
      <Box>
      <Button style={styles.button} onClick={handleClickOpen} variant="contained">Proceed</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </Container>
  )
}