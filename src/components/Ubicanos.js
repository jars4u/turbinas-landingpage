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
      <Container maxWidth="lg" sx={{ textAlign: { xs: 'left', md: 'left' }, px: { xs: 2, md: 0 } }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: { xs: 'left', md: 'left' } }}>
          Ubícanos
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: { xs: 'left', md: 'left' } }}>
          Aquí está la ubicación de nuestro taller. Pulsa "Cómo llegar" para abrir las instrucciones de ruta en Google Maps (tu dispositivo propondrá la mejor ruta).
        </Typography>

        <Box sx={{ overflow: 'hidden', boxShadow: 3, borderRadius: 2 }}>
          <Box
            component="iframe"
            title="Mapa - Turbinas Maracaibo"
            src={embedSrc}
            sx={{ width: '100%', height: { xs: 240, md: 480 }, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Button
            component="a"
            href={directionsSrc}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{ width: { xs: '100%', md: 'auto' }, maxWidth: { xs: 420 } }}
          >
            Cómo llegar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
// ...existing code...