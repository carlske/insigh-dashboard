# Insigh Design System

A comprehensive design system built for the Insigh platform, providing reusable UI components, design tokens, and guidelines for consistent user experiences across the application.

## Overview

The Insigh Design System is currently embedded within the frontend package but follows modular principles for future extraction. It provides a collection of carefully crafted components that maintain visual consistency and improve development velocity.

> **⚠️ Architecture Note**: This design system is temporarily located within the frontend package. The original plan was to have it as a standalone package in the monorepo root (`/packages/design-system`) for better reusability across multiple applications. Due to time constraints, this refactoring is planned for future iterations.

# Insigh UI Dash Board

This is the frontend package of the Insigh monorepo, built with Next.js and TypeScript. It serves as the client-side application for the Insigh project.
It provides a user-friendly interface for interacting with the Insigh platform, allowing users to access various features and functionalities.

## Color Palette

The Insigh UI follows a carefully designed color palette that ensures visual consistency and accessibility throughout the application:

![Color Palette](https://raw.githubusercontent.com/carlske/insigh-dashboard/refs/heads/main/image/colors.png)

Our color system is built around semantic color tokens that include:

- **Primary Colors**: Main brand colors used for primary actions, navigation elements, and key UI components
- **Secondary Colors**: Supporting colors that complement the primary palette for secondary actions and highlights
- **Neutral Colors**: Grayscale palette for backgrounds, text, borders, and subtle interface elements
- **Semantic Colors**: Status colors for success, warning, error, and informational states
- **Accent Colors**: Additional colors for charts, data visualization, and special highlights

The palette is designed with accessibility in mind,

## Structure

```
src/design-system/
├── ui/
│   └── insigh-components/
│       ├── InsighButton/
│       │   ├── InsighButton.tsx
│       │   ├── InsighButton.stories.tsx (planned)
│       │   └── index.ts
│       ├── Chart/
│       │   └── Chart.tsx
│       └── ...other components
├── tokens/
│   ├── colors.ts (planned)
│   ├── typography.ts (planned)
│   └── spacing.ts (planned)
├── utils/
│   └── classNames.ts (planned)
└── README.md
```

## Components

### InsighButton

A versatile button component with multiple variants and sizes.

#### Props

```typescript
interface InsighButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}
```

#### Usage

```tsx
import InsighButton from '@/design-system/ui/insigh-components/InsighButton/InsighButton';

// Primary button
<InsighButton variant="primary" size="medium">
  Click me
</InsighButton>

// Secondary button with custom handler
<InsighButton variant="secondary" onClick={handleClick}>
  Secondary Action
</InsighButton>

// Disabled state
<InsighButton variant="primary" disabled>
  Disabled Button
</InsighButton>
```

#### Variants

- **Primary**: Main call-to-action buttons
- **Secondary**: Secondary actions and alternative options
- **Outline**: Subtle actions with border styling
- **Ghost**: Minimal styling for less prominent actions

#### Sizes

- **Small**: Compact buttons for dense interfaces
- **Medium**: Standard size for most use cases
- **Large**: Prominent buttons for key actions

### Chart

Interactive chart components using Chart.js with support for multiple chart types.

#### Usage

```tsx
import Chart from "@/components/layout/Chart";

<Chart data={chartData} />;
```

#### Features

- Bar and Pie chart types with toggle
- Responsive design
- Custom color schemes
- Statistical summaries
- Accessibility support

## Design Tokens

### Colors

The design system uses a semantic color palette based on the following principles:

- **Primary**: Brand colors for main actions and highlights
- **Secondary**: Supporting colors for secondary actions
- **Success**: Positive feedback and successful states
- **Warning**: Caution and warning messages
- **Error**: Error states and destructive actions
- **Neutral**: Text, backgrounds, and borders

### Typography

Typography scale follows a modular approach with consistent line heights and spacing:

- **Headings**: H1-H6 with appropriate font weights
- **Body Text**: Regular and emphasis variants
- **Captions**: Small text for metadata and labels

### Spacing

Consistent spacing scale based on 4px base unit:

- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px

## Installation & Usage

### Within the Frontend Package

```tsx
// Import components directly
import InsighButton from "@/design-system/ui/insigh-components/InsighButton/InsighButton";

// Use in your components
export default function MyComponent() {
  return (
    <div>
      <InsighButton variant="primary">Action Button</InsighButton>
    </div>
  );
}
```

### Future Package Installation (Planned)

```bash
# When extracted to separate package
pnpm add @insigh/design-system
```

```tsx
// Future import structure
import { InsighButton, Chart } from "@insigh/design-system";
```

## Development Guidelines

### Creating New Components

1. **Create component directory** in `ui/insigh-components/`
2. **Follow naming convention**: PascalCase for components
3. **Include TypeScript interfaces** for all props
4. **Add comprehensive documentation** with usage examples
5. **Create Storybook stories** (planned)
6. **Write unit tests** for component functionality

### Component Structure

```
ComponentName/
├── ComponentName.tsx      # Main component file
├── ComponentName.test.tsx # Unit tests
├── ComponentName.stories.tsx # Storybook stories (planned)
├── types.ts              # TypeScript interfaces
└── index.ts              # Barrel export
```

### Example Component Template

```tsx
import React from "react";
import { cn } from "@insigh-shared/utils/cn";

interface MyComponentProps {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

export default function MyComponent({
  children,
  variant = "default",
  className,
}: MyComponentProps) {
  return (
    <div
      className={cn(
        "base-styles",
        variant === "default" && "default-styles",
        variant === "secondary" && "secondary-styles",
        className
      )}
    >
      {children}
    </div>
  );
}
```

## Testing Components

All components should include comprehensive tests:

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("renders children correctly", () => {
    render(<MyComponent>Test content</MyComponent>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    render(<MyComponent variant="secondary">Test</MyComponent>);
    expect(screen.getByText("Test")).toHaveClass("secondary-styles");
  });
});
```

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- **Semantic HTML**: Proper use of semantic elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Meeting minimum contrast ratios
- **Focus Management**: Visible focus indicators

## Future Roadmap

### Phase 1: Enhancement (Current)

- [ ] Add comprehensive Storybook documentation
- [ ] Expand component test coverage
- [ ] Implement design tokens system
- [ ] Create component usage guidelines

### Phase 2: Extraction (Planned)

- [ ] Extract design system to separate package
- [ ] Set up independent build process
- [ ] Create NPM package for distribution
- [ ] Implement semantic versioning

### Phase 3: Advanced Features (Future)

- [ ] Theme customization system
- [ ] Dark mode support
- [ ] Animation and transition library
- [ ] Advanced component variants
- [ ] Accessibility automation tools

## Contributing

### Adding New Components

1. **Follow the established patterns** and component structure
2. **Include TypeScript definitions** for all props and interfaces
3. **Write comprehensive tests** covering all functionality
4. **Document usage examples** and API references
5. **Ensure accessibility compliance** with WCAG guidelines

### Modifying Existing Components

1. **Maintain backward compatibility** when possible
2. **Update tests** to reflect changes
3. **Document breaking changes** in component documentation
4. **Consider impact** on existing implementations

## Support

For questions, issues, or contributions related to the design system:

1. **Create an issue** in the main repository
2. **Follow the component guidelines** outlined above
3. **Test thoroughly** before submitting changes
4. **Document any breaking changes** in pull requests

---

**Note**: This design system is actively evolving. Components and APIs may change as we work towards the standalone package structure. Always refer to the latest documentation and component implementations.
