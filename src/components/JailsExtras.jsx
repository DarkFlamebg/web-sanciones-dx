import React from "react";
import { Box, Typography, Grid, Divider } from '@mui/material';

import ejemploAB from '../assets/extras/ej-extra-ab.gif';
import ejemploExtraAB from '../assets/extras/ejemplo-AB-1.png';
import ejemploTroll from '../assets/extras/ej-objecto-troll.png';

const JailsExtras = () => {
    const sanciones = [
        {
            titulo: 'AB (Abusar de un BUG)',
            descripcion: 'BAN de cuenta.',
            imagen: ejemploAB,
            alt: 'Ejemplo de AB (Abusar de un BUG)',
        },
        {
            titulo: 'Robar Maleteros sin rol de forma masiva',
            descripcion: 'Se catalogará como Troll Masivo',
            extraDescripcion: ['Tiempo: 500 minutos', 'De seguir haciendo lo mismo, BAN de cuenta.'],
            imagen: ejemploExtraAB,
            alt: 'Ejemplo de Troll Masivo',
        },
        {
            titulo: 'Objetos Troll',
            descripcion: 'Primero jail de 150 minutos',
            extraDescripcion: [
                'De seguir con el objeto, se procede con un jail de 200 minutos.',
                'Ya al tercer aviso, se le fuerza a vender el vehículo.'
            ],
            imagen: ejemploTroll,
            alt: 'Ejemplo de Objeto Troll',
        },
    ];

    return (
        <section className="container_jail_extra" id="jail-ac">
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
                            fontWeight: '900',
                            fontSize: { xs: '2.2rem', md: '2.8rem' },
                            background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '2px',
                            position: 'relative',
                            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
                        }}
                        >
                        Jails Extras
                        </Typography>


                    {/* Línea decorativa animada */}
                    <Box sx={{
                    width: '220px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #e1d642ff, #87b238ff, #d3c612ff)',
                    backgroundSize: '200% 100%',
                    animation: 'gradient-shift 3s ease infinite',
                    borderRadius: '2px',
                    margin: '0 auto 1.5rem auto'
                    }} />
                </Box>
                
                {/* Descripción elegante */}
                <Box sx={{
                background: 'rgba(255, 215, 0, 0.08)',
                padding: '1.5rem 2.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                backdropFilter: 'blur(15px)',
                maxWidth: '750px',
                margin: '0 auto',
                position: 'relative',
                
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: 'linear-gradient(180deg, #d69e2e, #ffd700)',
                    borderRadius: '0 4px 4px 0'
                }
                }}>
                <Typography 
                    variant="h6" 
                    sx={{ 
                    color: '#f7fafc',
                    fontWeight: 600,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    textAlign: 'center',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    Sanciones especiales con mayor severidad y condiciones únicas
                </Typography>
                </Box>
      
                <Divider sx={{ marginBottom: "1rem" }} />

                
                {/* Grid de sanciones premium */}
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={4}>
                    {sanciones.map((sancion, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                        <Box
                            sx={{
                            background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
                            padding: '2.5rem',
                            border: '1px solid rgba(255, 215, 0, 0.2)',
                            borderRadius: '20px',
                            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            minHeight: '220px',
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: 'relative',
                            overflow: 'hidden',
                            backdropFilter: 'blur(20px)',
                            
                            // Efecto de aura dorada
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: '-2px',
                                borderRadius: '22px',
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                                opacity: 0,
                                transition: 'opacity 0.5s ease',
                            },
                            
                            "&:hover": {
                                transform: "translateY(-12px) scale(1.05)",
                                boxShadow: "0 25px 60px rgba(255, 215, 0, 0.3)",
                                background: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
                                borderColor: "rgba(255, 215, 0, 0.5)",
                                
                                '&::before': {
                                opacity: 1,
                                }
                            },
                            
                            // Efecto de focus premium
                            '&:focus-within': {
                                outline: '2px solid #4299e1',
                                outlineOffset: '3px',
                            }
                            }}
                        >
                            {/* Badge premium */}
                            <Box sx={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'linear-gradient(45deg, #d69e2e, #ffd700)',
                                padding: '4px 12px',
                                borderRadius: '25px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#1a1625',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 16px rgba(255, 215, 0, 0.4)',
                                border: '2px solid rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                animation: 'premium-pulse 3s ease-in-out infinite'
                            }}>
                                Extra
                            </Box>

                            <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                                fontWeight: "800",
                                marginBottom: "1rem",
                                color: "#ffd700",
                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                lineHeight: 1.3,
                                textShadow: '0 2px 8px rgba(255, 215, 0, 0.5)',
                                letterSpacing: '0.5px'
                            }}
                            >
                            {sancion.titulo}
                            </Typography>

                            <Typography
                            variant="body1"
                            sx={{
                                margin: "0 0 1rem 0",
                                fontWeight: "500",
                                color: "#e2e8f0",
                                lineHeight: 1.6,
                                fontSize: '1rem',
                                textAlign: 'center'
                            }}
                            >
                            {sancion.descripcion}
                            </Typography>

                            {/* Extra descripciones con estilo mejorado */}
                            {sancion.extraDescripcion && (
                            <Box sx={{
                                background: 'rgba(255, 215, 0, 0.1)',
                                padding: '1rem 1.5rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 215, 0, 0.2)',
                                marginBottom: sancion.imagen ? '1.5rem' : '0',
                                backdropFilter: 'blur(10px)',
                                width: '100%',
                                position: 'relative',
                                
                                '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                background: 'linear-gradient(180deg, #ffd700, #d69e2e)',
                                borderRadius: '0 4px 4px 0'
                                }
                            }}>
                                {sancion.extraDescripcion.map((linea, idx) => (
                                <Typography 
                                    variant="body2" 
                                    key={idx} 
                                    sx={{ 
                                    margin: '0.5rem 0',
                                    color: '#f7fafc',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.5,
                                    fontWeight: 400,
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                                    '&:first-of-type': {
                                        marginTop: 0
                                    },
                                    '&:last-of-type': {
                                        marginBottom: 0
                                    }
                                    }}
                                >
                                    📋 {linea}
                                </Typography>
                                ))}
                            </Box>
                            )}

                            {sancion.imagen && (
                            <Box
                                sx={{
                                width: "100%",
                                maxWidth: "100%",
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: "16px",
                                marginTop: "auto",
                                boxShadow: '0 12px 32px rgba(255, 215, 0, 0.2)',
                                border: '2px solid rgba(255, 215, 0, 0.3)'
                                }}
                            >
                                <Box
                                component="img"
                                src={sancion.imagen}
                                alt={sancion.alt}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "14px",
                                    transition: "all 0.4s ease",
                                    "&:hover": {
                                    transform: "scale(1.08)",
                                    filter: 'brightness(1.1) contrast(1.05)'
                                    }
                                }}
                                />
                                {/* Overlay premium dorado */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(214, 158, 46, 0.05) 50%, transparent 100%)',
                                    borderRadius: "14px",
                                    pointerEvents: 'none',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                }} />
                                
                                {/* Efecto de brillo en hover */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: '-50%',
                                    left: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)',
                                    transform: 'rotate(45deg)',
                                    opacity: 0,
                                    transition: 'opacity 0.6s ease',
                                    pointerEvents: 'none',
                                }} />
                            </Box>
                            )}
                        </Box>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
                </Box>
        </section>
    );
};

export default JailsExtras;
