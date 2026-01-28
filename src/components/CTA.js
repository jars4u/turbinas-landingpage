import React, { useState } from 'react';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import ConfirmDialog from './common/ConfirmDialog';
import { guardarLead } from '../lib/leadsFirebase';

export default function CTA() {
  const [form, setForm] = useState({ nombre: '', telefono: '+58', servicio: '' });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await guardarLead({ ...form, origen: 'landing' });
      setOpen(true);
      setForm({ nombre: '', telefono: '+58', servicio: '' });
    } catch (e) {
      alert(e.message || 'Error guardando el lead');
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>¿Listo para comenzar?</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Déjanos tus datos y te contactamos.</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField label="Nombre" name="nombre" fullWidth size="small" value={form.nombre} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Teléfono" name="telefono" fullWidth size="small" value={form.telefono} onChange={handleChange} placeholder="+58xxxxxxxxxx" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField label="Servicio" name="servicio" fullWidth size="small" value={form.servicio} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSubmit}>Enviar</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <ConfirmDialog open={open} title="¡Gracias!" message="Hemos registrado tu solicitud. Te contactaremos pronto." onCancel={() => setOpen(false)} onConfirm={() => setOpen(false)} confirmText="Cerrar" />
    </Box>
  );
}
