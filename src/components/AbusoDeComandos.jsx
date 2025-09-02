import React from 'react';
import { Box, Typography, Divider, Grid } from '@mui/material';
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
		<Box sx={{ backgroundColor: '#f2f2f2', padding: '2rem', borderRadius: '8px' }}>
			<Typography variant="h4" component="h2" sx={{ marginBottom: '1rem', padding: '0.5rem', fontWeight: 'bold' }}>
				Abuso de Comandos
			</Typography>
            <Divider sx={{ marginBottom: "1rem" }} />
			<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
			{sanciones.map((sancion, index) => (
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
          minHeight: sancion.imagen ? "auto" : "150px",
                justifyContent: sancion.imagen ? "flex-start" : "center",
                transition: "transform 0.5s ease, box-shadow 0.3s ease", // Transiciones para el hover
                "&:hover": {
                  transform: "scale(1.02)", // Escala la tarjeta ligeramente
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", // Aumenta la sombra
                  backgroundImage: "linear-gradient(135deg, #e0e0e0, #f9f9f9)", // Invertir el degradado
                },
          
					}}
				>
					<Typography variant="h6" component="p" sx={{ fontWeight: '500' }}>
					{sancion.titulo}
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ margin: '0.5rem 0' }}>
					{sancion.descripcion}
					</Typography>
					<Box
					component="img"
					src={sancion.imagen}
					alt={sancion.alt}
					sx={{
						width: '100%',
						height: 'auto',
                        maxWidth: "3000px",
						borderRadius: '4px',
						marginTop: '1rem',
						boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)'
					}}
					/>
				</Box>
				
			))}
			</Masonry>
		</Box>
    </section>
  );
};

export default AbusoDeComandos;
