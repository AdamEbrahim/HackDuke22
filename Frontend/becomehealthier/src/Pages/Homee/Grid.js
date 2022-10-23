import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3.25}>
          <Item>FrontEnd</Item>
        </Grid>
        <Grid item xs={5.5}>
          <Item>Motivation</Item>
          <p style={{ color: 'beige' }}>The motivation for this project was to create a way educate people about how to be healthy, as well as different ways that people are able to lead a healthy life-style</p>
        </Grid>
        <Grid item xs={3.25}>
          <Item>BackEnd</Item>
        </Grid>
      </Grid>
      
    </Box>
  );
}
