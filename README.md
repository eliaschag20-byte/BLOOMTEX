# BLOOMTEX

Sitio web de **BLOOMTEX**, el Sistema Operativo de IA para marcas de moda, productores textiles y talleres de confección de Paraguay y LATAM. Agente de IA: **Bloomie**.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion · Lucide React.

## Requisitos

- Node.js 18 o superior (recomendado 20)
- npm

## Instalación y desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/BLOOMTEX/` (el `base` de Vite es `/BLOOMTEX/`, igual que en GitHub Pages).

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila a `dist/` |
| `npm run preview` | Sirve `dist/` localmente |
| `npm run typecheck` | Revisa tipos de TypeScript |

## Deploy en GitHub Pages (GitHub Actions)

1. Sube el proyecto al repositorio:

   ```bash
   git init
   git add .
   git commit -m "BLOOMTEX: sitio web"
   git branch -M main
   git remote add origin https://github.com/eliaschag20-byte/BLOOMTEX.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, compila y publica.
4. El sitio queda en `https://eliaschag20-byte.github.io/BLOOMTEX/`.

Si cambias el nombre del repositorio, actualiza `base` en `vite.config.ts`.

## Marca

| Color | Hex |
| --- | --- |
| Purple | `#8B5CF6` |
| Light Purple | `#C4B5FD` |
| Green | `#2F855A` |
| Light Green | `#68D391` |
| Navy | `#1F2937` |
| White | `#FFFFFF` |

Tipografías: **Montserrat** (encabezados) e **Inter** (cuerpo). Los colores están en `tailwind.config.js` como `bloom-*`.

## Moneda

Por defecto guaraníes (PYG), con toggle a USD en el navbar. Tasa aproximada del simulador: 1 USD = 6.407 PYG (`src/context/Currency.tsx`).

## Contenido que debes completar

- **Fotos del equipo fundador:** copia `valeria.jpg`, `elias.jpg` y `nicole.jpg` en `public/team/`. Mientras no existan, cada círculo permite cargar una foto de prueba (se guarda solo en ese navegador).
- **Calendario de la demo:** hoy solo simula la confirmación. Conéctalo a tu agenda real en `src/components/Demo.tsx` (función `confirm`).
- **Imágenes:** las fotos de telas y capturas del producto salen de tu PDF de recursos, en `public/images/`. Reemplázalas por archivos de mayor resolución cuando las tengas.
- **Logo:** `public/logo.png`.

## Estructura

```
.github/workflows/deploy.yml   Deploy a GitHub Pages
public/                        logo.png, images/ (telas, capturas, Bloomie)
src/
  main.tsx, App.tsx, index.css
  context/Currency.tsx         PYG / USD
  lib/asset.ts                 Rutas de /public con base
  components/                  Navbar, Hero, Problem, Solution, Agent, Bloomie,
                               Simulator, Sustainability, Platform, Comparison,
                               Impact, UseCases, Team, Demo, Footer
```
