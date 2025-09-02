import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SlideBar from '../components/SlideBar';
import '../styles/sancionPage.css';

import JailsExtras from '../components/JailsExtras';
import AbusoFaccion from '../components/AbusoFaccion';
import JailDirecto from '../components/JailDirecto';
import AbusoDeComandos from '../components/AbusoDeComandos';

const SancionesPage = () => {
  return (
    <Box className="SancionesPage">
      {/* Contenedor principal */}
        {/* Sección de portada */}
        <Box className="portada">
          <Box className="content-portada">
            <Typography variant="h3" component="h1" gutterBottom>
              Página de Sanciones
            </Typography>
            <Typography variant="h6" color="#fff">
              Aquí encontrarás las reglas y penalizaciones dentro del servidor.
            </Typography>
          </Box>
        </Box>
        <Box className="content-wrapper">
            <JailDirecto />

            {/* Llamada al componente AbusoDeComandos */}
            <AbusoDeComandos />

            {/* Aquí puedes agregar más secciones si lo necesitas */}
            <AbusoFaccion />

            <JailsExtras />
        </Box>
        
      
    </Box>
  );
};

export default SancionesPage;
