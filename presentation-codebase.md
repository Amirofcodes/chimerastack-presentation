# .dockerignore

```
node_modules
build
.git
.DS_Store

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

# docker-compose.yml

```yml
version: "3.8"

services:
  app:
    build: .
    volumes:
      - ./:/app
      - /app/node_modules
    ports:
      - "3001:3000"
    environment:
      - CHOKIDAR_USEPOLLING=true
      - WATCHPACK_POLLING=true

```

# Dockerfile

```
FROM node:18-alpine

WORKDIR /app

EXPOSE 3000

CMD ["sh", "-c", "npm install && npm start"]

```

# package.json

```json
{
  "name": "chimerastack-presentation",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.126",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.1",
    "framer-motion": "^12.6.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.5.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.3",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "postcss-loader": "^7.3.4",
    "tailwindcss": "^4.1.3"
  }
}

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

```

# public/favicon.ico

This is a binary file of the type: Binary

# public/images/amirofcodepic.jpg

This is a binary file of the type: Image

# public/index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>

```

# public/logo192.png

This is a binary file of the type: Image

# public/logo512.png

This is a binary file of the type: Image

# public/manifest.json

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

# public/robots.txt

```txt
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

# src/App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

# src/App.test.tsx

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

# src/App.tsx

```tsx
// src/App.tsx
import React from 'react';
import { SlideProvider, useSlides } from './context/SlideContext';
import Sidebar from './components/layout/Sidebar';
import SlideContainer from './components/layout/SlideContainer';
import Title from './components/slides/Title';
import Summary from './components/slides/Summary';
import Introduction from './components/slides/Introduction';
import Frontend from './components/slides/Frontend';
import Backend from './components/slides/Backend';
import Deployment from './components/slides/Deployment';
import Conclusion from './components/slides/Conclusion'; // Import Conclusion

const Presentation: React.FC = () => {
  const { currentSlide } = useSlides();
  
  const renderCurrentSlide = () => {
    switch(currentSlide) {
      case 0:
        return <Title />;
      case 1:
        return <Summary />;
      case 2:
        return <Introduction />;
      case 3:
        return <Frontend />;
      case 4:
        return <Backend />;
      case 5:
        return <Deployment />;
      case 6:
        return <Conclusion />;
      default:
        return <div>Slide en construction</div>;
    }
  };
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <SlideContainer>
        {renderCurrentSlide()}
      </SlideContainer>
    </div>
  );
};

function App() {
  return (
    <SlideProvider>
      <Presentation />
    </SlideProvider>
  );
}

export default App;

```

# src/components/layout/Sidebar.tsx

```tsx
// src/components/layout/Sidebar.tsx
import React from 'react';
import { useSlides } from '../../context/SlideContext';

const slidesTitles = [
  "Titre",
  "Sommaire",
  "Introduction",
  "Frontend",
  "Backend",
  "Déploiement",
  "Conclusion"
];

