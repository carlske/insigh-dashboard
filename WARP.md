# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Insigh is a dashboard application for monitoring and analyzing user data built as a monorepo with pnpm workspaces. It consists of a Next.js frontend with an embedded design system, a Node.js/Express backend API, and shared utilities.

### Stack
- **Frontend**: Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + Chart.js
- **Backend**: Node.js + TypeScript + Express + MongoDB + Mongoose + JWT auth
- **Design System**: React components with CSS custom properties (embedded in frontend)
- **Shared**: Utility functions with clsx and tailwind-merge
- **Tools**: pnpm workspaces, Jest testing, Docker Compose for development

## Essential Commands

### Development Workflow
```bash
# Install all dependencies across monorepo
pnpm install

# Frontend development (with Turbopack)
cd frontend && pnpm dev  # Runs on http://localhost:3000

# Backend development (with hot reload using tsx)
cd backend && pnpm dev   # Runs on http://localhost:4000

# Start MongoDB via Docker (required for backend)
cd backend && docker-compose up -d mongo
```

### Testing
```bash
# Frontend tests (Jest + Testing Library + jsdom)
cd frontend && pnpm test
cd frontend && pnpm test:watch

# Run specific test file
cd frontend && pnpm test ComponentName.test.tsx

# Backend tests (Jest configuration available)
cd backend && pnpm test  # Note: may need additional setup
```

### Building and Production
```bash
# Frontend build (with Turbopack)
cd frontend && pnpm build
cd frontend && pnpm start

# Backend build (TypeScript compilation to dist/)
cd backend && pnpm build
cd backend && pnpm start
```

### Linting
```bash
# Frontend linting (ESLint with Next.js config)
cd frontend && pnpm lint

# Backend linting (ESLint with TypeScript)
cd backend && pnpm lint
```

## Architecture Overview

### Monorepo Structure
This is a pnpm workspace monorepo with three main packages defined in `pnpm-workspace.yaml`:
- `frontend/` - Next.js dashboard application with embedded design system
- `backend/` - Express API server with TypeScript
- `shared/` - Common utilities (clsx, tailwind-merge for styling)

### Frontend Architecture (Next.js App Router)
The frontend uses Next.js 15 with App Router, Turbopack, and follows a modular organization:

**Key Directories:**
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Layout and UI components
- `src/design-system/` - Embedded design system components
- `src/hooks/` - Custom React hooks
- `src/lib/` - Client utilities and configurations
- `src/adapter/` - Data adapters for external APIs

**Technology Stack:**
- Next.js 15 with Turbopack for both dev and build
- React 19 with TypeScript
- Tailwind CSS v4 for styling
- Chart.js + react-chartjs-2 for data visualization
- Lucide React for icons

**Design System Location:** Currently embedded in `frontend/src/design-system/` but architecturally planned to be extracted to a separate package.

### Backend Architecture (Modular Express)
The backend follows a modular architecture pattern:

**Core Structure:**
- `src/app.ts` - Express app configuration and middleware setup
- `src/server.ts` - Server entry point
- `src/config/` - Database, environment, and Swagger configuration
- `src/core/` - Cross-cutting concerns (errors, middleware, utils)
- `src/modules/` - Feature modules (auth, health, tracking)

**Module Pattern:** Each module contains:
- `*.controller.ts` - Request handlers
- `*.routes.ts` - Route definitions
- `*.service.ts` - Business logic
- `*.model.ts` - Mongoose models

**API Endpoints:**
- `/api/auth/*` - Authentication (JWT-based)
- `/api/components/*` - Tracking endpoints
- `/health` - Health check
- `/api/docs` - Swagger documentation

### Environment Configuration

**Backend Environment Variables (required):**
- `PORT` - Server port (default: 4000)
- `MONGO_URI` - MongoDB connection string 
- `JWT_SECRET` - JWT signing secret
- `NODE_ENV` - Environment (development/production)
- `CORS_ORIGINS` - Comma-separated allowed origins
- `COOKIE_MAX_AGE` - JWT cookie expiration time

**Development Database (Docker):**
- MongoDB via docker-compose.yml in backend/
- Credentials: `insigh_user:insigh_pass`
- Port: 27017
- Connection: `mongodb://insigh_user:insigh_pass@localhost:27017/insigh_db?authSource=admin`

## Development Patterns

### Testing Configuration
- **Frontend**: 
  - Jest with jsdom environment and Testing Library
  - Babel transformation with Next.js presets
  - Module aliasing: `@/` for `src/`, `@insigh-shared/` for shared utilities
  - Test files: `__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}` and `src/**/*.{test,spec}.{js,jsx,ts,tsx}`
  - Transform ignores: `node_modules/(?!@insigh-shared)`
- **Backend**: Jest configuration available with TypeScript support but may need additional setup

### Design System Integration
The design system is currently embedded within the frontend but follows modular principles:
- Components in `src/design-system/ui/insigh-components/`
- Semantic color system with CSS custom properties
- Accessibility-first approach (WCAG 2.1 AA)
- Planned extraction to standalone package

### API Client Pattern
Frontend uses a centralized API client (`src/lib/apiClient.ts`) for backend communication with custom hooks for data fetching.

### Error Handling
Backend implements centralized error handling with custom `AppError` class and middleware.

### Authentication Flow
JWT-based authentication with cookie storage and protected route middleware.

## Common Development Tasks

### Adding New Backend Endpoints
1. Create new module in `src/modules/` following existing pattern
2. Define routes, controller, service, and model files
3. Register routes in `src/app.ts`
4. Add Swagger documentation

### Adding Frontend Components
1. Create component in appropriate directory (`components/` or `design-system/`)
2. Follow TypeScript interface patterns
3. Add to barrel exports if needed
4. Write tests using Jest and Testing Library

### Database Schema Changes
1. Update Mongoose models in respective module
2. Ensure backward compatibility or migration strategy
3. Update API documentation

### Design System Components
1. Add to `src/design-system/ui/insigh-components/`
2. Follow existing patterns (props interfaces, className merging)
3. Include comprehensive TypeScript types
4. Document with usage examples in component README

## Key Technical Decisions

### Turbopack Usage
Both development (`pnpm dev`) and build (`pnpm build`) use Turbopack for faster compilation. Configured in `next.config.ts`.

### pnpm Workspaces
Monorepo managed via `pnpm-workspace.yaml` with three packages. Single lockfile and efficient storage with package manager enforced as `pnpm@10.14.0`.

### TypeScript Throughout
- Frontend: TypeScript with Next.js and React 19
- Backend: TypeScript with ES modules (`"type": "module"`), tsx for development hot reload
- Shared: TypeScript utilities with proper module aliasing

### Embedded Design System
Temporarily located in `frontend/src/design-system/` due to time constraints, but architecturally designed for future extraction to standalone package.

### MongoDB with Docker
Development database runs via Docker Compose (`backend/docker-compose.yml`) for consistent environment setup with MongoDB 7.0.

### JWT Authentication with HTTP-only Cookies
Stateless authentication using JWT tokens stored in HTTP-only cookies for XSS protection, eliminating need for frontend token management.

## URLs and Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Documentation**: http://localhost:4000/api/docs (Swagger UI)
- **MongoDB**: mongodb://localhost:27017 (via Docker)
- **Health Check**: http://localhost:4000/health

## Package Manager Requirement

This project requires **pnpm 10.14.0** as specified in each package.json `packageManager` field. Install it with:
```bash
npm install -g pnpm@10.14.0
# or
corepack enable pnpm
```
