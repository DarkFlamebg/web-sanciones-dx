import React from "react";
import { Box, Typography, Grid } from '@mui/material';

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
        <section className="container_abuso_comandos" id="jail-ac">
            <Box sx={{ backgroundColor: '#f2f2f2', padding: '2rem', borderRadius: '8px' }}>
                <Typography variant="h4" component="h2" sx={{ marginBottom: '1rem', padding: '0.5rem', fontWeight: 'bold' }}>
                    Jails Extras
                </Typography>
                <Grid container spacing={4}>
                    {sanciones.map((sancion, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Box
                                sx={{
                                    backgroundColor: '#fff',
                                    padding: '1.5rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h6" component="p" sx={{ fontWeight: '500' }}>
                                    {sancion.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ margin: '0.5rem 0' }}>
                                    {sancion.descripcion}
                                </Typography>
                                {sancion.extraDescripcion && sancion.extraDescripcion.map((linea, idx) => (
                                    <Typography variant="body2" key={idx} sx={{ margin: '0.25rem 0' }}>
                                        {linea}
                                    </Typography>
                                ))}
                                <Box
                                    component="img"
                                    src={sancion.imagen}
                                    alt={sancion.alt}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '4px',
                                        marginTop: '1rem',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
};

export default JailsExtras;
