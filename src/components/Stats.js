import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const stats = [
  { n: '10k+', l: 'Servicios realizados' },
  { n: '50+', l: 'Talleres a nivel regional' },
  { n: '10+', l: 'Talleres a nivel nacional' },
  { n: '12+', l: 'Años de experiencia' },
];

export default function Stats() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {stats.map((s, i) => (
            <Grid item xs={12} md={3} key={i}>
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
