# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Insigh is a dashboard application for monitoring and analyzing user data built as a monorepo. It consists of a Next.js frontend with an embedded design system, a Node.js/Express backend API, and shared utilities.

### Stack
- **Frontend**: Next.js 15 + React 19 + TypeScript + Tailwind CSS v4
- **Backend**: Node.js + Express + MongoDB + Mongoose + JWT auth
- **Design System**: React components with CSS custom properties (embedded in frontend)
- **Tools**: pnpm workspaces, Jest testing, Docker Compose for development

## Essential Commands

### Development Workflow
```bash
# Install all dependencies across monorepo
pnpm install

# Start all services simultaneously
pnpm dev  # (if root script exists, otherwise use individual commands)

# Frontend development (with Turbopack)
cd frontend && pnpm dev  # Runs on http://localhost:3000

# Backend development (with hot reload)
cd backend && pnpm dev   # Runs on http://localhost:4000

# Start MongoDB via Docker
cd backend && docker-compose up -d mongo
```

### Testing
```bash
# Frontend tests (Jest + Testing Library)
cd frontend && pnpm test
cd frontend && pnpm test:watch

# Backend tests (configuration available but may need setup)
cd backend && pnpm test
```

### Building and Production
```bash
# Frontend build (with Turbopack)
cd frontend && pnpm build
cd frontend && pnpm start

# Backend build (TypeScript compilation)
cd backend && pnpm build
cd backend && pnpm start
```

### Linting
```bash
# Frontend linting (ESLint)
cd frontend && pnpm lint

# Backend linting
cd backend && pnpm lint
```

## Architecture Overview

### Monorepo Structure
This is a pnpm workspace monorepo with three main packages:
- `frontend/` - Next.js dashboard application
- `backend/` - Express API server
- `shared/` - Common utilities (currently minimal)

### Frontend Architecture (Next.js App Router)
The frontend uses Next.js 15 with App Router and follows a feature-based organization:

**Key Directories:**
- `src/app/` - Next.js App Router pages and layouts
- `src/components/layout/` - Layout components (Dashboard, Chart, ChartContainer)
- `src/components/ui/` - Reusable UI components
- `src/design-system/` - Embedded design system components
- `src/hooks/` - Custom React hooks (useApi, useFormValidation)
- `src/lib/` - Client utilities (apiClient, chartSettings, validations)
- `src/adapter/` - Data adapters for external APIs

**Font Strategy:** Uses multiple Google Fonts (Geist, Roboto) loaded via next/font/google with CSS variables.

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
- `CORS_ORIGINS` - Comma-separated allowed origins

**Development Database:**
- Default MongoDB via Docker: `insigh_user:insigh_pass@localhost:27017`

## Development Patterns

### Testing Configuration
- **Frontend**: Jest with jsdom, Testing Library, Babel transformation
- **Backend**: Jest configured but may need additional setup
- **Module Aliasing**: `@/` for frontend src, `@insigh-shared/` for shared utilities

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
Both development and build use Turbopack for faster compilation. Monorepo root is configured in next.config.ts.

### pnpm Workspaces
Dependency management across packages with shared lockfile and efficient storage.

### Embedded Design System
Temporarily located in frontend package due to time constraints, but architecturally designed for future extraction.

### MongoDB with Docker
Development database runs via Docker Compose for consistent environment setup.

### JWT Authentication
Stateless authentication with HTTP-only cookies for security.

## URLs and Services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Documentation**: http://localhost:4000/api/docs (Swagger UI)
- **MongoDB**: mongodb://localhost:27017 (via Docker)