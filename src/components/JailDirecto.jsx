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
      <Box sx={{ padding: "2rem" }}>
        <Typography
          variant="h4"
          gutterBottom
          component="h2"
          sx={{ marginBottom: "1rem", padding: "0.5rem", fontWeight: "bold" }}
        >
          Jails Directos
        </Typography>
        <Typography variant="body1" paragraph className="text-content">
          Todas las siguientes faltas de rol se sancionarán sin aviso.
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />

        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {sanciones.map((sancion, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#fff",
                padding: "1.5rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: sancion.imagen ? "auto" : "150px",
                justifyContent: sancion.imagen ? "flex-start" : "center",
                transition: "transform 0.5s ease, box-shadow 0.3s ease", // Transiciones para el hover
                "&:hover": {
                  transform: "scale(1.05)", // Escala la tarjeta ligeramente
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", // Aumenta la sombra
                  backgroundImage: "linear-gradient(135deg, #e0e0e0, #f9f9f9)", // Invertir el degradado
                },
              }}
            >
              <Typography
                variant="h6"
                component="p"
                sx={{
                  fontWeight: "500",
                  marginBottom: sancion.imagen ? "0.5rem" : "0.25rem",
                }}
              >
                {sancion.titulo}
              </Typography>
              <Typography
                variant="body1"
                color="#0e0e0e"
                sx={{
                  margin: sancion.imagen ? "0 0 0.5rem" : "0",
                  flex: sancion.imagen ? "none" : "1",
                  fontWeight: "500",
                }}
              >
                {sancion.descripcion}
              </Typography>
              {sancion.explicacion && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    margin: sancion.imagen ? "0 0 1rem" : "0.5rem 0",
                    fontStyle: "italic",
                  }}
                >
                  {sancion.explicacion}
                </Typography>
              )}

              {sancion.imagen && (
                <Box
                  component="img"
                  src={sancion.imagen}
                  alt={sancion.alt}
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: "4px",
                    marginTop: "0.5rem",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
            </Box>
          ))}
        </Masonry>
      </Box>
    </section>
  );
};

export default JailDirecto;
