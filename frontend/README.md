# File Converter Frontend

A modern Next.js frontend for the file format converter application.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **File Upload**: React Dropzone
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Data Fetching**: TanStack Query

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables file:
   ```bash
   cp .env.example .env.local
   ```

3. Update environment variables in `.env.local`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_MAX_FILE_SIZE=10485760
```

## Features

- Drag and drop file upload
- Multiple file format support
- Real-time conversion progress
- Download converted files
- Conversion history
- Responsive design
- Dark/Light theme
- User authentication

## Project Structure

```
src/
├── app/                 # App Router pages
├── components/         # Reusable components
├── lib/               # Utility functions and configs
├── stores/            # Zustand stores
├── types/             # TypeScript type definitions
└── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## API Integration

The frontend communicates with the NestJS backend API for:
- File upload and conversion
- User authentication
- Conversion history
- File management
