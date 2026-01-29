import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = [
  { t: 'Recepción y diagnóstico', d: 'Inspección inicial y pruebas para identificar fallas y condiciones de servicio.', icon: <SearchIcon /> },
  { t: 'Desarme y limpieza', d: 'Desensamble controlado, limpieza química y verificación dimensional de componentes.', icon: <CleaningServicesIcon /> },
  { t: 'Reemplazo y rectificación', d: 'Sustitución de piezas, rectificación y soldadura de precisión según tolerancias OEM.', icon: <BuildIcon /> },
  { t: 'Pruebas finales', d: 'Pruebas de banco, chequeo hidráulico y control de calidad antes de la entrega.', icon: <CheckCircleIcon /> },
];

export default function Process() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Proceso</Typography>
        <Grid container spacing={3}>
          {steps.map((s, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Card sx={{ height: '100%', p: 2, transition: 'transform .18s', '&:hover': { transform: 'translateY(-6px)' } }} elevation={3}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mb: 1 }}>{s.icon}</Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{s.t}</Typography>
                  <Typography variant="body2" color="text.secondary">{s.d}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
