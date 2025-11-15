# The Blerd - Blerdcon Hub App

A modern, responsive web application for Blerdcon - the ultimate hub for all Blerdcon news, guest announcements, event schedules, and Blerd culture.

## Tech Stack

- **Next.js 16** - App Router with Turbopack
- **React 19.2** - Latest React features
- **TypeScript 5.9** - Type-safe development
- **Tailwind CSS v4.0** - Modern utility-first styling
- **Firebase** - Authentication and Firestore database
- **Node.js v25.2.0** - Latest runtime features

## Features

- 🎨 Beautiful, responsive design with pink/cyan color scheme
- 🔍 Real-time search across all content
- 🔐 Firebase authentication (anonymous sign-in)
- 📱 Mobile-first responsive design
- ⚡ Optimized with Next.js 16 Turbopack
- 🎯 Type-safe with TypeScript
- 🎭 Smooth animations and transitions
- 📦 Modular component architecture

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── icons/            # SVG icon components
│   ├── sections/         # Section components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── firebase.ts       # Firebase configuration
│   └── mock-data.ts      # Mock data
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared types
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js v25.2.0 or higher
- npm or yarn
- Firebase project (optional, for auth features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Claudespace1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Firebase configuration to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Component Architecture

### Server Components (RSC)
- `page.tsx` - Main page wrapper
- `layout.tsx` - Root layout
- `cards.tsx` - Content cards
- `content-section.tsx` - Section wrapper
- `hero-section.tsx` - Hero banner
- `footer.tsx` - Footer component

### Client Components
- `main-content.tsx` - Main content with search state
- `header.tsx` - Header with search and menu
- `auth-button.tsx` - Firebase authentication
- `mobile-menu.tsx` - Mobile navigation menu

## Content Sections

1. **Latest Updates** - Blerdcon news and announcements
2. **Guest Announcements** - Featured guests and performers
3. **Featured Events** - Main events and applications
4. **Blerd Culture & News** - Articles and culture pieces
5. **Gaming & Panels** - Gaming tournaments and panels
6. **Blerdcon Store** - Official merchandise
7. **Blerd TV & Recaps** - Video content
8. **Event Info** - Badges, hotels, and policies

## Styling

The app uses a custom dark theme with:
- **Primary Colors**: Pink (`#ec4899`) and Cyan (`#06b6d4`)
- **Background**: Pure black (`#000000`)
- **Text**: Gray scale for hierarchy
- **Accents**: Gradient effects and glow

## Firebase Integration

The app supports Firebase authentication with:
- Anonymous sign-in (default)
- Custom token authentication
- Real-time auth state management

## Best Practices

- ✅ Uses React Server Components by default
- ✅ Minimal client-side JavaScript
- ✅ Type-safe with TypeScript
- ✅ Optimized images with Next.js Image
- ✅ Mobile-first responsive design
- ✅ Accessibility features
- ✅ SEO optimization

## Contributing

This is a fan project. Contributions are welcome!

## License

ISC

## Disclaimer

This is an unofficial fan project and is not affiliated with Blerdcon or Blerd.com.