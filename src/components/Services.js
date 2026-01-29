import React, { useRef, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography, Stack } from '@mui/material';

const items = [
  {
    title: 'Reconstrucción de convertidores', desc: 'Nuestro servicio de reparación de convertidor incluye pasta Raybestos, estopera original y sello oring o teflón según sea el caso y soldadura MicroWire. El costo dependerá si hay que colocar el disco lockup. En ambos casos nuestra garantía es de 45 días.' },
  // { title: 'Diagnóstico de transmisión', desc: 'Pruebas, escaneo y evaluación para determinar el estado real.' },
  // { title: 'Mantenimiento preventivo', desc: 'Cambio de fluidos, filtros y ajuste de parámetros.' },
];

export default function Services() {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = { threshold: 0.5 };
    const handleIntersection = (entries) => {
      const entry = entries[0];
      const vid = videoRef.current;
      if (!vid) return;
      if (entry.isIntersecting) {
        vid.muted = true;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // autoplay might be blocked; keep controls for manual play
          });
        }
      } else {
        try { vid.pause(); } catch (e) { }
      }
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    const el = videoRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <Box sx={{ pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>Servicios</Typography>

        {/* Sección principal: texto a la izquierda, video a la derecha */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Servicios integrales en convertidores de transmisiones automáticas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Ofrecemos reconstrucción de convertidores, diagnóstico completo de sus fallas, mantenimiento preventivo y asesoría técnica especializada. Nuestro equipo trabaja con piezas de calidad comprobada y procesos estandarizados para asegurar resultados confiables y duraderos.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Atendemos tanto a particulares como a talleres, realizando pruebas y diagnóstico al momento, ajuste de piezas mecánicas y montaje final con garantía.
              </Typography>
              {items.map((it, idx) => (
                  <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{it.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>{it.desc}</Typography>
                  </Paper>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Box sx={{ width: '100%', maxWidth: 320, boxShadow: 2, overflow: 'hidden' }}>
                <video
                  ref={videoRef}
                  src="/media/1.mp4"
                  muted
                  preload="metadata"
                  controls
                  playsInline
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
