# Frontend Developer Portfolio Configuration Guide

## 🎯 Quick Customization Guide

Follow these steps to personalize your portfolio:

### Step 1: Update Navigation

**File**: `components/Navbar.tsx` (Lines 8-13)

```typescript
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
```

### Step 2: Hero Section

**File**: `components/Hero.tsx`

- Update introduction text (Line 42)
- Modify title (Lines 45-48)
- Change social media URLs (Services 81-92)

### Step 3: About Section

**File**: `components/About.tsx`

- Edit features (Lines 13-22)
- Update bio text (Lines 95-102)

### Step 4: Projects

**File**: `components/Projects.tsx`

Update the projects array (Lines 6-43):

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    tags: ["Tech1", "Tech2"],
    image: "🏆",
    link: "https://project-link.com",
    github: "https://github.com/your-repo",
  },
  // Add more projects...
];
```

### Step 5: Skills

**File**: `components/Skills.tsx`

- Update skill categories (Lines 9-25)
- Modify technology list (Lines 117-122)
- Adjust proficiency levels (Lines 183-197)

### Step 6: Contact Information

**File**: `components/Contact.tsx` (Lines 49-63)

```typescript
const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  // ... add more
];
```

### Step 7: Theme Colors

**File**: `tailwind.config.js` (Lines 8-27)

Modify the primary colors to match your brand:

```javascript
colors: {
  primary: {
    50: '#f0f7ff',
    // ... update color hex codes
    600: '#0284c7',  // Main color
    // ...
  },
}
```

## 🎨 Design Highlights

- **Dark Theme**: Professional dark background with cyan/blue accents
- **Glass Effect**: Modern frosted glass UI components
- **Animations**: Smooth Framer Motion animations on scroll
- **Icons**: React Icons for consistent iconography
- **Responsive**: Mobile-first responsive design
- **Modern Typography**: Clean, readable font hierarchy

## 📦 Placeholders to Replace

Search for these and update them:

1. **hello@example.com** - Add your email
2. **+1 (555) 123-4567** - Add your phone
3. **Your City, Country** - Add your location
4. **github.com** - Add your GitHub URL
5. **linkedin.com** - Add your LinkedIn URL
6. **twitter.com** - Add your Twitter URL
7. **Project names** - Add your actual projects
8. **Project descriptions** - Update with real details

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Replace placeholder project links
- [ ] Add real project descriptions
- [ ] Update social media URLs
- [ ] Customize color theme if desired
- [ ] Test responsive design on mobile
- [ ] Check all external links work
- [ ] Update favicon in `public/` directory
- [ ] Set up email notifications (optional)

## 🔗 Useful Links

- Shopify Design Inspiration: https://www.shopify.com/editions/winter2026
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- React Icons: https://react-icons.github.io/react-icons

## 💡 Tips

1. **Add Images**: Create a `public/images` folder and reference images
2. **Custom Fonts**: Add Google Fonts URLs to `globals.css`
3. **Analytics**: Integrate Google Analytics or your preferred service
4. **SEO**: Update meta tags in `app/layout.tsx`
5. **Performance**: Use Next.js Image component for images
6. **Forms**: Integrate with services like Formspree or Mailchimp for contact forms

## 📞 Need Help?

Refer to the main README.md for more detailed information about the project structure and features.
