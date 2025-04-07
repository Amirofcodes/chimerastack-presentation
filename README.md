# ChimeraStack Presentation

A modern slide deck created to showcase [ChimeraStack](https://chimerastack.com/) - an automated development environment platform. This presentation was developed for the RNCP38606 Full Stack Developer certification defense.

## About This Repository

This repository contains a React-based presentation website that illustrates the ChimeraStack platform's features, architecture, and development process. It is **not** the actual ChimeraStack platform (which can be found at [github.com/Amirofcodes/chimera-web-platform](https://github.com/Amirofcodes/chimera-web-platform)).

## Presentation Content

The slides cover:

- Introduction to ChimeraStack and the problem it solves
- Frontend architecture (React, TypeScript, Tailwind CSS)
- Backend implementation (RESTful API, JWT authentication, payment integration)
- Deployment process (Docker, CI/CD, monitoring)
- Technical challenges and solutions

## Tech Stack

This presentation was built with:

- React 19 and TypeScript
- Tailwind CSS for styling
- Framer Motion for transitions
- Docker for development environment

## Quick Start

### Using npm

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Using Docker

```bash
# Build and start container
docker-compose up --build

# Access at http://localhost:3001
```

## Slide Navigation

- Use keyboard arrows (left/right) to navigate between main slides
- Within carousel sections, the navigation buttons allow cycling through sub-slides

## Deployment

The presentation is deployed on GitHub Pages:

1. Using gh-pages package:
   ```bash
   npm run deploy
   ```

2. Access at https://amirofcodes.github.io/chimerastack-presentation/

## Related Projects

- [ChimeraStack Platform](https://github.com/Amirofcodes/chimera-web-platform) - The actual web platform
- [ChimeraStack CLI](https://github.com/Amirofcodes/ChimeraStack_CLI) - The CLI version of ChimeraStack

## License

MIT License