const Sidebar: React.FC = () => {
  const { currentSlide, goToSlide } = useSlides();
  
  return (
    <div className="w-64 bg-indigo-900 text-white h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-indigo-800">
        <h2 className="text-xl font-bold">ChimeraStack</h2>
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 border-b border-indigo-800">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-md border-2 border-indigo-700">
          <img 
            src="/images/amirofcodepic.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm">Jaouad Bouddehbine</p>
        <p className="text-xs text-indigo-300">Développeur Full Stack</p>
      </div>
      
      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {slidesTitles.map((title, index) => (
            <li 
              key={index}
              className={`py-2 px-4 rounded cursor-pointer ${currentSlide === index ? 'bg-indigo-700' : 'hover:bg-indigo-800'}`}
              onClick={() => goToSlide(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

```

# src/components/layout/SlideContainer.tsx

```tsx
// src/components/layout/SlideContainer.tsx
import React, { useEffect } from 'react';
import { useSlides } from '../../context/SlideContext';

interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  const { nextSlide, prevSlide } = useSlides();
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);
  
  return (
    <div className="flex-1 overflow-hidden bg-gray-50 dark:bg-gray-900 p-8">
      {children}
    </div>
  );
};

export default SlideContainer;
```

# src/components/shared/Carousel.tsx

```tsx
// src/components/shared/Carousel.tsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-4/5 h-4/5">
            {slides[currentIndex]}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-indigo-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
```

# src/components/shared/SlideTitle.tsx

```tsx
// src/components/shared/SlideTitle.tsx
import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
}

const SlideTitle: React.FC<SlideTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-400">
      {children}
    </h2>
  );
};

export default SlideTitle;
```

# src/components/slides/Backend/Demo.tsx

```tsx
import React from 'react';

const Demo: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Démonstration Backend</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Visualisation de l'API via Swagger pour explorer les endpoints.
      </p>
      <p className="text-lg">
        Présentation d'exemples de réponses API formatées (succès et erreurs).
      </p>
      <p className="text-lg">
        Mise en avant de la robustesse et de la sécurité de l'architecture backend.
      </p>
    </div>
  </div>
);

export default Demo;

```

# src/components/slides/Backend/index.tsx

```tsx
import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Overview from './Overview';
import Security from './Security';
import Payment from './Payment';
import Demo from './Demo';

const Backend: React.FC = () => {
  const slides = [
    <Overview />,
    <Security />,
    <Payment />,
    <Demo />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Backend</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Backend;

```

# src/components/slides/Backend/Overview.tsx

```tsx
import React from 'react';

const Overview: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">API RESTful & Structure MVC</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Conception d'une API RESTful modulable reposant sur le modèle MVC pour une organisation claire.
      </p>
      <p className="text-lg">
        Standardisation des réponses en JSON afin de faciliter la communication avec le frontend.
      </p>
      <p className="text-lg">
        Architecture orientée microservices pour une scalabilité efficace.
      </p>
    </div>
  </div>
);

export default Overview;

```

# src/components/slides/Backend/Payment.tsx

```tsx
import React from 'react';

const Payment: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Système de Paiement</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Intégration de Stripe et PayPal pour des transactions sécurisées.
      </p>
      <p className="text-lg">
        Suivi des paiements via un modèle de données dédié et gestion des transactions.
      </p>
      <p className="text-lg">
        Facilité d'extension pour ajouter de futures fonctionnalités premium.
      </p>
    </div>
  </div>
);

export default Payment;

```

# src/components/slides/Backend/Security.tsx

```tsx
import React from 'react';

const Security: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Sécurité & Authentification</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Implémentation d'un système d'authentification sécurisé via JWT.
      </p>
      <p className="text-lg">
        Utilisation de middleware pour protéger les endpoints sensibles.
      </p>
      <p className="text-lg">
        Mesures de prévention contre les injections SQL, CSRF et XSS.
      </p>
    </div>
  </div>
);

export default Security;

```

# src/components/slides/Conclusion.tsx

```tsx
import React from 'react';
import SlideTitle from '../shared/SlideTitle';

const Conclusion: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <SlideTitle>Conclusion</SlideTitle>
      <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-3xl">
        <p className="text-lg">
          <strong>Compétences Acquises :</strong> La réalisation de ChimeraStack a permis de renforcer les compétences en développement full stack, notamment la conception d’architectures sécurisées, l’intégration continue et la gestion d’environnements Docker, conformément aux exigences du RNCP38606.
        </p>
        <p className="text-lg">
          <strong>Difficultés & Solutions :</strong> Les défis liés à la configuration des environnements et à la sécurisation des données ont été surmontés grâce à l’automatisation via Docker, à des tests rigoureux et à une architecture API robuste.
        </p>
        <p className="text-lg">
          <strong>Perspectives d'Évolution :</strong> Le projet ouvre des perspectives pour intégrer de nouveaux templates, explorer des technologies complémentaires telles que Node.js ou Python, et améliorer en continu les performances et la sécurité de la plateforme.
        </p>
      </div>
    </div>
  );
};

export default Conclusion;

```

# src/components/slides/Deployment/index.tsx

```tsx
import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Infra from './Infra';
import Pipeline from './Pipeline';
import Monitoring from './Monitoring';

const Deployment: React.FC = () => {
  const slides = [
    <Infra />,
    <Pipeline />,
    <Monitoring />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Déploiement</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Deployment;

```

# src/components/slides/Deployment/Infra.tsx

```tsx
import React from 'react';

const Infra: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Infrastructure & Hébergement</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Utilisation d’un VPS Contabo avec Ubuntu 20.04 et gestion DNS via Namecheap.
      </p>
      <p className="text-lg">
        Architecture Docker multi-conteneurs orchestrée par Docker Compose.
      </p>
      <p className="text-lg">
        Configuration de Nginx pour la terminaison SSL et le routage sécurisé.
      </p>
    </div>
  </div>
);

export default Infra;

```

# src/components/slides/Deployment/Monitoring.tsx

```tsx
import React from 'react';

const Monitoring: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Monitoring & Maintenance</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Surveillance continue des services via healthchecks et monitoring.
      </p>
      <p className="text-lg">
        Centralisation et rotation des logs pour une maintenance proactive.
      </p>
      <p className="text-lg">
        Processus de mise à jour et de maintenance réguliers pour garantir la disponibilité.
      </p>
    </div>
  </div>
);

