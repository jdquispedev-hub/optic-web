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

### Fase 1 ✅ Layout Base + Navegación
- [x] Header con logo + navegación (Inicio, Servicios, Catálogo, Contacto)
- [x] Footer con información empresa, WhatsApp, ubicación e íconos
- [x] Layout principal con `<Outlet />`
- [x] React Router con rutas (Home, Servicios, Catálogo, Contacto)
- [x] Header responsive con menú mobile (Sheet drawer)
- [x] Header sticky con backdrop blur

### Fase 2 ✅ Páginas y Secciones
- [x] HomePage — Hero section con título, descripción, CTA
- [x] Servicios — Grid de tarjetas con 6 servicios con íconos
- [x] Catálogo Público — Grid de 6 productos mock con precio, disponibilidad, colores
- [x] Contacto — Formulario + datos de contacto + WhatsApp link
- [x] SEO básico con react-helmet-async (meta tags por página)

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
