import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Box sx={{ py: 4, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        <Typography variant="body2" color="text.secondary">© Turbinas Maracaibo</Typography>
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
            <Tooltip title="WhatsApp">
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
            </Tooltip>
          </Stack>
          <Typography variant="body2" color="text.secondary">+58 424 638 3996 · @turbinasmaracaibo</Typography>
        </Stack>
        <img src="/media/logo.png" alt="Logo" style={{ height: 28 }} />
      </Container>
    </Box>
  );
}
