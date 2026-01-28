import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const requiredKeys = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
];

function hasValidConfig(cfg) {
  return requiredKeys.every((k) => typeof cfg[k] === 'string' && cfg[k].trim().length > 0);
}

let app;
let db;
let auth;

if (hasValidConfig(firebaseConfig)) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
  setPersistence(auth, browserLocalPersistence).catch(() => {});
} else {
  // Evitar crashear la app y dar pista clara en consola.
  // Requiere definir variables REACT_APP_FIREBASE_* (ver .env.example)
  // CRA solo expone variables con el prefijo REACT_APP_
  // eslint-disable-next-line no-console
  console.error(
    '[Firebase] Configuración inválida o faltante. Revisa .env y define REACT_APP_FIREBASE_*.'
  );
}

export { db, auth };
