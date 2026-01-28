import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

export default function Gallery() {
  return (
    <Box id="galeria" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Nuestros trabajos</Typography>
        <Grid container spacing={2}>
          {[1,2,3,4,5,6].map((i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper sx={{ p: 1, bgcolor: 'background.default' }}>
                <img src={`/media/img-${i}.jpg`} alt={`Trabajo ${i}`} style={{ width: '100%', borderRadius: 8 }} />
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Paper sx={{ p: 1, bgcolor: 'background.default' }}>
              <video controls poster="/media/poster.jpg" style={{ width: '100%', borderRadius: 8 }}>
                <source src="/media/demo.mp4" type="video/mp4" />
              </video>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
