import React from "react";
import { Box, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const SlideBar = () => {
    return (
      <Box
        sx={{
          width: '250px',
          height: '100vh',
          backgroundColor: '#f4f4f4',
          padding: '1rem',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          position: 'fixed',
          left: 0,
          top: 0,
          overflowY: 'auto'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Menu de Sanciones
        </Typography>
        <Divider />
        <List>
          <ListItem button component="a" href="#jails-directos">
            <ListItemText primary="Jails Directos" />
          </ListItem>
          <ListItem button component="a" href="#abuso-comandos">
            <ListItemText primary="Abuso de Comandos" />
          </ListItem>
          <ListItem button component="a" href="#facciones">
            <ListItemText primary="Facciones" />
          </ListItem>
          <ListItem button component="a" href="#sanciones-extras">
            <ListItemText primary="Sanciones Extras" />
          </ListItem>
        </List>
      </Box>
    );
  };
  
  export default SlideBar;