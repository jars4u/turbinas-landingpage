import React from 'react';
import { Box, Button, Container, Stack, Typography, Chip } from '@mui/material';

export default function Hero({ onReserveClick }) {
  return (
    <Box sx={{ position: 'relative', bgcolor: 'background.default', color: 'text.primary', pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 10 }, overflow: 'hidden', minHeight: { md: '70vh', lg: '80vh' } }}>
      <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(1200px 400px at 70% 20%, rgba(14,165,183,0.25), transparent), radial-gradient(800px 300px at 10% 30%, rgba(245,158,11,0.15), transparent)' }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {[...Array(5)].map((_, i) => (<span key={i}>⭐</span>))}
              <Typography variant="caption" sx={{ ml: 1 }}>Clientes satisfechos</Typography>
            </Stack>
            <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1.1, fontSize: { xs: '2.2rem', md: '3.6rem' } }}>
              Un nuevo nivel de cuidado para tu transmisión
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, color: 'text.secondary', fontWeight: 400 }}>
              Turbinas Maracaibo: expertos en convertidores de caja hidráulica y mantenimiento de transmisiones automáticas.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" size="large" onClick={onReserveClick}>Consultar Servicio</Button>
              <Button variant="outlined" color="secondary" size="large" href="#galeria">Ver trabajos</Button>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <Chip label="Garantía en cada servicio" color="primary" variant="outlined" />
              <Chip label="Atención personalizada" color="secondary" variant="outlined" />
            </Stack>
          </Box>
          <Box sx={{ flex: 1, display: 'grid', placeItems: 'center', height: '100%' }}>
            <Box
              component="img"
              src="/media/Diagram_Hero.png"
              alt="Diagrama del sistema de transmisión"
              loading="lazy"
              decoding="async"
              sx={{
                height: { xs: 'auto', md: '100%' },
                width: { xs: '100%', md: 'auto' },
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                transform: 'rotate(-18deg)',
                transformOrigin: 'center',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
