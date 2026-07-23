# 👠 Calzados Millas — Panel de Gestión

Panel administrativo para la gestión integral de inventario de calzado. Construido con React + TypeScript + Vite + Tailwind CSS.

---

## 🏗️ Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| UI | React 19 + TypeScript |
| Build | Vite 7 |
| Estilos | Tailwind CSS (utility-first) |
| Routing | React Router v7 |
| Formularios | react-hook-form + Zod |
| Iconos | lucide-react |
| Autenticación | AuthContext + ProtectedRoute |

---

## 📁 Estructura del proyecto

```
src/
├── app/                   # Configuración de la app
│   ├── AppRouter.tsx       # Árbol de rutas (públicas y protegidas)
│   ├── ProtectedRoute.tsx  # Layout que verifica autenticación
│   └── main.tsx            # Punto de entrada
│
├── core/                  # Infraestructura compartida
│   ├── config/
│   │   └── routes.ts       # Constantes de rutas (única fuente de verdad)
│   └── context/
│       └── AuthContext.tsx  # Contexto de autenticación
│
├── features/              # Módulos funcionales (domain-driven)
│   ├── landing/            # Página principal pública
│   ├── iniciar-sesion/     # Login
│   ├── ecommerce/          # Tienda pública (en construcción)
│   ├── gestion-sandalias/  # Gestión de sandalias (inventario)
│   ├── gestion-botines/    # Gestión de botines (inventario)
│   ├── calzado/            # CRUD de productos de calzado
│   ├── dashboard/          # Analytics y KPIs
│   └── inventory-shared/   # Componentes reutilizables entre features
│       ├── components/
│       │   ├── InventorySidebar.tsx        # Sidebar de navegación
│       │   ├── InventoryManagementLayout.tsx # Layout maestro
│       │   ├── CalzadoPanel.tsx            # Tabla de stock con KPIs
│       │   ├── ProductGrid.tsx             # Cuadrícula de productos
│       │   ├── DashboardPanel.tsx          # Panel de analytics
│       │   └── AddProductModal.tsx         # Modal crear/editar producto
│       └── types/
│           └── index.ts    # StockRow, InventorySection
│
└── styles/
    └── index.css           # Global styles + Tailwind
```

### Patrón de diseño

Cada feature sigue el patrón **Container / Presentational** (componente inteligente + vista pura):

```
features/calzado/
├── pages/
│   ├── CalzadoPage.tsx        # Container: hook + lógica → pasa props a la vista
│   └── CalzadoPage.view.tsx   # Vista: solo renderiza, recibe todo por props
├── components/                # Componentes de UI específicos
├── hooks/                     # Lógica de estado y efectos
├── services/                  # Llamadas a API (mock por ahora)
├── types/                     # Tipos de datos del dominio
└── index.ts                   # Barrel export
```

---

## 🧭 Sistema de rutas

Todas las rutas están centralizadas en `src/core/config/routes.ts`. Un solo lugar para cambiarlas.

| Ruta | Página | Acceso | Propósito |
|------|--------|--------|-----------|
| `/` | `LandingPage` | 🔓 Público | Hero, navbar, enlaces a redes sociales |
| `/tienda` | `EcommercePage` | 🔓 Público | Catálogo público (placeholder, lazy loading) |
| `/iniciar-session` | `IniciarSesionPage` | 🔓 Público | Login con formulario |
| `/gestion-sandalias` | `GestionSandaliasPage` | 🔒 Protegido | Inventario de sandalias (CalzadoPanel) |
| `/gestion-botines` | `GestionBotinesPage` | 🔒 Protegido | Inventario de botines (CalzadoPanel) |
| `/calzado` | `CalzadoPage` | 🔒 Protegido | CRUD productos + tabs Cuadrícula/Stock |
| `/dashboard` | `DashboardPage` | 🔒 Protegido | Analytics y KPIs (DashboardPanel) |

Las rutas protegidas usan `ProtectedRoute` que verifica el `AuthContext`. Si no hay sesión, redirige a `/iniciar-session`.

---

## 🧩 Features en detalle

### Landing (`/`)
Página pública tipo editorial con glassmorphism. Hero con imágenes de calzado, navbar con enlaces ancla (Colección, Somos), iconos de redes sociales (Instagram, TikTok, WhatsApp), y botones de acción:
- **"COMPRA AQUÍ"** → redirige a `/tienda`
- **"Consulta Ahora"** → enlace externo a WhatsApp
- **"Login"** → redirige a `/iniciar-session`

### Ecommerce (`/tienda`)
Página placeholder de la tienda en línea. Cargada con `lazy()` de React para code splitting. Muestra un mensaje "Próximamente" mientras el equipo de frontend construye el catálogo completo.

Componentes:
- `EcommercePage.tsx` — vista estática con diseño centrado, logo, título y descripción

### Iniciar Sesión (`/iniciar-session`)
Formulario de login con:
- Campos de email y contraseña
- Validación con react-hook-form
- Autenticación contra `AuthContext`
- Redirección post-login a la página anterior (o a `/gestion-sandalias` por defecto)

