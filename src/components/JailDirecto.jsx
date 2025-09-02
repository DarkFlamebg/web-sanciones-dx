import React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import SancionDMlvl11 from "../assets/jaildirecto/ej-sancion-dm-2.gif";
import SancionCbug from "../assets/jaildirecto/ej-cbug-1-.gif";
import SancionSlideBug from "../assets/jaildirecto/ej-sancion-slide.gif";
import SancionCk from "../assets/jaildirecto/ej-sancion-ck.gif";
import SancionHK from "../assets/jaildirecto/ej-sancion-HK.gif";
import SancionIOOC from "../assets/jaildirecto/ej-sancion-IOOC.png";
import SancionBA from "../assets/jaildirecto/Sancion-BA-1.gif";

const JailDirecto = () => {
  // Datos de las sanciones
  const sanciones = [
    {
      titulo: "DM",
      descripcion: "Desde nivel 10 hacia abajo 150 minutos",
      explicacion:
        "Es pegar/asesinar sin razón a alguien, ya sea con un arma o con los puños.",
    },
    {
      titulo: "DM",
      descripcion: "Desde nivel 11 hacia arriba 250 minutos",
      imagen: SancionDMlvl11,
      alt: "Ejemplo de NRA",
      explicacion:
        "Es pegar/asesinar sin razón a alguien, ya sea con un arma o con los puños.",
    },
    {
      titulo: "DM a CNN",
      descripcion: "500 minutos (En directo)",
    },
    {
      titulo: "DM a Mecánicos",
      descripcion: "200 minutos (Duty y no tiene que estar armado)",
    },
    {
      titulo: "NRE: No Rolear Entorno",
      descripcion: "60 minutos",
      explicacion:
        "No rolear el entorno que rodea a tu personaje. Ejemplo: Sacar un arma en La comisaria De Los Santos.",
    },
    {
      titulo: "NRA: No Rolear Arma",
      descripcion: "60 minutos",
      explicacion:
        "No rolear Recargar/Sacar/Quitar Seguro/Recoger/Tirar un arma.",
    },
    {
      titulo: "MUVT: Mal Usar Vehiculo de Trabajo",
      descripcion: "60 minutos",
      explicacion: "Usar tu vehiculo de trabajo para",
    },
    {
      titulo: "PG: Power Gaming",
      descripcion: "60 minutos",
      explicacion:
        "Realizar acciones que serían imposibles en la vida real, o que nunca harías.",
    },
    {
      titulo: "IOOC: Insultar Fuera de Personaje",
      descripcion: "60 minutos",
      imagen: SancionIOOC,
      alt: "Ejemplo de NRA",
      explicacion:
        "Es insultar a otra persona en el canal OOC, puedes ser jaileado por esto.",
    },
    {
      titulo: "NA: Noob Abuser",
      descripcion: "60 minutos",
      explicacion:
        "Abusar de un jugador que es nuevo en el servidor, ya que el usuario nuevo está protegido al menos 2 o 3hs (Esto depende del servidor).",
    },
    {
      titulo: "SK: Spawn Kill",
      descripcion: "60 minutos",
      explicacion:
        "Es asesinar a un usuario que entra a un lugar/sale, generalmente, cuando alguien entra o sale de algún lugar tiene que esperar 5 segundos para que se le descongele la pantalla.",
    },
    {
      titulo: "CK: Car Kill",
      descripcion: "60 minutos",
      imagen: SancionCk,
      alt: "Ejemplo de NRA",
      explicacion: "Matar/Atropellar Con Un Auto a un usuario del servidor.",
    },
    {
      titulo: "RK: Revenge Kill",
      descripcion: "60 minutos",
      explicacion:
        "Es ir a asesinar/dañar al que te asesinó después de haber muerto en un rol.",
    },
    {
      titulo: "MK: Meta Kill",
      descripcion: "60 minutos",
      explicacion: "Asesinar a alguien IC por motivos OOC.",
    },
    {
      titulo: "LA: Lag Abuse",
      descripcion: "60 minutos",
      explicacion:
        "Abusar del lag de un usuario o del servidor. Ejemplo: Ir a un tiroteo con 600 de ping.",
    },
    {
      titulo: "HK: Helicopter Kill",
      descripcion: "60 minutos",
      imagen: SancionHK,
      alt: "Ejemplo de NRA",
      explicacion: "Es matar con las hélices del helicóptero.",
    },
    {
      titulo: "TK: Team Kill",
      descripcion: "60 minutos",
      explicacion: "Es asesinar a miembros de tu facción/Banda.",
    },
    {
      titulo: "NIP: Nula Interpretacion de Personaje",
      descripcion: "60 minutos",
      explicacion:
        "Como su nombre lo indica, es el nulo rol a la hora de interpretar una acción. Ejemplo: Siendo SAPD/SAFA, colocar un cepo a un vehículo sin rol alguno.",
    },
    {
      titulo: "NVVPJ: No Valorar Vida de Persnaje",
      descripcion: "60 minutos",
      explicacion:
        "Hacer cualquier cosa arriesgando la vida de tu PJ. Ejemplo: Meterte en medio de un tiroteo sin armas.",
    },
    {
      titulo: "Evadir Sistema",
      descripcion: "60 minutos",
      explicacion:
        "Cualquier intento de hacer mas rapido las cosas que las que deberia.",
    },
    {
      titulo: "Joder en CNN",
      descripcion: "60 minutos (Forma masiva 150 minutos)",
      explicacion:
        "Quedarse en la HQ molestando a los miembros de la faccion de CNN",
    },
    {
      titulo: "SK Masivo",
      descripcion: "60 minutos",
      explicacion:
        "Molestar de formas indebidas en la zona de spawn de los demas jugadores.",
    },
    {
      titulo: "IHQ: Invadir facción enemiga",
      descripcion: "60 minutos",
      explicacion:
        "Invadir facción enemiga con menos de 4/5 (depende del servidor) usuarios.",
    },
    {
      titulo: "ADI: Abuso de Interiores",
      descripcion: "150 minutos",
      explicacion:
        "Quedarse dentro, o salir y entrar en repetidas ocaciones para evitar situaciones.",
    },
    {
      titulo: "BA: Bugear Animacion",
      descripcion: "150 minutos",
      imagen: SancionBA,
      alt: "Ejemplo de NRA",
      explicacion:
        "Es cuando abusas de un bug ocurrido para tu propio beneficio.",
    },
    {
      titulo: "ER: Evadir Rol",
      descripcion: "60 minutos",
      explicacion:
        "Es desconectarse, forzar crash o usar el /morir (existen más formas) para evadir un rol que te estén haciendo.",
    },
    {
      titulo: "EK: Evadir Kill",
      descripcion: "60 minutos",
      explicacion:
        "Es desconectarse o usar un comando que te beneficie tpeandote (ejemplo de facciones legales; SAFA: /castigar [ID] [Tiempo]) para evadir que tu PJ termine abatido.",
    },
    {
      titulo: "PP: Player Paused",
      descripcion: "60 minutos",
      explicacion: "Quedarse en pausa evitando cuqluier tipo de rol.",
    },
    {
      titulo: "FC: Force Crash",
      descripcion: "60 minutos",
      explicacion: "Forzar crashear el juego evitando alguna situacion de rol.",
    },
    {
      titulo: "FLOOD Masivo",
      descripcion: "60 minutos",
      explicacion: "Repetir varias veces un mismo mensaje.",
    },
    {
      titulo: "Troll",
      descripcion: "80 minutos",
      explicacion:
        "Se toma como troll cualquier forma de molestar en eventos o molestar usuarios de forma irrespetuosa",
    },
    {
      titulo: "C-Bug",
      descripcion: "900 minutos",
      imagen: SancionCbug,
      alt: "Ejemplo de Cbug",
    },
    {
      titulo: "Slide Bug",
      descripcion: "300 minutos",
      imagen: SancionSlideBug,
      alt: "Ejemplo de Slidebug",
    },
    {
      titulo: "AIOOC: Insultar Fuera de Personaje al Staff",
      descripcion: "100 minutos",
      explicacion:
        "Insultar a la administración o a algún administrador por el canal de comunicación OOC.",
    },
    {
      titulo: "BE: Bugear Esposas",
      descripcion: "100 minutos",
      explicacion: "Hacer que se te quiten las esposas de forma irregular",
    },
  ];

  return (
    <section className="container_jail" id="penalties">
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
                  background: 'linear-gradient(135deg, #c9d2e2ff 0%, #b8c2d3ff 50%, #edeef0ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '1px',
                  position: 'relative'
                }}
              >
                Jails Directos
              </Typography>
        {/* Línea decorativa animada */}
                <Box sx={{
                  width: '120px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #e53e3e, #4299e1, #bb1ebbb7)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-shift 3s ease infinite',
                  borderRadius: '2px',
                  margin: '0 auto 1.5rem auto'
                }} />
        
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ecedeeff',
                    maxWidth: '600px',
                    margin: '0 auto',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Todas las siguentes faltas de rol serán sancionadas con Jail Directo.
                </Typography>
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
                background: 'linear-gradient(45deg, #e53e3e, #c53030)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#fff',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px rgba(229, 62, 62, 0.3)'
              }}>
                Jail
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

export default JailDirecto;