export default Monitoring;

```

# src/components/slides/Deployment/Pipeline.tsx

```tsx
import React from 'react';

const Pipeline: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Pipeline CI/CD & Sécurité</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Intégration continue et déploiement automatisé via GitHub Actions.
      </p>
      <p className="text-lg">
        Tests automatisés et validation du code avant déploiement en production.
      </p>
      <p className="text-lg">
        Gestion sécurisée des variables d’environnement pour la flexibilité.
      </p>
    </div>
  </div>
);

export default Pipeline;

```

# src/components/slides/Frontend/Demo.tsx

```tsx
import React from 'react';

const Demo: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Démonstration Frontend</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Navigation intuitive via la sidebar et changement de thèmes en direct.
      </p>
      <p className="text-lg">
        Parcours utilisateur fluide mettant en avant les fonctionnalités clés.
      </p>
      <p className="text-lg">
        Interaction dynamique avec les composants pour illustrer l’expérience utilisateur.
      </p>
    </div>
  </div>
);

export default Demo;

```

# src/components/slides/Frontend/index.tsx

```tsx
import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import Overview from './Overview';
import Themes from './Themes';
import UX from './UX';
import Demo from './Demo';

const Frontend: React.FC = () => {
  const slides = [
    <Overview />,
    <Themes />,
    <UX />,
    <Demo />
  ];

  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Frontend</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Frontend;

```

# src/components/slides/Frontend/Overview.tsx

```tsx
import React from 'react';

const Overview: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Architecture & Choix Techniques</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Utilisation de React, TypeScript et Tailwind CSS pour une interface moderne et sécurisée.
      </p>
      <p className="text-lg">
        Organisation modulaire des composants et intégration via Context API.
      </p>
      <p className="text-lg">
        Communication avec le backend via un service API dédié.
      </p>
    </div>
  </div>
);

export default Overview;

```

# src/components/slides/Frontend/Themes.tsx

```tsx
import React from 'react';

const Themes: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Système de Thèmes Adaptatif</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Implémentation d’un système de thèmes avec options clair/sombre et classique/moderne.
      </p>
      <p className="text-lg">
        Permet aux utilisateurs de personnaliser leur expérience selon leurs préférences.
      </p>
      <p className="text-lg">
        Changement de thème dynamique en temps réel.
      </p>
    </div>
  </div>
);

export default Themes;

```

# src/components/slides/Frontend/UX.tsx

```tsx
import React from 'react';

const UX: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Design Responsive & Accessibilité</h3>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">
        Conception mobile-first assurant une adaptation optimale sur tous les appareils.
      </p>
      <p className="text-lg">
        Respect des normes WCAG 2.1 pour une accessibilité maximale.
      </p>
      <p className="text-lg">
        Hiérarchie visuelle claire pour une expérience utilisateur intuitive.
      </p>
    </div>
  </div>
);

export default UX;

```

# src/components/slides/Introduction/index.tsx

```tsx
// src/components/slides/Introduction/index.tsx
import React from 'react';
import SlideTitle from '../../shared/SlideTitle';
import Carousel from '../../shared/Carousel';
import PersonalIntro from './PersonalIntro';
import Problem from './Problem';
import Solution from './Solution';

const Introduction: React.FC = () => {
  const slides = [
    <PersonalIntro />,
    <Problem />,
    <Solution />
  ];
  
  return (
    <div className="h-full flex flex-col">
      <SlideTitle>Introduction</SlideTitle>
      <div className="flex-1">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Introduction;
```

# src/components/slides/Introduction/PersonalIntro.tsx

```tsx
// src/components/slides/Introduction/PersonalIntro.tsx
import React from 'react';

const PersonalIntro: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Parcours personnel</h3>
    <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-2xl">
      <p className="text-lg">• Formation initiale en administration des entreprises</p>
      <p className="text-lg">• Expérience en Cinématographie et Communication</p>
      <p className="text-lg">• Reconversion vers le développement Full Stack</p>
    </div>
  </div>
);

export default PersonalIntro;
```

# src/components/slides/Introduction/Problem.tsx

```tsx
import React from 'react';

const Problem: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Problématique</h3>
    <p className="text-lg mb-6 max-w-2xl">
      La configuration complexe des environnements de développement freine l'apprentissage des compétences fondamentales de programmation :
    </p>
    <div className="space-y-3 text-gray-700 dark:text-gray-300 max-w-xl">
      <p className="text-lg">• 2-3 heures perdues par projet pour la configuration</p>
      <p className="text-lg">• Frustration et démotivation pour les apprenants</p>
      <p className="text-lg">• Problèmes récurrents : conflits de ports, incompatibilités...</p>
    </div>
  </div>
);

