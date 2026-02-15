# Getting Started with Your Portfolio

## 📖 Quick Start

1. **Extract the files** to your desired location
2. **Open terminal** in the portfolio folder
3. **Run these commands**:
   ```bash
   npm install
   npm run dev
   ```
4. **Open browser**: Navigate to `http://localhost:3000`

## 🎨 Design Features

### Color Scheme

- **Primary**: Cyan Blue (#0ea5e9) - Modern, professional
- **Background**: Dark (#0f1419) - Easy on the eyes
- **Accents**: Glassmorphism effects with transparency
- **Icons**: React Icons for consistency

### Design Elements

- ✨ Gradient text on headings
- 🌊 Floating animation backgrounds
- 🎯 Glass-morphism cards and components
- 🔄 Smooth transitions and interactions
- 📱 Fully responsive mobile design
- 🎬 Framer Motion animations on scroll

## 📝 Content to Update

### Priority Updates (High)

1. **Hero Section** - Add your name and introduction
   - File: `components/Hero.tsx`
   - Update lines 42-48

2. **Projects** - Add your real projects
   - File: `components/Projects.tsx`
   - Update projects array (lines 6-43)

3. **Skills** - Add your actual skills
   - File: `components/Skills.tsx`
   - Update skill categories and technologies

4. **Contact Info** - Add your contact details
   - File: `components/Contact.tsx`
   - Update contactInfo array (lines 49-63)

### Secondary Updates (Medium)

5. **About Section** - Customize your bio
   - File: `components/About.tsx`
   - Update feature cards and bio text

6. **Social Links** - Connect your profiles
   - Files: `components/Hero.tsx`, `components/Footer.tsx`
   - Update all social media URLs

### Optional Updates (Low)

7. **Colors** - Change theme colors
   - File: `tailwind.config.js`
   - Modify color palette

8. **Logo/Brand** - Add your branding
   - File: `components/Navbar.tsx`
   - Change logo text and styling

## 🔧 Component Guide

### Main Components

**Navbar** (`components/Navbar.tsx`)

- Fixed navigation with smooth scroll
- Mobile-responsive hamburger menu
- CTA button for contact

**Hero** (`components/Hero.tsx`)

- Introduction section
- Social media buttons
- Call-to-action buttons
- Animated background element

**About** (`components/About.tsx`)

- Personal introduction
- Feature highlights (3 cards)
- Detailed bio section

**Projects** (`components/Projects.tsx`)

- Project showcase grid
- Project cards with images/icons
- Technology tags
- Links to live projects and code

**Skills** (`components/Skills.tsx`)

- Skill categories (4 columns)
- Technology showcase with icons
- Proficiency level indicators
- Animated progress bars

**Contact** (`components/Contact.tsx`)

- Contact information cards
- Functional contact form
- Form validation

**Footer** (`components/Footer.tsx`)

- Quick navigation links
- Social media links
- Copyright information

### Utility Components

**ProjectCard** - Reusable project card component
**SkillBadge** - Skill/tag badge component
**FeatureCard** - Feature card with icon
**Button** - Custom button with variants
**SocialButton** - Social media button
**SectionHeading** - Section titles with gradient

## 🎯 Customization Examples

### Change Primary Color

In `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#8b5cf6', // Purple
    600: '#7c3aed',
    // ... other shades
  }
}
```

### Update Project

In `components/Projects.tsx`:

```typescript
{
  title: 'Your Project Name',
  description: 'Your project description',
  tags: ['Tech1', 'Tech2'],
  image: '🎯',
  link: 'https://your-project.com',
  github: 'https://github.com/you/project',
}
```

### Add Skill

In `components/Skills.tsx`:

```typescript
{
  category: 'New Category',
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

## 🚀 Deployment

### Recommended: Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Connect repository
4. Auto-deploys on push!

### Alternative: Other Platforms

1. Build: `npm run build`
2. Deploy the `out` folder to:
   - Netlify
   - GitHub Pages
   - AWS S3
   - Firebase Hosting

## 📊 Performance Tips

- Use Next.js Image component for images
- Lazy load heavy sections
- Optimize images before adding
- Minimize CSS/JS bundle size
- Use caching headers for static assets

## 🔒 Security Tips

- Never commit `.env.local` with secrets
- Use environment variables for APIs
- Sanitize form inputs
- Keep dependencies updated
- Use HTTPS in production

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion

## ❓ FAQ

**Q: How do I add images?**
A: Create a `public/images` folder and reference with:

```jsx
<img src="/images/name.jpg" alt="description" />
```

**Q: How do I change fonts?**
A: Update `app/globals.css` with Google Fonts or custom fonts

**Q: How do I add animations?**
A: Use Framer Motion (already installed):

```jsx
<motion.div animate={{ opacity: 1 }}>Content</motion.div>
```

**Q: How do I deploy?**
A: Push to GitHub, connect to Vercel, done!

## 💬 Support

For issues or questions:

- Check Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- React docs: https://react.dev

---

**Start customizing now and make your portfolio shine!** ✨
