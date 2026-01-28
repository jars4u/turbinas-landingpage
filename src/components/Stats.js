import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const stats = [
  { n: '2.7k+', l: 'Servicios realizados' },
  { n: '5k+', l: 'Clientes satisfechos' },
  { n: '15+', l: 'Años de experiencia' },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {stats.map((s, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 3, bgcolor: 'background.default', textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>{s.n}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{s.l}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