export default Problem;

```

# src/components/slides/Introduction/Solution.tsx

```tsx
import React from 'react';

const Solution: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
    <h3 className="text-2xl font-semibold text-indigo-600 mb-8">Solution ChimeraStack</h3>
    <p className="text-lg mb-6 max-w-2xl">
      Un outil d'automatisation des environnements de développement qui a évolué en deux phases :
    </p>
    <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-xl">
      <div>
        <h4 className="font-medium text-xl mb-2">Phase 1 : ChimeraStack CLI</h4>
        <p className="text-lg">
          Outil en ligne de commande développé en Python permettant l'automatisation de la configuration via des templates Docker préconfigurés.
        </p>
      </div>
      <div>
        <h4 className="font-medium text-xl mb-2">Phase 2 : Plateforme Web</h4>
        <p className="text-lg">
          Évolution vers une interface web complète avec système d'authentification, catalogue de templates, et intégration de paiement.
        </p>
      </div>
    </div>
  </div>
);

export default Solution;

```

# src/components/slides/Summary.tsx

```tsx
// src/components/slides/Summary.tsx
import React from 'react';
import SlideTitle from '../shared/SlideTitle';

const Summary: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center">
      <SlideTitle>Sommaire</SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">1. Introduction (3 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Présentation personnelle</li>
            <li>Problématique</li>
            <li>Solution et évolution</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">2. DÉMO CLI (2 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>CLI en action</li>
            <li>Avantages & limites</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">3. Frontend (5 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Architecture & choix techniques</li>
            <li>Système de thèmes</li>
            <li>Responsive & Accessibilité</li>
            <li>DÉMO Frontend</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">4. Backend (5 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>API RESTful & MVC</li>
            <li>Sécurité & Authentification</li>
            <li>Système de paiement</li>
            <li>DÉMO Backend</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">5. Déploiement (3 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Pipeline CI/CD</li>
            <li>Docker & Sécurité</li>
            <li>Monitoring</li>
          </ul>
        </div>
        
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded shadow">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">6. Conclusion (2 min)</h3>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300">
            <li>Compétences acquises</li>
            <li>Difficultés & solutions</li>
            <li>Perspectives d'évolution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;

```

# src/components/slides/Title.tsx

```tsx
// src/components/slides/Title.tsx
import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
        ChimeraStack
      </h1>
      <p className="text-2xl mb-8">
        Plateforme d'automatisation d'environnements de développement
      </p>
      <div className="text-lg text-gray-600 dark:text-gray-300 mt-16">
        <p>Jaouad Bouddehbine</p>
        <p>Certification RNCP38606 - Développeur Full Stack</p>
        <p>IT-Akademy - Avril 2025</p>
      </div>
    </div>
  );
};

export default Title;
```

# src/context/SlideContext.tsx

```tsx
// src/context/SlideContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface SlideContextType {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20; // À ajuster selon le nombre réel de slides

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  return (
    <SlideContext.Provider value={{ currentSlide, totalSlides, nextSlide, prevSlide, goToSlide }}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlides = () => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlides must be used within a SlideProvider');
  }
  return context;
};
```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #root {
  height: 100%;
}

```

# src/index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

# src/logo.svg

This is a file of the type: SVG Image

# src/react-app-env.d.ts

```ts
/// <reference types="react-scripts" />

```

# src/reportWebVitals.ts

```ts
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

```

# src/setupTests.ts

```ts
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'modern-primary': '#4f46e5',
        'modern-secondary': '#1e1e2f',
        'modern-background-dark': '#0f172a',
        'modern-card-dark': '#1e293b',
        'modern-text-dark': '#e2e8f0',
      },
    },
  },
  plugins: [],
}

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}

```

