# 📑 Portfolio Files Index

## Project Directory: `portfolio/`

### 📄 Configuration & Setup Files

| File                 | Purpose                         |
| -------------------- | ------------------------------- |
| `package.json`       | Project metadata & dependencies |
| `tsconfig.json`      | TypeScript compiler config      |
| `tailwind.config.js` | Tailwind CSS theme & extensions |
| `next.config.js`     | Next.js configuration           |
| `postcss.config.js`  | PostCSS processing config       |
| `.eslintrc.json`     | Code linting rules              |
| `.env.example`       | Environment variables template  |
| `.gitignore`         | Git ignore patterns             |

### 📂 App Directory: `app/`

| File          | Purpose                      |
| ------------- | ---------------------------- |
| `layout.tsx`  | Root layout & HTML structure |
| `page.tsx`    | Home page component          |
| `globals.css` | Global styles & animations   |

### 🧩 Components Directory: `components/`

#### Main Page Sections

| File           | Purpose                    | Lines |
| -------------- | -------------------------- | ----- |
| `Navbar.tsx`   | Navigation bar             | ~80   |
| `Hero.tsx`     | Hero/introduction section  | ~100  |
| `About.tsx`    | About me section           | ~80   |
| `Projects.tsx` | Featured projects showcase | ~150  |
| `Skills.tsx`   | Skills & expertise section | ~180  |
| `Contact.tsx`  | Contact form section       | ~160  |
| `Footer.tsx`   | Footer with links          | ~80   |

#### Reusable Components

| File                 | Purpose                     |
| -------------------- | --------------------------- |
| `ProjectCard.tsx`    | Reusable project card       |
| `SkillBadge.tsx`     | Skill/tag badge             |
| `SectionHeading.tsx` | Section title with gradient |
| `FeatureCard.tsx`    | Feature card with icon      |
| `Button.tsx`         | Custom button component     |
| `SocialButton.tsx`   | Social media button         |

### 📚 Library Directory: `lib/`

| File           | Purpose                  | Functions                     |
| -------------- | ------------------------ | ----------------------------- |
| `utils.ts`     | Utility helper functions | 6+                            |
| `constants.ts` | Static data & constants  | projects, skills, proficiency |

### 🔤 Types Directory: `types/`

| File       | Purpose                          |
| ---------- | -------------------------------- |
| `index.ts` | TypeScript interface definitions |

### 📖 Documentation Files

| File                     | Purpose            | Sections                                |
| ------------------------ | ------------------ | --------------------------------------- |
| `README.md`              | Main documentation | Overview, features, setup, deployment   |
| `GETTING_STARTED.md`     | Quick start guide  | Installation, customization, examples   |
| `CUSTOMIZATION_GUIDE.md` | How to customize   | Step-by-step guide, placeholders        |
| `DEVELOPMENT_GUIDE.md`   | Development tips   | Best practices, optimization, debugging |
| `STRUCTURE.md`           | Project structure  | Directory layout, file descriptions     |
| `PROJECT_SUMMARY.md`     | Complete summary   | Features, tech stack, next steps        |
| `INDEX.md`               | This file          | File reference & overview               |

### 📁 Public Directory: `public/`

```
public/
└── [images]      # Store your images here
```

### 📦 Node Modules: `node_modules/`

Auto-generated from `package.json`

---

## 📊 File Statistics

```
Total Files:              30+
Components:              11+ TSX files
Configuration Files:      8
Documentation Files:      6
Utility Files:           2
Type Definition Files:   1
CSS Files:              1
```

## 🔍 Code Organization

```
Lines of Code:
├── Components:        ~900 lines
├── Styles:           ~300 lines
├── Configuration:    ~200 lines
├── Utils & Types:    ~100 lines
└── Documentation:   ~1000+ lines
   Total:            ~2500+ lines
```

## 🎯 Key Files by Purpose

### For Customization

- `components/Hero.tsx` - Your intro
- `components/Projects.tsx` - Your projects
- `components/Skills.tsx` - Your skills
- `components/Contact.tsx` - Your contact
- `components/About.tsx` - Your bio
- `lib/constants.ts` - Static data

### For Styling

- `app/globals.css` - Global styles
- `tailwind.config.js` - Theme config
- `app/layout.tsx` - Layout styles

### For Functionality

- `components/Contact.tsx` - Form handling
- `lib/utils.ts` - Helper functions
- `components/Navbar.tsx` - Navigation

### For Deployment

- `package.json` - Dependencies
- `next.config.js` - Build config
- `.env.example` - Env variables

---

## 📋 Component Dependency Tree

```
page.tsx (Home)
├── Navbar
│   └── FiMenu, FiX (Icons)
├── Hero
│   ├── FiArrowRight, FiGithub, FiLinkedin, FiTwitter
│   └── motion (Framer Motion)
├── About
│   ├── FiBriefcase, FiBook, FiTarget
│   └── motion
├── Projects
│   ├── FiGithub, FiExternalLink
│   ├── ProjectCard (multiple)
│   └── motion
├── Skills
│   ├── FiCode, FiDatabase, FiLayout, FiTrendingUp
│   ├── SiReact, SiNextdotjs, SiTailwindcss, etc.
│   └── motion
├── Contact
│   ├── FiMail, FiPhone, FiMapPin, FiSend
│   ├── Form inputs
│   └── motion
└── Footer
    ├── FiGithub, FiLinkedin, FiTwitter, FiMail
    └── motion
```

## 🔗 Import Paths Reference

```typescript
// Main components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

// Reusable components
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Button from "@/components/Button";

// Utilities
import { cn, validateEmail } from "@/lib/utils";
import { featuredProjects } from "@/lib/constants";

// Types
import type { Project, ContactInfo } from "@/types";
```

## 📦 Dependencies by Category

### Core (Required)

- react, react-dom, next

### Styling

- tailwindcss, postcss, autoprefixer

### Animations

- framer-motion

### Icons

- react-icons

### Development

- typescript, eslint, @types/\*

---

## 🚀 File Modification Guide

### To Add a New Feature

1. Create component in `components/NewFeature.tsx`
2. Import in `app/page.tsx`
3. Add new section in page
4. Update global styles if needed
5. Test in browser

### To Customize Content

1. Edit `lib/constants.ts` for data
2. Edit specific component file
3. Update `types/index.ts` if needed
4. Save and test

### To Deploy

1. Update `.env.local` with production vars
2. Run `npm run build`
3. Run `npm run start` locally to test
4. Deploy to Vercel/other platform

---

## ✅ Pre-Launch Checklist

- [ ] All content updated (name, projects, skills)
- [ ] Images added to `public/` folder
- [ ] Links updated (social, projects)
- [ ] Email form configured
- [ ] Colors customized (optional)
- [ ] `npm run build` passes
- [ ] Tested on mobile & desktop
- [ ] Ready for deployment

---

## 📞 File Troubleshooting

| Issue                   | File to Check                                 |
| ----------------------- | --------------------------------------------- |
| Styles not showing      | `app/globals.css`, `tailwind.config.js`       |
| Component not rendering | Check import in `app/page.tsx`                |
| Form not working        | `components/Contact.tsx`                      |
| Navigation broken       | `components/Navbar.tsx`                       |
| Projects not showing    | `components/Projects.tsx`, `lib/constants.ts` |
| TypeScript errors       | `types/index.ts`, `tsconfig.json`             |
| Build fails             | `package.json`, `next.config.js`              |

---

Generated: February 2026
Portfolio Version: 1.0.0
Next.js Version: 14.0.0+
