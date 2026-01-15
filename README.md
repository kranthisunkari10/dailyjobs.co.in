# DailyJobs Website

A modern, enterprise-level React website for DailyJobs - a blue collar job portal connecting job seekers with employers through an innovative map-based platform.

## Features

- **Modern React Application** with Vite
- **React Router** for seamless navigation
- **Framer Motion** animations for smooth user experience
- **Responsive Design** that works on all devices
- **Enterprise-level UI/UX** with professional design
- **Security Best Practices** implemented

## Pages

- HomePage
- For Employers
- For Job Seekers
- Terms & Conditions
- Privacy Policy
- Contact Us
- Login (Coming Soon)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment Notes

### Direct URL Access (Page Not Found Issue)

When deploying to production, ensure your server is configured to handle client-side routing. This React app uses React Router for navigation, which requires all routes to redirect to `index.html`.

**For Apache servers:** Use the `.htaccess` file in the `public` folder (automatically copied to `dist` during build).

**For Netlify:** Use the `_redirects` file in the `public` folder (automatically copied to `dist` during build).

**For Vercel:** Use the `vercel.json` file in the `public` folder (automatically copied to `dist` during build).

**For Nginx:** Add this to your server configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

The Vite dev server handles routing automatically, so direct URLs work in development without additional configuration.

## Tech Stack

- **React 18** - UI library
- **React Router DOM** - Routing
- **Framer Motion** - Animations
- **Vite** - Build tool
- **CSS3** - Styling

## Contact Information

- Email: support@dailyjobs.co.in
- Phone: +91 9347302536

## License

Copyright © 2024 DailyJobs. All rights reserved.
