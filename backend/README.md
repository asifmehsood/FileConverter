# File Converter Backend

A NestJS backend API for the file format converter application.

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with Passport
- **File Processing**: 
  - Sharp (Images)
  - PDF-lib (PDF manipulation)
  - Puppeteer (HTML to PDF)
  - Mammoth (Word documents)
  - XLSX (Excel files)
- **File Upload**: Multer
- **Validation**: Class Validator & Class Transformer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment variables file:
   ```bash
   cp .env.example .env
   ```

3. Update environment variables in `.env`

4. Start MongoDB service (if running locally)

5. Start the development server:
   ```bash
   npm run start:dev
   ```

6. API will be available at [http://localhost:3001](http://localhost:3001)

## Environment Variables

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/file-converter
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10485760
```

## Features

- File upload and validation
- Multiple format conversion support
- User authentication and authorization
- Conversion history tracking
- Real-time conversion progress
- File cleanup and management
- RESTful API endpoints
- Input validation and error handling

## API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token

### File Conversion
- `POST /convert/upload` - Upload file for conversion
- `GET /convert/history` - Get conversion history
- `GET /convert/download/:id` - Download converted file
- `DELETE /convert/:id` - Delete conversion record

### User Management
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile

## Project Structure

```
src/
├── auth/              # Authentication module
├── convert/           # File conversion module
├── users/             # User management module
├── common/            # Shared utilities and decorators
├── config/            # Configuration files
├── schemas/           # MongoDB schemas
└── main.ts           # Application entry point
```

## File Processing Capabilities

- **PDF**: Create, merge, split, convert to images
- **Word**: Extract text, convert to PDF/HTML
- **Excel**: Read/write data, convert to PDF
- **Images**: Resize, format conversion, optimization
- **PowerPoint**: Convert to PDF (via LibreOffice)

## Development

- `npm run start` - Start production server
- `npm run start:dev` - Start development server with watch mode
- `npm run start:debug` - Start development server in debug mode
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
