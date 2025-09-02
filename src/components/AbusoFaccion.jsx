import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Masonry from "@mui/lab/Masonry";


import ejAbusoC from "../assets/Facciones/ej-abuso-controles.gif";
import ejHK from "../assets/Facciones/ej-sancion-HK.gif";
import ejNvvpj from "../assets/Facciones/ej-faccion-nvvpj.gif";
import ejNip from "../assets/Facciones/ej-sancion-nip.gif";
import ejTk from "../assets/Facciones/ej-sancion-tk.gif";
import ejCk from "../assets/Facciones/ej-sancion-ck.gif";

const AbusoFaccion = () => {
  const sanciones = [
    {
      titulo: "FA (abuso de skins)",
      descripcion: "de 60m a 300m",
    },
    {
      titulo: "FA (abuso de controles)",
      descripcion: "900m",
      imagen: ejAbusoC,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
    {
      titulo: "FA (abuso de cargos)",
      descripcion: "150m",
    },
    {
      titulo: "FA (aplicar cargos por tab)",
      descripcion: "250m",
    },
    {
      titulo: "FA (abuso de maleteros)",
      descripcion: "300m",
    },
    {
      titulo: "HK:",
      descripcion: "150m",
      imagen: ejHK,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
    {
      titulo: "NVVPJ",
      descripcion: "120m",
      imagen: ejNvvpj,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
    {
      titulo: "NIP:",
      descripcion: "200m",
      imagen: ejNip,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },

    {
      titulo: "TK",
      descripcion: "120m",
      imagen: ejTk,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },

    {
      titulo: "CK",
      descripcion: "120 minutos",
      imagen: ejCk,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
  ];
  return (
     <section className="container_abuso_faccion" id="jail-af">
    <Box sx={{ 
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      marginBottom: '3rem',
      
      // Elementos decorativos de fondo
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-40%',
        left: '-40%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(56, 178, 172, 0.08) 0%, transparent 70%)',
        animation: 'rotate-slow 25s linear infinite',
      },
      
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-30%',
        right: '-30%',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(72, 187, 120, 0.06) 0%, transparent 70%)',
        animation: 'rotate-slow 20s linear infinite reverse',
      }
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
            background: 'linear-gradient(135deg, #2d3748 0%, #38b2ac 50%, #2d3748 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '1px',
            position: 'relative'
          }}
        >
          Abuso de Facción
        </Typography>

        {/* Línea decorativa animada */}
        <Box sx={{
          width: '340px',
          height: '4px',
          background: 'linear-gradient(90deg, #38b2ac, #4fd1c7, #81e6d9, #38b2ac)',
          backgroundSize: '300% 100%',
          animation: 'gradient-shift 4s ease infinite',
          borderRadius: '2px',
          margin: '0 auto 1.5rem auto',
          boxShadow: '0 2px 8px rgba(56, 178, 172, 0.3)'
        }} />

        {/* Descripción mejorada */}
        <Box sx={{
          background: 'rgba(56, 178, 172, 0.1)',
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
            background: 'linear-gradient(180deg, #38b2ac, #4fd1c7)',
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
            🏢 FA (Abusar de tu facción) - Aplica para SAPD, SAFA, CNN, MECÁNICOS y ABOGADOS
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ marginBottom: "1rem" }} />
      {/* Grid de sanciones */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {sanciones.map((sancion, index) => (
            <Box
              key={index}
              sx={{
                background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                padding: '2rem',
                border: '1px solid rgba(56, 178, 172, 0.2)',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(56, 178, 172, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                minHeight: sancion.imagen ? "auto" : "180px",
                justifyContent: sancion.imagen ? "flex-start" : "center",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
                
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
                  outline: '2px solid #38b2ac',
                  outlineOffset: '2px',
                }
              }}
            >
              {/* Badge de categoría */}
              <Box sx={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'linear-gradient(45deg, #38b2ac, #4fd1c7)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 12px rgba(56, 178, 172, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                Facción
              </Box>

              {/* Icono de facción */}
              <Box sx={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.15), rgba(56, 178, 172, 0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                border: '2px solid rgba(56, 178, 172, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                
                '&:hover': {
                  transform: 'rotate(180deg)',
                  background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.25), rgba(56, 178, 172, 0.15))',
                  borderColor: 'rgba(56, 178, 172, 0.4)'
                }
              }}>
                <Typography sx={{ 
                  fontSize: '1.8rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                }}>
                  👮
                </Typography>
              </Box>

              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#2d3748",
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.3,
                  background: 'linear-gradient(135deg, #399e96ff 0%, #38b2ac 100%)',
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
                  fontWeight: "700",
                  color: "#ffffffff",
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                {sancion.descripcion}
              </Typography>

              {sancion.explicacion && (
                <Box sx={{
                  background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.08), rgba(77, 209, 199, 0.04))',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(56, 178, 172, 0.15)',
                  marginBottom: sancion.imagen ? '1.5rem' : '0',
                  backdropFilter: 'blur(5px)',
                  position: 'relative',
                  overflow: 'hidden',
                  
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    background: 'linear-gradient(180deg, #38b2ac, #4fd1c7)',
                    borderRadius: '0 3px 3px 0'
                  }
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      color: "#2d3748",
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      fontWeight: 400
                    }}
                  >
                    🏛️ {sancion.explicacion}
                  </Typography>
                </Box>
              )}

              {sancion.imagen && (
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "100%",
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: "12px",
                    marginTop: "auto",
                    boxShadow: '0 8px 24px rgba(56, 178, 172, 0.2)'
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
                      transition: "transform 0.4s ease",
                      "&:hover": {
                        transform: "scale(1.05)"
                      }
                    }}
                  />
                  {/* Overlay de imagen con tema verde */}
                  <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, transparent 0%, rgba(56, 178, 172, 0.1) 100%)',
                    borderRadius: "12px",
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }} />
                </Box>
              )}
            </Box>
          ))}
        </Masonry>
      </Box>
    </Box>
    </section>
  );
};
export default AbusoFaccion;
