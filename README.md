# Optic Web — Landing Page

Frontend público de **Optic Platform**. Landing page moderna, minimalista y responsive para ópticas.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- shadcn/ui (Base UI)
- React Router DOM v7

## Plan de Trabajo

### Fase 0 ✅ Setup Inicial
- [x] Crear proyecto con `pnpm create vite` (React + TS)
- [x] Instalar dependencias (Tailwind CSS, React Router, shadcn/ui)
- [x] Configurar Tailwind CSS v4 con plugin de Vite
- [x] Inicializar shadcn/ui con componentes base (Button, Card, Input)
- [x] Configurar path aliases (`@/` → `src/`)
- [x] Crear estructura de carpetas
- [x] Crear README.md con plan documentado
- [x] Build de prueba exitoso

### Fase 1 ⬜ Layout Base + Navegación
- [ ] Header con logo + navegación (Inicio, Servicios, Catálogo, Contacto)
- [ ] Footer con información empresa, WhatsApp, ubicación
- [ ] Layout principal con `<Outlet />`
- [ ] React Router con rutas
- [ ] Header responsive (menú hamburguesa en mobile)

### Fase 2 ⬜ Páginas y Secciones
- [ ] HomePage — Hero section con título, descripción, CTA
- [ ] Servicios — Grid de tarjetas con servicios
- [ ] Catálogo Público — Grid de productos con datos mock
- [ ] Contacto — Formulario + WhatsApp + ubicación
- [ ] SEO básico con `react-helmet-async`

### Fase 3 ⬜ Datos Mock y Estado
- [ ] Tipos TypeScript (`Product`, `Service`, `CompanyInfo`)
- [ ] Datos mock (`src/data/products.ts`, `src/data/services.ts`)
- [ ] Hook personalizado `useProducts`

### Fase 4 ⬜ Pulido Visual
- [ ] Animaciones con Tailwind (transiciones, hover effects)
- [ ] Responsive completo (mobile first)
- [ ] Lazy loading de imágenes
- [ ] Modo oscuro opcional

### Fase 5 ⬜ Preparación para Producción
- [ ] Dockerfile
- [ ] Variables de entorno
- [ ] Build de producción y pruebas

## Comandos

```bash
pnpm dev        # Desarrollo
pnpm build      # Build producción
pnpm preview    # Vista previa build
```

## Convenciones

- Código en inglés (componentes, funciones, tipos)
- UI en español (textos visibles al usuario)
- Nombres de componentes en PascalCase
- Archivos en camelCase
