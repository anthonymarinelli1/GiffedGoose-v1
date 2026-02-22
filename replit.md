# Gift Matcher

## Overview

Gift Matcher is an AI-powered gift recommendation application that helps users find personalized gift ideas for their loved ones. The application uses Google's Gemini API with search grounding to generate thoughtful, real-time gift suggestions based on the recipient's age, interests, occasion, relationship, and budget constraints. Built as a modern single-page application (SPA), it provides an intuitive interface for discovering the perfect present.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) pattern with component-based architecture

**UI Component System:**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Design system follows "New York" style variant with custom theming
- Component structure organized under `client/src/components/ui/` for reusable UI elements
- Custom components in `client/src/components/` for application-specific features

**State Management & Data Fetching:**
- TanStack Query (React Query) for server state management
- Custom query client configuration with automatic error handling
- Local component state using React hooks
- Form state managed through controlled components

**Styling Approach:**
- Custom color palette with warm purple primary color (280° 65% 60%)
- Light and dark mode support with CSS custom properties
- Hybrid design approach combining modern SaaS aesthetics with e-commerce warmth
- Inter font family for all UI elements
- Responsive design with mobile-first considerations

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- ESM module system for modern JavaScript features
- Middleware-based request processing
- Custom error handling middleware

**API Design:**
- RESTful API endpoint structure (`/api/*` routes)
- POST `/api/gift-recommendations` endpoint for generating gift suggestions
- Request validation using Zod schemas
- JSON request/response format

**Development Environment:**
- Hot module replacement (HMR) in development via Vite middleware
- Conditional Replit-specific plugins for enhanced development experience
- Separate production and development configurations

### Data Storage Solutions

**Database Technology:**
- PostgreSQL as the primary database (via Neon serverless)
- Drizzle ORM for type-safe database queries and schema management
- Currently implements basic user authentication schema
- In-memory storage implementation (`MemStorage`) as fallback/development option

**Schema Design:**
- Users table with UUID primary keys, username, and password fields
- Zod schemas for runtime validation of database inserts
- Type inference from Drizzle schemas for TypeScript integration

**Session Management:**
- Session storage capability via `connect-pg-simple` for PostgreSQL-backed sessions
- User authentication infrastructure in place

### External Dependencies

**AI Integration:**
- Google Gemini API (`@google/genai`) for generating personalized gift recommendations
- Search grounding feature enabled for real-time, relevant product suggestions
- Structured prompts requesting 7 diverse gift recommendations with specific attributes
- API key configuration via environment variable (`GEMINI_API_KEY`)

**Third-party Services:**
- Amazon search URLs generated for product purchase links
- No direct e-commerce API integration; relies on search URLs

**UI Libraries:**
- Comprehensive Radix UI component set for accessible, unstyled primitives
- Lucide React for consistent iconography
- date-fns for date manipulation
- cmdk for command menu functionality

**Development Tools:**
- Replit-specific plugins for cartographer and dev banner (development only)
- Runtime error overlay for better debugging experience
- TypeScript strict mode for enhanced type safety

**Build & Deployment:**
- esbuild for server-side bundling in production
- Vite for client-side bundling
- Path aliasing configured for clean imports (`@/`, `@shared/`, `@assets/`)