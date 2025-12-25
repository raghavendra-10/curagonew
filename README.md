# CuraGo Anxiety Loop Assessment 1.0 - Landing Page

A minimal, anxiety-safe landing page built with Next.js 15, following core principles of reduced cognitive load and calm design.

## 🎯 Core Principles

1. **Lower nervous system load** - Minimal stimulation
2. **No surprises** - Predictable interactions
3. **One primary action** - Single CTA throughout
4. **Fast visual parsing** - Clean typography and spacing
5. **Zero pressure language** - Calm, informative copy

## 🛠 Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Simple, clean icons
- **Inter Font** - Clean, readable typography

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📐 Design System

### Colors
- **Primary text**: #111111
- **Secondary text**: #4A4A4A
- **Muted text**: #7A7A7A
- **Borders**: #EAEAEA
- **Backgrounds**: #FFFFFF, #FAFAFA, #F7F7F7

### Typography
- **Font**: Inter (400, 500, 600 weights only)
- **H1**: 26-32px
- **H2**: 22-26px
- **Body**: 15.5-16px
- **Micro-copy**: 12.5-13px

### Spacing
- **Max width**: 1120px
- **Mobile content**: 92% width (4% padding each side)
- **Section padding**: 48-64px vertical

## 📄 Page Sections

1. **Hero** - Above-the-fold introduction with primary CTA
2. **For You If** - Self-selection checklist
3. **What This Is/Isn't** - Clear expectations
4. **How It Works** - 3-step process
5. **Sample Insight** - Example output
6. **Who This Helps** - Target audience
7. **Price Anchor** - ₹299 pricing with CTA
8. **FAQ** - Collapsible accordion
9. **Final CTA** - Footer conversion

## ⚡ Performance Targets

- **Load time**: < 2 seconds
- **First Contentful Paint**: < 1s
- **No animations** - Except subtle fade-ins (250ms)
- **Mobile-first** - Optimized for thumb scrolling

## ✅ Design Guidelines

### What to Avoid
- ❌ Chat widgets
- ❌ Popups
- ❌ Exit intent
- ❌ Countdown timers
- ❌ Sticky headers
- ❌ Multiple CTAs
- ❌ Emojis
- ❌ Videos/heavy animations
- ❌ Red colors
- ❌ Gradients
- ❌ Heavy shadows

### What to Include
- ✅ Single, clear CTA
- ✅ Minimal motion
- ✅ High contrast text
- ✅ Ample whitespace
- ✅ Predictable interactions
- ✅ Linear scroll
- ✅ Fast parsing

## 📱 Mobile Optimization

- Fully responsive
- Touch-friendly (54px button height)
- 92% content width on mobile
- No horizontal scroll
- Thumb-friendly navigation

## 🔧 Project Structure

```
curagonew/
├── app/
│   ├── layout.js          # Root layout with Inter font
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles
├── components/
│   └── landing/           # All landing page sections
│       ├── Hero.jsx
│       ├── ForYouIf.jsx
│       ├── WhatThisIs.jsx
│       ├── HowItWorks.jsx
│       ├── SampleInsight.jsx
│       ├── WhoThisHelps.jsx
│       ├── PriceAnchor.jsx
│       ├── FAQ.jsx
│       └── FinalCTA.jsx
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## 📝 License

© 2024 CuraGo Health. All rights reserved.
