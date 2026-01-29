import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          gap: 2,
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography sx={{ order: { xs: 3, md: 1 } }} variant="body2" color="text.secondary">© Turbinas Maracaibo</Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ order: { xs: 2, md: 2 }, mt: { xs: 1, md: 0 } }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Tooltip title="Facebook">
              <IconButton
                aria-label="Facebook"
                component="a"
                href="https://facebook.com/turbinasmaracaibo"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.primary', '& svg': { fontSize: { xs: 18, md: 20 } } }}
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
                sx={{ color: 'text.primary', '& svg': { fontSize: { xs: 18, md: 20 } } }}
                size="small"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <IconButton
                aria-label="WhatsApp"
                component="a"
                href="https://wa.me/584246383996"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.primary', '& svg': { fontSize: { xs: 18, md: 20 } } }}
                size="small"
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, ml: { xs: 0, md: 1 } }}
          >
            +58 424 638 3996
          </Typography>
        </Stack>
        <Box
          component="img"
          src="/media/logo.png"
          alt="Logo"
          sx={{
            height: { xs: 40, md: 28 },
            order: { xs: 0, md: 3 },
            width: { xs: '100%', md: 'auto' },
            display: { xs: 'flex', md: 'block' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            mb: { xs: 1.5, md: 0 },
            objectFit: 'contain',
          }}
        />
      </Container>
    </Box>
  );
}
