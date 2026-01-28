# Turbinas Maracaibo Landing

Landing page moderna en React + MUI, con Firebase para captura de leads y despliegue en Vercel.

## Requisitos
- Node 18+
- Cuenta Firebase (Firestore habilitado)
- Vercel CLI (opcional) o dashboard web

## Configuración
1. Copia `.env.example` a `.env` y rellena las variables `REACT_APP_FIREBASE_*`.
2. Instala dependencias:

```bash
npm install
```

3. Desarrollo:
```bash
npm start
```

4. Build:
```bash
npm run build
```

5. Despliegue en Vercel:
- Importa el proyecto en Vercel (framework: Create React App).
- Comando de build: `npm run build`.
- Output: `build`.
- Añade las mismas variables de entorno en Vercel.

## Assets
- Coloca imágenes en `public/media/img-*.jpg`, el video en `public/media/demo.mp4` y `poster.jpg`.
- El logo se referencia desde `/logo.png`. Puedes copiar el logo del proyecto principal al `public/` de esta landing.

## Firebase
- La landing guarda leads en la colección `leads`. Asegura reglas seguras (p.ej. permitir `create` con validación de campos o usar un endpoint intermedio).

## Estructura
- `src/components` contiene secciones: Hero, Services, Process, Gallery, Stats, Testimonials, Pricing, CTA, Footer.
- `src/lib/leadsFirebase.js` gestiona la escritura de leads.
- `src/muiTheme.js` define tipografía y paleta.
