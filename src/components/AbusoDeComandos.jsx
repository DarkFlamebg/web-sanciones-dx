import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Masonry from "@mui/lab/Masonry";

import ejemploAc1 from '../assets/AbusoDeComando/ejemplo-Ac-1.gif';
import ejAc2 from '../assets/AbusoDeComando/ej-AC2.gif';
import ejemploAcVehiculo from '../assets/AbusoDeComando/ejemplo-Ac-1.gif';
import ejemploAcCaida from '../assets/AbusoDeComando/ej-ac-evitadaho.gif';
import ejemploAcParar from '../assets/AbusoDeComando/ej-ac-parar.gif';
import ejemploAcSaludar from '../assets/AbusoDeComando/ej-ac-saludar.gif';

const AbusoDeComandos = () => {
    // Datos de las sanciones
    const sanciones = [
        {
        titulo: 'AC: Abuso de Comandos',
        descripcion: 'Abuso de Comandos',
        imagen: ejemploAc1,
        alt: 'Ejemplo de AC (Abuso de Comandos)'
        },
        {
        titulo: 'AC2: Floodear un comando',
        descripcion: 'Floodear un comando para que el servidor kickee 150 minutos (forma masiva 200 minutos).',
        imagen: ejAc2,
        alt: 'Ejemplo de AC2'
        },
        {
        titulo: 'AC: /parar para salir de un vehículo',
        descripcion: '400 minutos',
        imagen: ejemploAcVehiculo,
        alt: 'Ejemplo de AC para salir de un vehículo'
        },
        {
        titulo: 'AC: /parar para evadir daño de caída',
        descripcion: '500 minutos',
        imagen: ejemploAcCaida,
        alt: 'Ejemplo de AC para evadir daño de caída'
        },
        {
        titulo: 'AC: disparar con /parar',
        descripcion: '700 minutos',
        imagen: ejemploAcParar,
        alt: 'Ejemplo de AC para disparar con /parar'
        },
        {
        titulo: 'AC: con /saludar o /vender (Cualquier Objeto)',
        descripcion: '900 minutos',
        imagen: ejemploAcSaludar,
        alt: 'Ejemplo de AC para saludar o vender'
        }
  ];

  return (
    <section className="container_abuso_comandos" id="jail-ac">
		<Box sx={{ 
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      marginBottom: '3rem',
    }}>
			{/* Header de la sección */}
      <Box sx={{ 
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            marginBottom: '1rem',
            fontWeight: '800',
            fontSize: { xs: '2rem', md: '2.5rem' },
            background: 'linear-gradient(135deg, #e7eaf0ff 0%, #d9dfe9ff 50%, #eff1f3ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '1px',
            position: 'relative'
          }}
        >
          Abuso de Comandos
        </Typography>

        {/* Línea decorativa animada */}
        <Box sx={{
          width: '220px',
          height: '4px',
          background: 'linear-gradient(90deg, #4299e1, #38b2ac, #81e6d9)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 3s ease infinite',
          borderRadius: '2px',
          margin: '0 auto 1.5rem auto'
        }} />

        {/* Descripción mejorada */}
        <Box sx={{
          background: 'rgba(65, 67, 150, 0.1)',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          border: '1px solid rgba(56, 178, 172, 0.2)',
          backdropFilter: 'blur(10px)',
          maxWidth: '700px',
          margin: '0 auto',
          position: 'relative',
          
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(180deg, #b238b2ff, #ac4fd1ff)',
            borderRadius: '0 4px 4px 0'
          }
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#ffffffff',
              fontWeight: 600,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              textAlign: 'center'
            }}
          >
            Sanciones específicas por el mal uso de comandos del servidor
          </Typography>
        </Box>
      </Box>
            <Divider sx={{ marginBottom: "1rem" }} />
			<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {sanciones.map((sancion, index) => (
            <Box
              key={index}
              sx={{
                background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                padding: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: sancion.imagen ? "auto" : "180px",
                justifyContent: sancion.imagen ? "flex-start" : "center",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)',
                
                // Efecto de brillo sutil

                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                  transition: 'left 0.5s ease-in-out',
                },
                
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.5)",
                  background: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  
                  '&::before': {
                    left: '100%',
                  }
                },
                
                // Efecto de focus para accesibilidad
                '&:focus-within': {
                  outline: '2px solid #4299e1',
                  outlineOffset: '2px',
                }
              }}
            >
              {/* Indicador de categoría */}
              <Box sx={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'linear-gradient(45deg, #783ee5ff, #c53030)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px rgba(229, 62, 62, 0.3)'
              }}>
                CMD
              </Box>
              
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#f7fafc",
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.3,
                  background: 'linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {sancion.titulo}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  margin: "0 0 1rem 0",
                  fontWeight: "500",
                  color: "#cbd5e0",
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                {sancion.descripcion}
              </Typography>

              {sancion.explicacion && (
                <Box sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: sancion.imagen ? '1.5rem' : '0',
                  backdropFilter: 'blur(5px)'
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#a0aec0",
                      fontSize: '0.9rem',
                      lineHeight: 1.5
                    }}
                  >
                    💡 {sancion.explicacion}
                  </Typography>
                </Box>
              )}

              {sancion.imagen && (
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "320px",
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: "12px",
                    marginTop: "auto"
                  }}
                >
                  <Box
                    component="img"
                    src={sancion.imagen}
                    alt={sancion.alt}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)"
                      }
                    }}
                  />
                  {/* Overlay sutil en la imagen */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)',
                    borderRadius: "12px",
                    pointerEvents: 'none'
                  }} />
                </Box>
              )}
            </Box>


          ))}
        </Masonry>
      </Box>
    </section>
  );
};

export default AbusoDeComandos;
