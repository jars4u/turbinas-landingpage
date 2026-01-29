// ...existing code...
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export default function Ubicanos() {
  // Coordenadas exactas de Turbinas Maracaibo (extraídas del enlace proporcionado)
  const lat = 10.6211932;
  const lon = -71.6496979;
  const zoom = 17;

  // Google Maps embed (sin API key) y enlace para direcciones (abre app/dispositivo)
  const embedSrc = `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`;
  const directionsSrc = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;

  return (
    <Box sx={{ py: 6, bgcolor: 'background.paper' }} id="ubicacion">
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
          Ubícanos
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Aquí está la ubicación de nuestro taller. Pulsa "Cómo llegar" para abrir las instrucciones de ruta en Google Maps (tu dispositivo propondrá la mejor ruta).
        </Typography>

        <Box sx={{ overflow: 'hidden', boxShadow: 3 }}>
          <Box
            component="iframe"
            title="Mapa - Turbinas Maracaibo"
            src={embedSrc}
            sx={{ width: '100%', height: { xs: 300, md: 480 }, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button
            component="a"
            href={directionsSrc}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
          >
            Cómo llegar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
// ...existing code...