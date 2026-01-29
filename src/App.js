import React, { useRef } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Ubicanos from './components/Ubicanos';
import Footer from './components/Footer';
import { AppBar, Box, Button, Container, Toolbar, Stack, IconButton, Tooltip, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function App() {
  const ctaRef = useRef(null);
  const scrollToCTA = () => ctaRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box>
      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(6px)', bgcolor: 'rgba(15,23,42,0.6)' }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <Tooltip title="Facebook">
                  <IconButton
                    aria-label="Facebook"
                    component="a"
                    href="https://facebook.com/turbinasmaracaibo"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary' }}
                    size="small"
                  >
                    <FacebookIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Instagram">
                  <IconButton
                    aria-label="Instagram"
                    component="a"
                    href="https://instagram.com/turbinasmaracaibo"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary' }}
                    size="small"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
                {/* <Tooltip title="WhatsApp">
                  <IconButton
                    aria-label="WhatsApp"
                    component="a"
                    href="https://wa.me/584246383996"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'text.primary' }}
                    size="small"
                  >
                    <WhatsAppIcon />
                  </IconButton>
                </Tooltip> */}
              </Stack>
              <Typography variant="body2" color="text.secondary">+58 424 638 3996</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                component="a" 
                href="https://wa.me/584246383996" 
                target="_blank" 
                rel="noopener noreferrer"
                size="small"
                startIcon={<WhatsAppIcon />}
              >
                Consultar
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8 }}>
        <Hero onReserveClick={scrollToCTA} />
        <Ubicanos />
        <Services />
        <Process />
        <Gallery />
        <Stats />
        {/* <Testimonials />
        <Pricing />
        <div ref={ctaRef}><CTA /></div> */}
        <Footer />
      </Box>
    </Box>
  );
}
