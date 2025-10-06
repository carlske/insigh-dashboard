# 📊 Insigh Dashboard

Insigh es un dashboard para monitorear y analizar datos de usuarios.
Proporciona visualizaciones interactivas, informes detallados y un sistema de autenticación seguro.
También incluye un design system modular para construir interfaces consistentes y reutilizables. llamado **Insigh UI**.

> **⚠️ Nota de arquitectura**: Este sistema de diseño se encuentra temporalmente dentro del paquete frontend. El plan original era tenerlo como un paquete independiente en la raíz del repositorio mono (`/packages/design-system`) para una mejor reutilización en múltiples aplicaciones. Debido a limitaciones de tiempo, esta refactorización está prevista para futuras iteraciones.

![enter image description here](https://raw.githubusercontent.com/carlske/insigh-dashboard/refs/heads/main/image/Captura%20de%20pantalla%202025-10-06%20a%20la%28s%29%201.58.38%E2%80%AFa.m..png)

## 🏗️ Arquitectura del Proyecto

Este proyecto está organizado como un monorepo con las siguientes partes:

```
insigh-ui/

├── 🔧 backend/ # API REST con Node.js + Express + MongoDB

├── 🎨 frontend/ # Dashboard con Next.js 15 + React 19

├── 🎯 design-system/ # Componentes UI reutilizables

├── 📦 shared/ # Utilidades compartidas

└── 📋 package.json # Configuración del workspace

```

### Stack Tecnológico

**Backend:**

- Node.js + TypeScript

- Express.js con middleware personalizado

- MongoDB con Mongoose

- JWT para autenticación

- Swagger UI para documentación API

- Docker Compose para desarrollo

**Frontend:**

- Next.js 15 con App Router

- React 19 + TypeScript

- Tailwind CSS v4

**Design System:**

- Componentes React reutilizables

- CSS custom properties para temas

- Sistema de tokens de diseño

- Arquitectura modular

### Prerrequisitos

- Node.js 18+

- pnpm 10+

- Docker (opcional, para base de datos)

### Instalación

1.  **Clonar el repositorio:**

```bash

git  clone [url-del-repo]

cd  insigh-ui

```

2.  **Instalar dependencias (Monorepo) :**

```bash

pnpm  install
pnpm  run
```

3.  **Configurar variables de entorno:**

````bash

cp  backend/.env.example  backend/.env

nano  backend/.env

```bash

# Copiar archivo de ejemplo

cp backend/.env.example backend/.env



# Editar variables según tu entorno

nano backend/.env

````

4.  **Iniciar base de datos (Docker):**

```bash
cd  backend
docker-compose  up  -d  mongo
```

## 🏃‍♂️ Desarrollo

### Backend API

```bash
cd  backend
# Desarrollo con hot reload
pnpm  dev
# Build para producción
pnpm  build

  # Ejecutar en producción
pnpm  start

# Linting
pnpm  lint

```

**Endpoints principales:**

- `GET /health` - Estado de salud de la API

- `POST /auth/login` - Autenticación de usuarios

- `GET /tracking/*` - Endpoints de seguimiento

- `GET /api-docs` - Documentación Swagger

### Frontend Dashboard

```bash
cd  frontend

# Desarrollo con Turbopack

pnpm  dev

# Build optimizado
pnpm  build

# Servidor de producción
pnpm  start

# Linting
pnpm  lint

```

### Design System

#Por tiempo ya no es un paquete independiente, sino que está integrado en el frontend.

```bash

cd  design-system



# Los componentes se importan desde otros módulos

# No requiere servidor independiente

```

**Componentes disponibles:**

- `InsighButton` - Botones con variantes

- `InsighCard` - Tarjetas de contenido

- `InsighInput` - Campos de entrada

- `InsighModal` - Ventanas modales

## 🌐 URLs de Desarrollo

- **Frontend:** http://localhost:3000

- **Backend API:** http://localhost:4000

- **API Docs:** http://localhost:4000/api-docs

- **MongoDB:** mongodb://localhost:27017

## 📂 Estructura Detallada

### Backend (`/backend`)

```

src/

├── app.ts # Configuración Express

├── server.ts # Punto de entrada

├── config/ # Configuración (DB, env, Swagger)

├── core/ # Middleware y utilidades core

│ ├── errors/ # Manejo de errores

│ ├── middleware/ # Auth middleware

│ └── utils/ # Logger y utilidades

└── modules/ # Módulos de la aplicación

├── auth/ # Autenticación

├── health/ # Health checks

└── tracking/ # Sistema de seguimiento

```

### Frontend (`/frontend`)

```

src/

├── app/ # Next.js App Router

│ ├── layout.tsx # Layout raíz con fonts

│ ├── page.tsx # Página principal

│ └── globals.css # Estilos Tailwind + custom props

└── design-system/ # Symlink al design system

```

## 🔧 Configuración

### Variables de Entorno (Backend)

Copia `backend/.env.example` a `backend/.env` y configura:

- `PORT` - Puerto del servidor (default: 4000)

- `MONGO_URI` - URI de conexión MongoDB

- `JWT_SECRET` - Clave secreta para JWT

### Configuración MongoDB

Para desarrollo local con Docker:

- Usuario: `insigh_user`

- Contraseña: `insigh_pass`

- Puerto: `27017`

## 🧪 Testing

```bash

# Ejecutar tests (cuando estén configurados)

pnpm  test

```

## 📦 Build y Deploy

### Backend

```bash

cd  backend

pnpm  build

pnpm  start

```

### Frontend

```bash

cd  frontend

pnpm  build

pnpm  start

```

## 📝 Documentación Adicional

- [Backend API Docs](./backend/README.md)
- [Frontend Setup](./frontend/README.md)

**Desarrollado por Carlos V ❤️**
