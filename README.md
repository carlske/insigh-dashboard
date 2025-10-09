# 🎨 Insigh UI

**Insigh UI** is a modular and reusable **React component library** built with **TypeScript** and **Tailwind CSS**.  
It provides a consistent foundation for creating elegant, accessible, and scalable interfaces.

![Insigh UI Screenshot](https://raw.githubusercontent.com/carlske/insigh-dashboard/refs/heads/main/image/inicio.png)

---

## 🧱 Project Overview

The goal of **Insigh UI** is to establish a unified design language across applications.  
It includes a growing set of React components, design tokens, and utilities for rapid UI development.

### ⚙️ Tech Stack

- **React + TypeScript**
- **Tailwind CSS v4**
- **CSS Custom Properties** for theming
- **Storybook (optional)** for documentation

---

## 📁 Project Structure

```

```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
pnpm install
```

### 2️⃣ Run the local playground

```bash
pnpm dev
```

### 3️⃣ Build the library

```bash
pnpm build
```

---

## 🎨 Components Available

- **InsighButton** — Versatile button component with variants and sizes.
- **InsighCard** — Content container with border and hover effects.
- **InsighInput** — Form input field with validation states.
- **InsighModal** — Accessible modal dialog component. (_coming soon_)
- **Typography & Tokens** — Consistent text and spacing system.

---

## 🧩 Design Tokens

Design tokens define the visual language of the system.

| Category       | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| **Colors**     | Neutral and brand palette (Roman Coffee, Foggy Gray, Big Stone) |
| **Typography** | Font sizes, weights, and line-heights                           |
| **Spacing**    | Consistent padding and margins                                  |
| **Radius**     | Rounded shapes for modern UIs                                   |

---

## 🧠 Architecture Notes

The design system follows **a modular structure** intended to be published as a standalone NPM package.  
For now, it lives within the frontend workspace, but it’s prepared to be extracted into `/packages/design-system` in a monorepo setup.

---

## 🧪 Testing

```bash
pnpm test
```

Unit tests can be implemented using **Vitest** or **Jest** for component validation.

---

## 📦 Build and Distribution

To export as a library package:

```bash
pnpm build
```

Then link or publish it to your NPM registry for reuse across projects.

---

## 🧭 Vision

> **Insigh UI** aims to bridge design and development, providing a strong visual identity and scalable UI foundation for future projects.

---

**Developed by [Carlos Díaz](https://www.linkedin.com/in/carlosvdiaz/)** ❤️  
#React #DesignSystem #TailwindCSS #TypeScript #FrontendArchitecture
