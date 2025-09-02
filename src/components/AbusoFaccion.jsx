import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import ejemploAc1 from "../assets/AbusoDeComando/ejemplo-Ac-1.gif";
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
      imagen: ejemploAc1,
      alt: "Ejemplo de AC (Abuso de Comandos)",
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
      imagen: ejemploAc1,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
    {
      titulo: "FA (aplicar cargos por tab)",
      descripcion: "250m",
      imagen: ejemploAc1,
      alt: "Ejemplo de AC (Abuso de Comandos)",
    },
    {
      titulo: "FA (abuso de maleteros)",
      descripcion: "300m",
      imagen: ejemploAc1,
      alt: "Ejemplo de AC (Abuso de Comandos)",
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
    <section className="container_abuso_comandos" id="jail-ac">
      <Box
        sx={{
          backgroundColor: "#f2f2f2",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginBottom: "1rem", padding: "0.5rem", fontWeight: "bold" }}
        >
          Abuso de Comandos
        </Typography>
        <Typography variant="body1" paragraph className="text-content">
          FA (Abusar de tu facción) Ya sea SAPD-SAFA-CNN-MECANICO-ABOGADOS
        </Typography>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
          {sanciones.map((sancion, index) => (
            <Box
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
                transition: "transform 0.5s ease, box-shadow 0.3s ease", 
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)", 
                  backgroundImage: "linear-gradient(135deg, #e0e0e0, #f9f9f9)", 
                },
              }}
            >
              <Typography variant="h6" component="p" sx={{ fontWeight: "500" }}>
                {sancion.titulo}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ margin: "0.5rem 0" }}
              >
                {sancion.descripcion}
              </Typography>
              <Box
                component="img"
                src={sancion.imagen}
                alt={sancion.alt}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "300px",
                  borderRadius: "4px",
                  marginTop: "1rem",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          ))}
        </Masonry>
      </Box>
    </section>
  );
};
export default AbusoFaccion;
