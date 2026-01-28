import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';

const plans = [
  { t: 'Diagnóstico', p: 'Gratis*', d: 'Evaluación inicial y presupuesto.' },
  { t: 'Reconstrucción', p: '$$ dependiendo de modelo', d: 'Convertidor completo + pruebas.' },
  { t: 'Mantenimiento', p: '$$', d: 'Fluidos, filtros y ajustes.' },
];

export default function Pricing() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Precios</Typography>
        <Grid container spacing={2}>
          {plans.map((p, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>{p.t}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mt: 1 }}>{p.p}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{p.d}</Typography>
                <Button variant="contained" sx={{ mt: 2 }} component="a" href="https://wa.me/584246383996" target="_blank" rel="noopener noreferrer">Consultar</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
