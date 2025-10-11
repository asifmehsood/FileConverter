# File Format Converter

A comprehensive file format converter application that supports multiple file format conversions including:
- Word to PDF, PDF to Word
- PowerPoint to PDF, PDF to PowerPoint
- Excel to PDF, PDF to Excel
- Image format conversions (JPG, PNG, WEBP, etc.)
- And many more format conversions

## Architecture

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: NestJS with TypeScript
- **Database**: MongoDB
- **File Processing**: Various libraries for different format conversions

## Project Structure

```
Converter/
├── frontend/          # Next.js frontend application
├── backend/           # NestJS backend API
├── docker-compose.yml # Docker setup for development
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Docker (optional, for containerized development)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Set up both frontend and backend following their respective README files

### Development

1. Start MongoDB
2. Start the backend server
3. Start the frontend development server

## Features

- Multiple file format support
- Drag and drop file upload
- Real-time conversion progress
- Download converted files
- Conversion history
- User authentication
- File size limits and validation
- Responsive design

## Contributing

Please read the contributing guidelines before making any changes.

## License

This project is licensed under the MIT License.