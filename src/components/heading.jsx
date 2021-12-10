import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Heading(props) {

  const styles = {
    header: {
      margin: '40px 10px 5px'
    }
  }

  return (
    <Box style={styles.header}>
      <Typography variant="h4" >{props.heading}</Typography>
      <Typography variant="subtitle" >{props.subheading}</Typography>
    </Box>
  )
}