### Gestión Sandalias (`/gestion-sandalias`)
Muestra el inventario de sandalias usando `CalzadoPanel` (tabla con KPIs: total productos, en stock, bajos, críticos). Layout: sidebar legacy + header inline con búsqueda y alertas de stock.

```
Flujo: SandaliasWorkspace → InventoryManagementLayout + CalzadoPanel
```

### Gestión Botines (`/gestion-botines`)
Idéntico a sandalias pero con datos de botines. Comparten el mismo layout y componentes pero con diferente sección y datos.

```
Flujo: BotinesWorkspace → InventoryManagementLayout + CalzadoPanel
```

### Calzado (`/calzado`)
CRUD completo de productos de calzado. Es el centro de control de stock con:

- **Tabla de productos** con columnas: Producto (imagen + nombre), Detalles, Talla, Stock, Óptimo, Estado, Precio, Proveedor, Acciones
- **Filtros**: búsqueda textual, categoría (Stilettos, Loafers, Pumps, Boots), estado de stock (Óptimo/Bajo/Crítico)
- **Paginación** con elipsis (4 productos por página)
- **Modal** para agregar/editar productos con react-hook-form + Zod (8 campos: nombre, categoría, talla, stock, óptimo, precio, proveedor, estado)
- **Eliminación** con confirmación inline (check/cancel)
- **Tabs internos**: Productos (CRUD), Cuadrícula (ProductGrid), Stock (CalzadoPanel)
- Servicio CRUD en memoria con datos mock (reemplazable por API REST cuando el backend NestJS esté listo)

```
Flujo: CalzadoPage → useCalzado() → useCalzadoCrud() → calzadoCrud.service (mutable)
                  → CalzadoPageView → FilterBar + ProductTable + Pagination + AddVentaProductModal
```

**Estados de stock:**
| Estado | Color | Significado |
|--------|-------|-------------|
| Óptimo | 🟢 Verde | Stock suficiente |
| Bajo | 🟡 Amarillo | Por debajo del óptimo, necesita reposición |
| Crítico | 🔴 Rojo | Stock casi agotado, reposición urgente |

### Dashboard (`/dashboard`)
Panel de analytics que muestra métricas clave del negocio usando `DashboardPanel` (del módulo inventory-shared). Contiene KPIs de inventario, gráficos de barras para tendencias de stock, tabla de productos con estado, y curva de demanda.

### Sidebar de navegación

El sidebar es consistente en todas las páginas protegidas y está organizado en secciones:

```
GESTIÓN
  ├── Sandalias     → /gestion-sandalias
  └── Botines       → /gestion-botines

CALZADO
  └── Productos     → /calzado

DASHBOARD
  └── Dashboard     → /dashboard
─────────────────────────
  ＋ Registrar Producto
  🛈 Centro de ayuda
  🚪 Cerrar sesión
```

Cada sección tiene su propio título y la sección activa se resalta automáticamente según la ruta actual usando `NavLink` de React Router.

---

## 🧠 Patrones y decisiones técnicas

### Layout compartido
`InventoryManagementLayout` es el layout maestro para todas las páginas protegidas. Renderiza:
1. **Header** — TopNavBar (buscador global, alertas de stock, avatar) o header legacy según la página
2. **Sidebar** — siempre el mismo componente con secciones
3. **Main** — contenido hijo (`children`) específico de cada página
4. **Footer** — links legales

### Datos mock
Todos los servicios usan datos mock en memoria mientras el backend NestJS no esté disponible. Los servicios están diseñados para ser reemplazados uno a uno por llamadas HTTP sin modificar los hooks ni las vistas.

```typescript
// Cuando el backend esté listo:
// export async function getVentasProducts(): Promise<VentaProduct[]> {
//   const res = await fetch("/api/inventory/calzado");
//   return res.json();
// }
```

### Lazy loading
La página de ecommerce (`/tienda`) usa `React.lazy()` para cargarse solo cuando el usuario navega a ella, reduciendo el bundle inicial.

### Tipos fuertes
TypeScript estricto con tipos compartidos (`StockRow`, `VentaProduct`, `VentasFilters`) y tipos de unión discriminada para los modos del layout.

---

## 🔮 Próximos pasos

Módulos planificados para desarrollo futuro:

| Módulo | Descripción | Estado |
|--------|-------------|--------|
| **Compras** | Gestión de lotes de compra (`t_lotes_compra`) | 📝 Planificado |
| **Inventario** | Stock real de productos (`t_productos`) | 📝 Planificado |
| **Movimientos** | Kardex de movimientos (`t_movimientos`) | 📝 Planificado |
| **Catálogos** | Colores, tallas, tipos de lote, rangos | 📝 Planificado |
| **Ventas** | Módulo de ventas real (cuando corresponda) | 🔮 Futuro |
| **Ecommerce** | Catálogo público completo con carrito | 🚧 En construcción |

---

## 🚀 Cómo empezar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 🧪 Comandos útiles

```bash
npm run dev       # Desarrollo con hot-reload en http://localhost:5173
npm run build     # TypeScript check + Vite build → dist/
npm run preview   # Servir el build localmente
```
