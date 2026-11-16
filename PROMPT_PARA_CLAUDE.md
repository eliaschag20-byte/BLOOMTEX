# Prompt para Claude — Generar / Completar Proyecto BLOOMTEX Landing Page

Copia y pega el siguiente prompt en Claude (o Claude Projects / Artifacts) para que genere o refine el proyecto completo sin alucinar:

---

**PROMPT:**

Actúa como un desarrollador frontend senior especializado en React + TypeScript + Tailwind + Framer Motion. 

Tu tarea es crear (o revisar y completar) una landing page profesional y completa para **BLOOMTEX**, basándote estrictamente en la estructura y contenido del sitio https://clothes4ll.com/ pero adaptada 100% a la nueva marca.

### Reglas estrictas (no alucines):

1. **Marca y nombre**: Todo "Clothes4ll", "Clothy" o referencias a México se reemplazan por **BLOOMTEX** y contexto de **Paraguay**.
2. **Logo**: Usar el archivo `public/logo.png` (diseño floral/mandala púrpura que se proporciona).
3. **Paleta de colores exacta del Manual de Marca**:
   - Primary Purple: `#8B5CF6`
   - Light Purple: `#C4B5FD`
   - Green: `#2F855A`
   - Light Green: `#68D391`
   - Navy/Dark: `#1F2937`
   - White: `#FFFFFF`
4. **Fuentes**: Montserrat (display/headings) + Inter (body). Cargar desde Google Fonts.
5. **Equipo fundador (exacto)**:
   - Valeria García — Founder & CEO
   - Elias Chavez — Founder & CTO
   - Nicole Cáceres — Founder & CFO
6. **Moneda**: Por defecto Guaraníes paraguayos (PYG). Toggle en navbar para cambiar a USD. Usar tasa aproximada 1 USD = 7.500 PYG para los cálculos del simulador. Formatear con `Intl.NumberFormat`.
7. **Narrativa y contexto**:
   - Enfocada en Paraguay (Asunción, Ciudad del Este, industria maquila, AICP, exportaciones textiles ~US$ 323 millones en 2025).
   - Mantener el tono profesional, orientado a marcas de moda, productores textiles y talleres de confección de Paraguay y LATAM.
   - No inventar estadísticas falsas. Adaptar las existentes de forma realista.
8. **Secciones obligatorias** (mismas que clothes4ll.com, adaptadas):
   - Navbar fija con logo, links de ancla, toggle de moneda (PYG/USD) y CTA "Agenda una demo"
   - Hero con headline "Produce lo que necesitas. No lo que supones." + mockup de dashboard
   - El Problema (stats + 3 causas)
   - La Solución (3 pilares)
   - Agente de IA llamado **Bloom** (chat mockup)
   - Simulador Interactivo (3 roles: Marcas / Productores / Talleres) con sliders y resultados dinámicos en la moneda seleccionada
   - La Plataforma (7 features incluyendo DPP/Pasaporte Digital)
   - Comparativo Tradicional vs BLOOMTEX OS
   - Impacto medible (−30%, −70%, −15%)
   - Casos de Uso (3 columnas)
   - Equipo (3 fundadores)
   - CTA final
   - Footer completo
9. **Stack técnico obligatorio**:
   - Vite + React 18 + TypeScript
   - Tailwind CSS (con colores personalizados en `tailwind.config.js`)
   - Framer Motion para animaciones de entrada (useInView + motion)
   - Lucide React para iconos
   - Componentes separados en `src/components/`
   - Utilidad de moneda en `src/lib/currency.ts`
10. **Animaciones**: Suaves, profesionales, con Framer Motion. No exageradas.
11. **Responsive**: Mobile-first, perfecto en mobile, tablet y desktop.
12. **No inventes**:
    - No agregues páginas adicionales que no se pidan.
    - No inventes features, precios o testimonios que no estén en la estructura original adaptada.
    - No uses placeholders genéricos de Lorem Ipsum en el contenido final.
    - No cambies los nombres del equipo ni los colores.

### Entregables esperados:

- Proyecto completo listo para `npm install && npm run dev`
- Todos los archivos de configuración (package.json, vite.config.ts, tailwind.config.js, tsconfig, etc.)
- Componentes React limpios y tipados
- README.md con instrucciones de instalación y deploy a GitLab/Vercel
- El logo ya está en `public/logo.png`

Genera el código completo, archivo por archivo, listo para copiar y pegar o subir a un repositorio.

---

**Fin del prompt.**
