# Development Tips & Best Practices

## 🚀 Performance Optimization

### Image Optimization

```jsx
// ✅ Good - Using Next.js Image
import Image from 'next/image'
<Image src="/image.jpg" width={500} height={300} alt="desc" />

// ❌ Avoid - Using HTML img
<img src="/image.jpg" alt="desc" />
```

### Code Splitting

- Next.js automatically code splits by page
- Use dynamic imports for heavy components:

```tsx
const HeavyComponent = dynamic(() => import("@/components/Heavy"));
```

### Component Optimization

```tsx
// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => calculateValue(), [deps])

// Use useCallback for function memoization
const handleClick = useCallback(() => { ... }, [deps])
```

## 🎨 Styling Best Practices

### Tailwind Classes

- Prefer Tailwind utilities over custom CSS
- Use arbitrary values for custom values
- Leverage dark mode utilities

```tsx
// ✅ Good
<div className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700">

// ❌ Avoid
<div style={{ padding: '8px 16px', borderRadius: '8px' }}>
```

### Custom Styles

Store in `globals.css` or component-scoped styles:

```css
/* In globals.css */
.glass-effect {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl;
}
```

## 🔧 Development Workflow

### Local Development

```bash
# Start dev server
npm run dev

# Open browser
http://localhost:3000

# Watch for changes (auto-reloads)
```

### Building for Production

```bash
npm run build    # Compile and optimize
npm run start    # Start production server
```

### Testing

```bash
npm run lint     # Check code quality
```

## 📱 Responsive Design

### Mobile-First Approach

```tsx
<div className="
  text-sm sm:text-base md:text-lg lg:text-xl
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
">
```

### Breakpoints Used

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## ✨ Animation Guidelines

### Framer Motion

```tsx
import { motion } from 'framer-motion'

// Simple animation
<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>

// On scroll animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

// Hover animation
<motion.div whileHover={{ scale: 1.05 }}>
```

### Performance Tips

- Use `once: true` in `viewport` to avoid re-animations
- Avoid animating `position` property (use `transform`)
- Keep animations under 500ms for micro-interactions

## 🔐 Security Best Practices

### Environment Variables

```javascript
// ✅ Good - Server-side only
const apiKey = process.env.API_KEY;

// ❌ Bad - Exposed to browser
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
```

### Form Security

```tsx
// Validate email before submission
if (!validateEmail(email)) {
  setError("Invalid email");
  return;
}

// Sanitize user input
const sanitized = DOMPurify.sanitize(userInput);
```

### HTTPS

- Always use HTTPS in production
- Set secure cookie flags
- Implement CSP headers

## 📝 Code Quality

### TypeScript

- Always define types for props
- Use strict mode
- Avoid `any` type

```tsx
interface Props {
  title: string;
  onClick: () => void;
}

export default function Component({ title, onClick }: Props) {
  // ...
}
```

### Naming Conventions

```tsx
// ✅ Good
const isLoading = true;
const handleSubmit = () => {};
const getUserData = () => {};

// ❌ Bad
const loading = true;
const onclick = () => {};
const getUser = () => {};
```

## 🐛 Debugging

### Browser Tools

- Use React DevTools extension
- Chrome DevTools for performance profiling
- Network tab for API debugging

### Logging

```tsx
// Development only
console.log("Debug:", data);

// Better - use debug library
import debug from "debug";
const log = debug("app:component");
log("message");
```

### Error Boundaries

```tsx
import ErrorBoundary from "@/components/ErrorBoundary";

<ErrorBoundary>
  <Component />
</ErrorBoundary>;
```

## 🌐 SEO Best Practices

### Meta Tags

```tsx
// In layout.tsx
export const metadata = {
  title: "My Portfolio",
  description: "Frontend developer portfolio",
  viewport: "width=device-width, initial-scale=1",
};
```

### Semantic HTML

```tsx
// ✅ Good
<header>...</header>
<main>...</main>
<article>...</article>
<footer>...</footer>

// ❌ Bad
<div className="header">...</div>
<div className="main">...</div>
```

## 📦 Deployment Checklist

Before deploying:

- [ ] Remove all console.log statements
- [ ] Update meta tags for SEO
- [ ] Test all links work
- [ ] Check responsive design on mobile
- [ ] Optimize images
- [ ] Update environment variables
- [ ] Test contact form functionality
- [ ] Check page load speed
- [ ] Verify analytics tracking
- [ ] Update social media links

## 🚀 Deployment Commands

### Vercel

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Deploy via Vercel UI or CLI
npm i -g vercel
vercel
```

### Manual Deployment

```bash
npm run build
# Upload 'out' or '.next' folder to hosting
```

## 📈 Performance Metrics

Aim for:

- **Largest Contentful Paint (LCP)**: < 2.5s
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1

Monitor with:

- Google PageSpeed Insights
- WebPageTest
- Lighthouse (built into Chrome)

## 💡 Common Issues & Solutions

### Issue: Styles not applying

**Solution**: Check class name spelling, clear cache, rebuild

### Issue: Images not loading

**Solution**: Verify path, use public/ folder, check Next.js Image component

### Issue: Form not submitting

**Solution**: Validate inputs, check endpoint, verify CORS

### Issue: Animations stuttering

**Solution**: Use transform/opacity, reduce number of animations

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org/docs)

---

**Happy coding! Remember to test frequently and deploy with confidence.** 🎉
