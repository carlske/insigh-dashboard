# 🧱 Insigh Backend

API desarrollada en **Node.js + TypeScript + Express**, con **MongoDB**, autenticación **JWT vía cookies HTTP-only**, y arquitectura **orientada a servicios (SOA)**.

---

## 🚀 Características Principales

- **TypeScript + Express** con arquitectura limpia y modular
- **MongoDB + Mongoose** para persistencia de datos
- **Autenticación segura con JWT en cookies HTTP-only**
- **Swagger UI** para documentación de la API (`/api/docs`)
- **Docker Compose** para levantar la base de datos local
- **ESLint + Prettier** integrados para mantener código limpio
- **Arquitectura orientada a servicios (SOA)** con separación clara por módulos

---

## 🏗️ Arquitectura del Backend

```
src/
├── app.ts                 # Configuración principal de Express
├── server.ts              # Punto de entrada de la aplicación
│
├── config/                # Configuración del entorno y servicios base
│   ├── env.ts             # Variables de entorno
│   ├── db.ts              # Conexión a MongoDB
│   └── swagger.ts         # Configuración de Swagger
│
├── core/                  # Núcleo transversal (reutilizable)
│   ├── errors/            # Manejo centralizado de errores
│   ├── middleware/        # Middlewares globales (auth, validación)
│   └── utils/             # Logger y herramientas auxiliares
│
└── modules/               # Módulos funcionales (servicios independientes)
    ├── auth/              # Autenticación y gestión de usuarios
    │   ├── auth.controller.ts
    │   ├── auth.service.ts
    │   ├── auth.routes.ts
    │   ├── user.model.ts
    │   └── ...
    ├── tracking/          # Sistema de tracking de componentes
    ├── health/            # Health check del sistema
    └── ...
```

### 🧩 Patrón de capas (Service-Oriented Architecture)

```
Request
  ↓
Controller     → maneja las rutas y respuestas HTTP
  ↓
Service        → lógica de negocio, validaciones y flujo
  ↓
Model (Mongoose) → persistencia de datos en MongoDB
```

Cada módulo es independiente, fácilmente escalable y se comunica mediante la capa de servicio.  
Esto permite evolucionar hacia microservicios sin reestructurar el código base.

---

## 🔐 Autenticación con Cookies HTTP-only

El backend utiliza **JWT guardados en cookies HTTP-only**, lo que elimina la necesidad de almacenar tokens en el frontend (localStorage o Context).

### **Flujo de autenticación**

| Acción                       | Ruta                                           | Descripción |
| ---------------------------- | ---------------------------------------------- | ----------- |
| `POST /api/auth/register`    | Registra un nuevo usuario en MongoDB           |
| `POST /api/auth/login`       | Genera un JWT y lo guarda en una cookie segura |
| `POST /api/auth/logout`      | Invalida la cookie (`maxAge: 0`)               |
| `GET /api/components/export` | Endpoint protegido por JWT en cookie           |

### **Ventajas**

✅ Protección total frente a ataques XSS  
✅ Logout real al eliminar la cookie desde el servidor  
✅ Compatible con SSR (Next.js, Remix)  
✅ No se requiere Context ni almacenamiento local en el frontend

## ⚙️ Variables de Entorno

Copia el archivo `.env.example` y crea tu configuración personalizada:

```bash

 PORT=4000
 MONGO_URI=mongodb://insigh_user:insigh_pass@localhost:27017/insigh_db?authSource=admin
 JWT_SECRET=dev-secret-key-12345
 NODE_ENV=development
 CORS_ORIGINS=http://localhost:3000,http://localhost:3001
 COOKIE_MAX_AGE=3600000

```

---

## 🐳 Configuración con Docker

Para levantar MongoDB localmente:

```bash
docker run -d   --name insigh-mongo   -p 27017:27017   -v mongodb_data:/data/db   -e MONGO_INITDB_ROOT_USERNAME=insigh_user   -e MONGO_INITDB_ROOT_PASSWORD=insigh_pass   mongo:7.0
```

O usa **docker-compose.yml**:

```yaml
services:
  mongo:
    image: mongo:7.0
    container_name: insigh-mongo
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: insigh_user
      MONGO_INITDB_ROOT_PASSWORD: insigh_pass
    volumes:
      - mongodb_data:/data/db
volumes:
  mongodb_data:
```

---

## 🧪 Inicio de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Ejecutar build
pnpm start

# Linting
pnpm lint
```

**Conexiones de desarrollo:**

| Servicio   | URL                            |
| ---------- | ------------------------------ |
| Backend    | http://localhost:4000          |
| Swagger UI | http://localhost:4000/api/docs |
| MongoDB    | mongodb://localhost:27017      |

---

## 📘 Endpoints Principales

### Auth

- `POST /api/auth/register` → Registro de usuario
- `POST /api/auth/login` → Login y seteo de cookie JWT
- `POST /api/auth/logout` → Logout (borra cookie)

### Tracking

- `POST /api/components/track` → Registra interacción de componente
- `GET /api/components/stats` → Estadísticas de uso
- `GET /api/components/export` → Exporta CSV o JSON (autenticado)

### Health

- `GET /api/health` → Verifica estado del servidor

---

## 🧠 Swagger Docs

Swagger ligero disponible en:  
👉 [http://localhost:4000/api/docs](http://localhost:4000/api/docs)

Incluye documentación para:

- `/auth/*`
- `/components/*`
- `/health`

---

Desarrollado con ❤️ por **Carlos Díaz**.
