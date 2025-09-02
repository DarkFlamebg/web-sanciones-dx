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
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                  radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
                `,
                animation: 'float 6s ease-in-out infinite',
              },
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' }
              }
            }}

          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #ffffffff 30%, rgba(255, 255, 255, 1) 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                letterSpacing: '1px'
              }}
            >
              Sistema de Sanciones
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                fontWeight: 300,
                marginBottom: '2rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)'
              }}
            >
              Plataforma diseñada para brindar información clara y accesible sobre las 
              sanciones del servidor, promoviendo una mejor comprensión y cumplimiento 
              de las normas comunitarias.
            </Typography>
            {/* Indicador de scroll */}
            <Box sx={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              animation: 'bounce 2s infinite'
            }}>
              <Box sx={{
                width: '2px',
                height: '30px',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)',
                margin: '0 auto 8px auto',
                borderRadius: '1px'
              }} />
              <Typography sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.8rem',
                fontWeight: 300
              }}>
                Desplázate
              </Typography>
            </Box>
          </Box>
    
          {/* Sección de tiempo de sanciones */}
          <Box
            sx={{
              padding: '4rem 4.5rem',
              backgroundImage: 'linear-gradient(135deg, #1e1e2f 0%, #2b2b3c 100%)',
              color: '#e0e0e0'
            }}
          >
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: '#f5f5f5', // un gris muy claro en contraste
                    marginBottom: '1.5rem'
                  }}
                >
                  Tiempo de sanciones
                </Typography>

                <Box
                  sx={{
                    backgroundColor: 'rgba(46, 46, 62, 0.85)', // gris oscuro semi-transparente
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #44475a',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <Typography variant="body1" sx={{ color: '#d0d0d0', lineHeight: 1.6 }}>
                    <p>
                      <strong style={{ color: '#e74c3c' }}>Tiempo base:</strong> 60 minutos.
                    </p>
                    <p>
                      <strong style={{ color: '#f39c12' }}>Tiempo Extra por si comete otra falta:</strong> 50 minutos.
                    </p>
                    <p>
                      <strong style={{ color: '#3498db' }}>Ejemplo:</strong> PG (60M) + NRE (50M) + IOOC (50M) = 160 minutos
                    </p>
                  </Typography>
                </Box>
              </Grid2>

              <Grid2 item xs={12} md={6}>
                <Box
                  component="img"
                  src={sancionImage}
                  sx={{
                    width: '100%',
                    maxWidth: '800px',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                    margin: '2rem auto',
                    objectFit: 'cover',
                    backgroundColor: '#2e2e3e',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)'
                    }
                  }}
                />
              </Grid2>
            </Grid2>
          </Box>

    
          {/* Sección de Advertencias */}
          <Box
            sx={{
              padding: '4rem 4.5rem',
              backgroundImage: 'linear-gradient(135deg, #23232f 0%, #2e2e3e 100%)',
              color: '#f5f5f5'
            }}
          >
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
                <Box
                  component="img"
                  src={sancionImageAdv}
                  sx={{ 
                    width: '100%', 
                    maxWidth: '600px',
                    height: 'auto', 
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    margin: '2rem auto', 
                    objectFit: 'cover',
                    backgroundColor: '#e8eaf0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)'
                    }
                  }} 
                />
              </Grid2>

              <Grid2 item xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: '#f5f5f5' }}
                >
                  Advertencias
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0' }} paragraph>
                  La siguiente lista de faltas, son tomadas como advertencia primero y luego jail.
                </Typography>
                <Box
                  sx={{
                    backgroundColor: 'rgba(46, 46, 62, 0.85)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #44475a'
                  }}
                >
                  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    <Typography variant="body1" sx={{ color: '#d0d0d0' }}>
                      <li>BJ (Bunny Jump)</li>
                      <li>CC (Confundir Canales)</li>
                      <li>ZZ (Zig Zag)</li>
                      <li>MG (Meta Gaming – dependiendo del caso también se jailea)</li>
                      <li>BD (Bad Driving) [Cualquier nivel]</li>
                      <li>MUR (Mal uso del /reportar) [si continúa tras el jaileo → kick]</li>
                      <li>FLOOD (Repetir más de 3 veces el mismo mensaje)</li>
                    </Typography>
                  </ul>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
          
          {/* Sección de MUD */}
          <Box
            sx={{
              padding: '4rem 4.5rem',
              backgroundImage: 'linear-gradient(135deg, #2a2a38 0%, #35354a 100%)',
              color: '#f5f5f5'
            }}
          >
            <Grid2 container spacing={4} alignItems="center">
              <Grid2 item xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: '#f5f5f5' }}
                >
                  Mal uso del /dudas
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0' }} paragraph>
                  La siguiente lista es el tiempo de sanción por mal uso del canal de /dudas.
                </Typography>
                <Box
                  sx={{
                    backgroundColor: 'rgba(53, 53, 74, 0.85)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid #555770'
                  }}
                >
                  <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                    <Typography variant="body1" sx={{ color: '#d0d0d0' }}>
                      <li>
                        <strong style={{ color: '#28a745' }}>Nivel 1 a 10:</strong> MUD "leve": 200m (advertir a niveles 1-2), MUD "grave": 400m
                      </li>
                      <li>
                        <strong style={{ color: '#17a2b8' }}>Nivel 10 en adelante:</strong> MUD "leve": 500m, MUD "grave": 800m
                      </li>
                      <li>
                        <strong style={{ color: '#dc3545' }}>Insultos/bardo/Explicar bug o MNP/Evadir Mute:</strong> 999m [no importa nivel]
                      </li>
                    </Typography>
                  </ul>
                </Box>
              </Grid2>

              <Grid2 item xs={12} md={6}>
                <Box
                  component="img"
                  src={sancionImageMUD}
                  sx={{ 
                    width: '100%', 
                    maxWidth: '600px',
                    height: 'auto', 
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    margin: '2rem auto', 
                    objectFit: 'cover',
                    backgroundColor: '#e8eaf0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)'
                    }
                  }} 
                />
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