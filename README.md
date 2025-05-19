# Aerospace AI Training

A modern, component-based React application for showcasing aerospace AI implementation information. The application is built with modularity and customization in mind, allowing different content to be easily swapped in while maintaining the overall structure.

## Features

- Component-based architecture for maximum reusability
- Tab-based navigation with content sections
- Responsive design using Tailwind CSS
- Accordion components for organized content display
- Theme customization capabilities
- TypeScript for type safety

## Project Structure

```
/src
  /components
    /common         # Reusable UI components
    /layout         # Layout components
    /sections       # Content section components
  /config           # Configuration files
  /hooks            # Custom React hooks
  /utils            # Utility functions
  /types            # TypeScript type definitions
  /templates        # Industry-specific templates
  /styles           # Global styles
  /assets           # Static assets
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Koktosen/Aerospace_ai_training.git
   cd Aerospace_ai_training
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

## Customization

### Theming

The application includes multiple theme configurations in `src/config/theme.ts`. You can modify these themes or create new ones by following the existing pattern.

### Content

Content for each section is stored in configuration files which can be easily modified without changing the component structure.

## License

MIT
