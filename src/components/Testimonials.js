import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const items = [
  { n: 'Carlos M.', t: 'Excelente trabajo, mi camioneta quedó como nueva.' },
  { n: 'María R.', t: 'Profesionales y muy cumplidos, recomendado 100%.' },
  { n: 'José A.', t: 'Solucionaron un problema que nadie encontraba.' },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Testimonios</Typography>
        <Grid container spacing={2}>
          {items.map((it, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
                <Typography variant="body1">“{it.t}”</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>— {it.n}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
