# Project Structure Documentation

## 📁 Complete Directory Structure

```
portfolio/
├── .gitignore                    # Git ignore file
├── .env.example                  # Environment variables template
├── .eslintrc.json               # ESLint configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
│
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                  # React components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero/banner section
│   ├── About.tsx                # About me section
│   ├── Projects.tsx             # Projects showcase
│   ├── Skills.tsx               # Skills & expertise section
│   ├── Contact.tsx              # Contact form section
│   ├── Footer.tsx               # Footer section
│   ├── ProjectCard.tsx          # Reusable project card
│   ├── SkillBadge.tsx           # Skill badge component
│   ├── SectionHeading.tsx       # Section heading component
│   ├── FeatureCard.tsx          # Feature card component
│   ├── Button.tsx               # Custom button component
│   └── SocialButton.tsx         # Social media button
│
├── lib/                         # Utility functions
│   ├── utils.ts                 # Helper utilities
│   └── constants.ts             # Constants and static data
│
├── types/                       # TypeScript types
│   └── index.ts                 # Type definitions
│
├── public/                      # Static assets
│   └── [images]                 # Store images here
│
├── documentation/               # Project documentation
│   ├── README.md                # Main documentation
│   ├── GETTING_STARTED.md       # Quick start guide
│   ├── CUSTOMIZATION_GUIDE.md   # Customization instructions
│   └── STRUCTURE.md             # This file
│
└── node_modules/                # Dependencies (auto-generated)
```

## 🔧 Configuration Files

### `package.json`

- Defines project metadata
- Lists all dependencies
- Defines scripts for dev/build/start
- Includes Next.js, React, TypeScript, Tailwind CSS

### `tsconfig.json`

- TypeScript compiler options
- Path aliases (@/\* for imports)
- Strict type checking enabled

### `tailwind.config.js`

- Custom color palette
- Font families
- Extended Tailwind utilities
- Custom animations

### `next.config.js`

- Next.js app configuration
- Image optimization settings
- Security headers
- Production optimizations

### `.eslintrc.json`

- Code linting rules
- React hooks validation
- Code quality standards

## 📄 Key Files

### App Files

**`app/layout.tsx`**

- Root layout wrapper
- Sets HTML meta tags
- Global layout for all pages

**`app/page.tsx`**

- Home/main page
- Imports all section components
- Orchestrates page structure

**`app/globals.css`**

- Global styles and fonts
- Custom CSS utilities
- Animation definitions
- Button and component styles

### Main Components

**`components/Navbar.tsx`**

```
- Fixed position navigation
- Mobile hamburger menu
- Smooth scroll links
- CTA button
```

**`components/Hero.tsx`**

```
- Introduction section
- Name and title
- Social media buttons
- CTA buttons
- Animated background
```

**`components/About.tsx`**

```
- Professional intro
- Feature cards (3x)
- Biography section
- Animated on scroll
```

**`components/Projects.tsx`**

```
- Featured projects grid
- Project cards with:
  - Icon/emoji image
  - Title & description
  - Technology tags
  - Links to demo & code
- View all button
```

**`components/Skills.tsx`**

```
- Skill categories grid
- Technology icons showcase
- Proficiency level bars
- Animated progress indicators
```

**`components/Contact.tsx`**

```
- Contact info cards
- Contact form:
  - Name input
  - Email input
  - Message textarea
  - Validation
  - Success message
```

**`components/Footer.tsx`**

```
- Brand info
- Quick navigation
- Social media links
- Copyright info
```

## 🎯 Component Relationships

```
page.tsx
├── Navbar
├── Hero
├── About
├── Projects
│   └── ProjectCard (multiple)
├── Skills
├── Contact
└── Footer
```

## 📦 Dependencies

### Core

- `react@18.2.0` - UI library
- `react-dom@18.2.0` - DOM rendering
- `next@14.0.0` - React framework

### Styling

- `tailwindcss@3.3.0` - Utility CSS
- `postcss@8.4.27` - CSS processing
- `autoprefixer@10.4.14` - CSS vendor prefixes

### Animations

- `framer-motion@10.16.4` - Animation library

### Icons

- `react-icons@5.0.1` - Icon library

### Development

- `typescript@5.0.0` - Type safety
- `eslint@8.48.0` - Code linting
- `autoprefixer@10.4.14` - CSS tool

## 🔀 Data Flow

```
Constants (lib/constants.ts)
       ↓
Components use constant data
       ↓
Components render with state
       ↓
User interactions trigger callbacks
       ↓
State updates component display
```

## 🎨 Styling Architecture

```
Global Styles (globals.css)
       ↓
Tailwind Configuration
       ↓
Custom CSS Classes
       ↓
Component Styling
       ↓
Inline Classes (className)
```

## 🚀 Build Process

```
Source Code
    ↓
TypeScript Compilation
    ↓
Next.js Build
    ↓
Optimization
    ↓
Production Bundle
    ↓
Deployment Ready
```

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: camelCase (e.g., `index.ts`)
- **Styles**: globals.css, component-specific in CSS

## 🔒 File Permissions

- `.gitignore` - Prevents committing node_modules, .env files
- `.env.local` - Local environment variables (not committed)
- `package-lock.json` - Dependency lock file

## 📊 Component Complexity

- **Navbar**: Medium (state for mobile menu)
- **Hero**: Low (mostly static with animations)
- **About**: Low (static content)
- **Projects**: Low (data-driven rendering)
- **Skills**: Medium (progress bars with animation)
- **Contact**: Medium (form handling and validation)
- **Footer**: Low (static links)

## 🔗 Import Paths

Using `@/` alias for cleaner imports:

```typescript
// Instead of:
import Component from "../../components/Navbar";

// Use:
import Component from "@/components/Navbar";
```

## ✅ Best Practices

1. **Components** - One component per file
2. **Imports** - Always use alias paths
3. **TypeScript** - Enable strict mode
4. **Styling** - Use Tailwind utilities first
5. **Animations** - Use Framer Motion
6. **Testing** - Add test files with `.test.tsx` extension
7. **Documentation** - Comment complex logic
8. **Performance** - Use Next.js Image component

---

This structure provides a scalable, maintainable foundation for a modern portfolio website.
