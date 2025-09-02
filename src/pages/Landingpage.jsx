import React from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import '../styles/Landing.css';
import sancionImage from '../assets/ej-sancion1.png';
import sancionImageAdv from '../assets/ej-adv.png';
import sancionImageMUD from '../assets/MUD-1.png';

function Landingpage() {
    return (
        <div>
          {/* Sección de Portada */}
          <Box className="hero-section"
            sx={{
              minHeight: '100vh',
              display: 'flex',
              color: '#fff',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0',
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Sanciones 
            </Typography>
            <Typography variant="h5" sx={{color: '#fff'}}>
              Esta web esta hecha para que tengan una mejor 
              informacion sobre sanciones dentro del servidor
            </Typography>
          </Box>
    
          {/* Sección de tiempo de sanciones */}
          <Box sx={{ padding: '4rem 4.5rem' }}>
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Tiempo de sanciones
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <p><strong>Tiempo base:</strong> 60 minutos.</p>
                  <p><strong>Tiempo Extra por si comete otra falta:</strong> 50 minutos.</p>
                  <p><strong>Ejemplo:</strong> PG (60M) + NRE (50M) + IOOC (50M) = 160 minutos</p>
                </Typography>
              </Grid2>
              <Grid2 item xs={12} md={6}>
                {/* Espacio para la Imagen */}
                <Box 
                  component="img"
                  src={sancionImage}
                  sx={{ 
                    width: '100%', 
                    maxWidth: '800px',
                    height: 'auto', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '2rem auto', 
                    objectFit: 'cover',
                    backgroundColor: '#e0e0e0' 
                    }} />
              </Grid2>
            </Grid2>
          </Box>
    
          {/* Sección de Advertencias */}
          <Box sx={{ padding: '4rem 4.5rem', backgroundColor: '#f5f5f5' }}>
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
                {/* Espacio para la Imagen */}
                <Box 
                  component="img"
                  src={sancionImageAdv}
                  sx={{ 
                    width: '100%', 
                    maxWidth: '800px',
                    height: 'auto', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '2rem auto', 
                    objectFit: 'cover',
                    backgroundColor: '#e0e0e0' 
                    }} />
              </Grid2>
              <Grid2 item xs={12} md={6}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Advertencias
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Las siguente lista de faltas, son tomadas como advertencia primero y luego jail.
                </Typography>
                  <ul style={{ paddingLeft: '1.5rem',  margin: '0' }}>
                  <Typography variant="body1" color="text.secondary">
                      <li style={{ marginBottom: '0.2rem' }}>BJ (Bunny Jump)</li>
                      <li style={{ marginBottom: '0.2rem' }}>CC (Confundir Canales)</li>
                      <li style={{ marginBottom: '0.2rem' }}>ZZ (Zig Zag)</li>
                      <li style={{ marginBottom: '0.2rem' }}>MG (Meta Gaming - Dependeiendo del caso tambien se jailea)</li>
                      <li style={{ marginBottom: '0.2rem' }}>BD (Bad Driving) [Cualquier nivel]</li>
                      <li style={{ marginBottom: '0.2rem' }}>MUR (Mal uso del /reportar) [De seguir después del jaileo se procede a un kickeo]</li>
                      <li style={{ marginBottom: '0.2rem' }}>FLOOD (Repetir más de 3 veces el mismo mensaje)</li>
                  </Typography>
                  </ul>
                  
              </Grid2>
            </Grid2>
          </Box>
          
          {/* Sección de MUD */}
          <Box sx={{ padding: '4rem 4.5rem' }}>
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Mal uso del /dudas
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                La siguiente lista es el tiempo de sanción por mal uso del canal de /dudas.
              </Typography>
                <ul style={{ paddingLeft: '1.5rem',  margin: '0' }}>
                  <Typography variant="body1" color="text.secondary">
                  <li style={{ marginBottom: '0.8rem' }}>Nivel 1 a 10 = MUD "leve": 200m (advertir a niveles 1-2), MUD "grave": 400m</li>
                  <li style={{ marginBottom: '0.8rem' }}>Nivel 10 en adelante: MUD "leve": 500m, MUD "grave": 800m</li>
                  <li style={{ marginBottom: '0.8rem' }}>Insultos/bardo/Explicar bug o MNP/Evadir Mute: 999m [no importa nivel].</li>
                  </Typography>
                </ul>
              </Grid2>
              <Grid2 item xs={12} md={6}>
                {/* Espacio para la Imagen */}
                <Box 
                  component="img"
                  src={sancionImageMUD}
                  sx={{ 
                    width: '100%', 
                    maxWidth: '600px',
                    height: 'auto', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    margin: '2rem auto', 
                    objectFit: 'cover',
                    backgroundColor: '#e0e0e0' 
                    }} />
              </Grid2>
            </Grid2>
          </Box>

          {/* Sección de Contacto */}
          {/* <Box sx={{ padding: '4rem 8rem' }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Contáctanos
            </Typography>
            <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: '2rem' }}>
              Información de contacto para que los usuarios puedan comunicarse con nosotros.
            </Typography>
            <Box sx={{ width: '100%', height: '200px', backgroundColor: '#e0e0e0', margin: 'auto' }} />
          </Box> */}
        </div>
      );

}

export default Landingpage;