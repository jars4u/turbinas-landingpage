import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const items = [
  { title: 'Reconstrucción de convertidores', desc: 'Desarme, limpieza profunda, reemplazo de componentes y balanceo.' },
  { title: 'Diagnóstico de transmisión', desc: 'Pruebas, escaneo y evaluación para determinar el estado real.' },
  { title: 'Mantenimiento preventivo', desc: 'Cambio de fluidos, filtros y ajuste de parámetros.' },
];

export default function Services() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Servicios</Typography>
        <Grid container spacing={2}>
          {items.map((it, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{it.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{it.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
