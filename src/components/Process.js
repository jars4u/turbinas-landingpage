import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const steps = [
  { t: 'Recepción y diagnóstico', d: 'Inspección inicial, pruebas y evaluación del convertidor.' },
  { t: 'Desarme y limpieza', d: 'Desensamble, lavado químico y preparación de componentes.' },
  { t: 'Reemplazo y balanceo', d: 'Instalación de repuestos nuevos y balanceo dinámico.' },
  { t: 'Pruebas finales', d: 'Control de calidad y verificación de rendimiento.' },
];

export default function Process() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Proceso</Typography>
        <Grid container spacing={2}>
          {steps.map((s, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Paper sx={{ p: 3, bgcolor: 'background.default', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{s.t}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{s.d}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
