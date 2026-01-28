import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export async function guardarLead({ nombre, telefono, servicio, origen }) {
  if (!db) {
    throw new Error(
      'Firebase no configurado: define REACT_APP_FIREBASE_* en .env para permitir guardar leads.'
    );
  }
  const tel = String(telefono || '').replace(/[-\s]/g, '');
  if (!/^\+58\d{10}$/.test(tel)) throw new Error('Teléfono inválido. Formato +58xxxxxxxxxx');
  const payload = {
    nombre: (nombre || '').trim().toUpperCase(),
    telefono: tel,
    servicio: (servicio || '').trim().toUpperCase(),
    origen: origen || 'landing',
    creadoEn: serverTimestamp(),
  };
  return addDoc(collection(db, 'leads'), payload);
}
