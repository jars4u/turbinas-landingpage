import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// Si usas otros componentes de MUI, agrégalos aquí
import React, { useRef, useEffect, useState } from 'react';

function Gallery() {
  // Estado para saber si cada video está en foco
  const [inView, setInView] = useState({ youtube: false, insta1: false, insta2: false });
  const youtubeRef = useRef();
  const insta1Ref = useRef();
  const insta2Ref = useRef();
  const instaVideoRef = useRef();

  useEffect(() => {
    const options = { threshold: 0.5 };
    const handleIntersection = (entry, key) => {
      setInView((prev) => ({ ...prev, [key]: entry.isIntersecting }));
    };
    const observerYoutube = new window.IntersectionObserver(([entry]) => handleIntersection(entry, 'youtube'), options);
    const observerInsta1 = new window.IntersectionObserver(([entry]) => handleIntersection(entry, 'insta1'), options);
    const observerInsta2 = new window.IntersectionObserver(([entry]) => handleIntersection(entry, 'insta2'), options);
    if (youtubeRef.current) observerYoutube.observe(youtubeRef.current);
    if (insta1Ref.current) observerInsta1.observe(insta1Ref.current);
    if (insta2Ref.current) observerInsta2.observe(insta2Ref.current);
    return () => {
      observerYoutube.disconnect();
      observerInsta1.disconnect();
      observerInsta2.disconnect();
    };
  }, []);

  useEffect(() => {
    const vid = instaVideoRef.current;
    if (!vid) return;
    if (inView.insta1) {
      vid.muted = true;
      const p = vid.play();
      if (p !== undefined) p.catch(() => { });
    } else {
      try { vid.pause(); } catch (e) { }
    }
  }, [inView.insta1]);

  return (
    <Box id="galeria" sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 12 }}>
          Nuestro Trabajo
        </Typography>
        {/* Sección principal: 2 columnas */}
        <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box ref={youtubeRef} sx={{ position: 'relative', width: '100%', maxWidth: 327, mx: 'auto', aspectRatio: '654/817', boxShadow: 3, overflow: 'hidden' }}>
              <iframe
                src={inView.youtube ? "https://www.youtube.com/embed/Zk6Wk_-cCvc?autoplay=1&mute=1" : "https://www.youtube.com/embed/Zk6Wk_-cCvc"}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                  background: '#000',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Reparación profesional de convertidores de transmisiones automáticas
              </Typography>
              <Typography variant="body1" color="text.secondary">
                En Turbinas Maracaibo nos especializamos en el diagnóstico, reparación y mantenimiento de convertidores de caja hidráulica y transmisiones automáticas. Utilizamos tecnología avanzada y personal altamente capacitado para garantizar resultados óptimos y la satisfacción de nuestros clientes.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Gallery;