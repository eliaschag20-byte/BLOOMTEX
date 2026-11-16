# BLOOMTEX Landing Page

Landing page oficial de **BLOOMTEX** — El Sistema Operativo de IA para la industria textil de Paraguay y Latinoamérica.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animaciones)
- Lucide React (iconos)

## Colores de marca (del Manual de Marca)

| Color          | Hex       |
|----------------|-----------|
| Purple         | `#8B5CF6` |
| Purple Light   | `#C4B5FD` |
| Green          | `#2F855A` |
| Green Light    | `#68D391` |
| Navy           | `#1F2937` |
| White          | `#FFFFFF` |

## Fuentes

- **Montserrat** → Encabezados
- **Inter** → Cuerpo de texto

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── components/     # Secciones de la landing
├── lib/            # Utilidades (currency, etc.)
├── App.tsx
├── main.tsx
└── index.css
public/
└── logo.png        # Logo oficial BLOOMTEX
```

## Características

- ✅ Diseño responsive
- ✅ Toggle de moneda PYG / USD
- ✅ Simulador interactivo de impacto económico
- ✅ Animaciones con Framer Motion
- ✅ Adaptado a contexto paraguayo
- ✅ Equipo: Valeria García (CEO), Elias Chavez (CTO), Nicole Cáceres (CFO)

## Subir a GitLab

```bash
git init
git add .
git commit -m "Initial commit: BLOOMTEX landing page"
git remote add origin https://gitlab.com/tu-usuario/bloomtex-landing.git
git push -u origin main
```

---

© BLOOMTEX · Asunción, Paraguay
