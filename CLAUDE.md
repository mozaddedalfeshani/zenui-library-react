# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZenUI Library React is an open-source UI component library website built with React, Vite, and Tailwind CSS. It's a copy-paste component library where users browse 800+ components, blocks, and animations, then copy the code directly into their projects. The repository serves as both the documentation website and the component showcase.

## Common Commands

### Development
```bash
npm run dev          # Start Vite dev server (default port 5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Linting
```bash
npm run lint         # Run ESLint on all .js and .jsx files
npm run lint:fix     # Auto-fix ESLint issues
```

## Architecture Overview

### Routing System
- **Centralized Routes**: All routes are defined in `src/Routes/RouteConfig.js`
- Routes are organized by category: DocsRoutes, InputRoutes, ButtonRoutes, NavigationRoutes, FeedbackRoutes, SurfaceRoutes, DataDisplayRoutes, ECommerceComponentRoutes, RandomComponentRoutes, BlockRoutes, ECommerceBlockRoutes, AnimationRoutes, MiscRoutes
- All components use React lazy loading for code splitting
- Path aliases defined in `vite.config.js` (e.g., `@pages`, `@components`, `@shared`, `@utils`)

### Directory Structure
```
src/
├── Pages/                              # Route components (lazy-loaded page wrappers)
│   ├── Components/                     # Component showcase pages
│   │   ├── Inputs/
│   │   ├── Buttons/
│   │   ├── Navigation/
│   │   ├── Feedback/
│   │   ├── Surfaces/
│   │   ├── Data Display/
│   │   └── ECommerce/
│   ├── Blocks/                         # Block showcase pages
│   └── Animations/                     # Animation showcase pages
├── Components/
│   ├── Overview/
│   │   ├── Sidebar/                    # Sidebar navigation component
│   │   │   └── Content.jsx            # Main sidebar menu configuration
│   │   └── SidebarContent/            # Actual component implementations
│   │       ├── Content/               # Component category implementations
│   │       │   ├── Inputs/
│   │       │   ├── Buttons/
│   │       │   ├── Navigation/
│   │       │   ├── Feedback/
│   │       │   ├── Surfaces/
│   │       │   ├── Data Display/
│   │       │   └── ECommerce/
│   │       ├── Blocks/                # Block implementations
│   │       └── Animations/            # Animation implementations
│   ├── Home/                          # Homepage components
│   └── [other feature directories]
├── Shared/                             # Reusable UI components
│   ├── Component/                      # Component page wrapper components
│   │   ├── ComponentWrapper.jsx
│   │   ├── ComponentDescription.jsx
│   │   ├── ShowCode.jsx
│   │   └── ToggleTab.jsx
│   ├── Block/                         # Block page wrapper components
│   │   ├── BlockWrapper.jsx
│   │   ├── BlockDescription.jsx
│   │   └── BlocksShowCode.jsx
│   └── [other shared components]
├── Utils/
│   └── ContentsConfig/                 # Table of contents configs for each component category
│       ├── InputContents.js
│       ├── ButtonsContents.js
│       ├── NavigationContents.js
│       ├── FeedbackContents.js
│       ├── SurfacesContents.js
│       └── DataDisplayContents.js
├── Routes/
│   └── RouteConfig.js                  # Centralized route definitions
├── Store/
│   └── Index.js                        # Zustand store for theme and dark mode
├── Context/                            # React Context providers
├── CustomHooks/                        # Custom React hooks
├── Tools/                              # Standalone tools (Icon library, Opacity Palette, etc.)
└── SvgIcons/                          # SVG icon components
```

### Key Architectural Patterns

1. **Three-Layer Page Structure**:
   - `Pages/` - Lazy-loaded route wrappers (minimal logic)
   - `Components/Overview/SidebarContent/` - Actual component implementations
   - `Shared/` - Reusable wrapper components for consistent layouts

2. **Component Showcase Pattern**:
   - Each component page uses `ComponentWrapper` or `BlockWrapper` for consistent styling
   - `ShowCode` component displays the copyable code snippet
   - `ToggleTab` provides preview/code view switching
   - `ComponentDescription` displays component metadata

3. **Content Configuration**:
   - Each component category has a corresponding file in `Utils/ContentsConfig/`
   - These define the table of contents/navigation for each component page
   - Example: `DataDisplayContents.js` exports `pieChartContents`, `tableContents`, etc.

4. **State Management**:
   - Zustand store (`src/Store/Index.js`) manages:
     - `theme`: Current theme (light/dark)
     - `withDarkClasses`: Toggle for showing dark mode class names in code snippets
   - MenuContext provides sidebar state management

5. **Path Aliases** (configured in `vite.config.js`):
   - `@/` → `src/`
   - `@components` → `src/Components/Overview/SidebarContent/Content`
   - `@blocks` → `src/Components/Overview/SidebarContent/Blocks`
   - `@animations` → `src/Components/Overview/SidebarContent/Animations`
   - `@pages` → `src/Pages`
   - `@shared` → `src/Shared`
   - `@utils` → `src/Utils`
   - `@store` → `src/Store`
   - `@helpers` → `src/Helpers`

## Adding New Components

When adding a new component to the library:

1. **Create the component implementation** in the appropriate subdirectory under `src/Components/Overview/SidebarContent/Content/[Category]/`

2. **Create a page wrapper** in `src/Pages/Components/[Category]/` that imports and displays the component using lazy loading

3. **Add route** to the appropriate route category in `src/Routes/RouteConfig.js`

4. **Update content config** in `src/Utils/ContentsConfig/[Category]Contents.js` to add table of contents entries

5. **Update sidebar navigation** in `src/Components/Overview/Sidebar/Content.jsx` to add the new component to the menu

## Code Standards

- Components use Tailwind CSS utility classes exclusively
- Dark mode classes are prefixed with `dark:`
- The codebase uses React Router v6 for navigation
- All route components are lazy-loaded for performance
- ESLint is configured to catch unused imports and enforce React best practices

## Git Workflow

- Main branch: `production`
- Create feature branches from `production`
- Provide detailed commit messages explaining changes and issues solved
- Example: `"Fix issue #123: Add a new feature for XYZ component following the standard code structure"`
