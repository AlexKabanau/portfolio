import amazingTrip001 from '../img/projects/amazingTrip/001.png';
import amazingTrip002 from '../img/projects/amazingTrip/002.png';
import amazingTrip003 from '../img/projects/amazingTrip/003.png';
import amazingTrip004 from '../img/projects/amazingTrip/004.png';
import amazingTrip005 from '../img/projects/amazingTrip/005.png';
import amazingTrip006 from '../img/projects/amazingTrip/006.png';
import amazingTrip007 from '../img/projects/amazingTrip/007.png';
import amazingTrip008 from '../img/projects/amazingTrip/008.png';
import amazingTrip009 from '../img/projects/amazingTrip/009.png';
import amazingTrip010 from '../img/projects/amazingTrip/010.png';
import amazingTrip011 from '../img/projects/amazingTrip/011.png';
import amazingTrip012 from '../img/projects/amazingTrip/012.png';

import nextPizza001 from '../img/projects/nextPizza/001.png';
import nextPizza002 from '../img/projects/nextPizza/002.png';
import nextPizza003 from '../img/projects/nextPizza/003.png';
import nextPizza004 from '../img/projects/nextPizza/004.png';
import nextPizza005 from '../img/projects/nextPizza/005.png';
import nextPizza006 from '../img/projects/nextPizza/006.png';
import nextPizza007 from '../img/projects/nextPizza/007.png';
import nextPizza008 from '../img/projects/nextPizza/008.png';
import nextPizza009 from '../img/projects/nextPizza/009.png';
import nextPizza010 from '../img/projects/nextPizza/010.png';
import nextPizza011 from '../img/projects/nextPizza/011.png';
import nextPizza012 from '../img/projects/nextPizza/012.png';
import nextPizza013 from '../img/projects/nextPizza/013.png';
import nextPizza014 from '../img/projects/nextPizza/014.png';

import nosrtBet001 from '../img/projects/nostrBet/001.png';

import reactPizza001 from '../img/projects/reactPizza/001.png';
import reactPizza002 from '../img/projects/reactPizza/002.png';
import reactPizza003 from '../img/projects/reactPizza/003.png';
import reactPizza004 from '../img/projects/reactPizza/004.png';
import reactPizza005 from '../img/projects/reactPizza/005.png';
import reactPizza006 from '../img/projects/reactPizza/006.png';
import reactPizza007 from '../img/projects/reactPizza/007.png';

import todoList001 from '../img/projects/todoList/001.png';
import todoList002 from '../img/projects/todoList/002.png';
import todoList003 from '../img/projects/todoList/003.png';
import todoList004 from '../img/projects/todoList/004.png';

import wots001 from '../img/projects/wots/001.png';
import wots002 from '../img/projects/wots/002.png';
import wots003 from '../img/projects/wots/003.png';
import wots004 from '../img/projects/wots/004.png';
import wots005 from '../img/projects/wots/005.png';
import wots006 from '../img/projects/wots/006.png';
import wots007 from '../img/projects/wots/007.png';


export const projects = [
  {
    title: 'Next Pizza',
    description: 'A full-fledged online store. A real copy of Dodo Pizza',
    tools_and_technologies: 'NextJS, TypeScript, Prisma, axios, nextAuth, react-use, zustand, hookForm, bycript, qs, react-dadata, hot-toast, react-insta-stories, tailwind, ShadCN, lucidIcon, zod',
    responsibilities: [
      'TailwindCSS, ShadCN, Lucide icons for styles and layout',
      'Full filtering and product search with server rendering and storing parameters in URI',
      'Intersection Observer for category highlighting',
      'Use zustand like a state management',
      'Use Prisma (. One-to-One, One-to-Many, Many-to-One, Many-to-Many) for backend logic, API for ingredients, API for products',
      'Product output, adding products to cart',
      'Authorization and registration using login-password / GitHub / Google',
      'Use resend for Account confirmation via email',
      'Use react-hot-toast for notification',
      'Profile editing',
      'Purchase of products using Yookassa',
      'Product output in a modal window or on a separate page (Parallel Routes)',
      'Sending emails to email upon: registration, order creation and after successful payment',
      'Vercel for storing database data and deployment applications',
      'Use react-insta-stories to render Stories',
    ],
    img: [
      nextPizza001,
      nextPizza002,
      nextPizza003,
      nextPizza004,
      nextPizza005,
      nextPizza006,
      nextPizza007,
      nextPizza008,
      nextPizza009,
      nextPizza010,
      nextPizza011,
      nextPizza012,
      nextPizza013,
      nextPizza014,
    ],
    gitHubLink: 'https://github.com/AlexKabanau/NextPizza',
    deployLink: 'https://next-pizza-coral.vercel.app/'
  },
  {
    title: 'NostrBet',
    description: 'Part of NOSTR network (a decentralization social network), app for creation disputes with bet (e.g. Who will win Champions League 2024), with the ability to create, view, participate or close (croupier role) disputes.',
    tools_and_technologies: 'React, Bootstrap, Lodash, React-bootstrap, React-bottom-scroll-listener, React-dom, React-hook-form, React-icons, React-redux, React-router-dom, React-select, nostr-dev-kit/ndk, RTK, localStorage, nostr-tools, webSocket, Webpack, ESLint, Prettier, Git, HTML, SCSS/ SASS, JavaScript',
    responsibilities: ['Implementing semantic Responsive Web markup using Bootstrap, CSS Modules (Flexbox, CSS Grid)', 'Creating UI Components ( Disputes, DisputeComments, DisputeAnswers, ContacsList, modals), reducers, pages (CreateDet page, Dispute page)', 'Implementing Form validation and submission (React Hook Form, useForm, Controller, React-Select)', 'Implementing functionality for authorized data retrieve using WebSocket and Nostr Dev Kit', 'Implementing data storage by using Redux, localStorage', 'Maintaining code quality participating Code Review and using tools (ESLint, Prettier)'],
    img: [nosrtBet001],
    // cover: nosrtBet001,
    // gitHubLink: 'github.com',
    link: 'https://bet.nostrapps.org/#/login'
  },
  {
    title: 'TodoList (Self-Development)',
    description: 'Simple TodoList, analog of Trello.',
    tools_and_technologies: 'React, RTK, TypeScript, MUI, React-dom, React-redux, Webpack, ESLint, Prettier, Jest, HTML, SCSS, Git',
    responsibilities: [
      'Preparing project structure and configuring tools for development (linters, unit-testing, building)',
      'Covering TypeScript logic with Unit Tests using Jest',
      'Implementing semantic Responsive Web markup using MUI',
      'Integrating RTK for application data management (tasks, todoLists)',
      'Implementation modification tasks/lists (change filter, change status, change title, delete task/ todoLists)',
      // 'Maintaining code quality participating Code Review and using tools (ESLint, Prettier)'
    ],
    img: [
      todoList001,
      todoList002,
      todoList003,
      todoList004,
    ],
    // cover: todoList001,
    gitHubLink: 'https://github.com/AlexKabanau/todolist',
    link: 'https://todolistbyalexkabanau.netlify.app/'
  },
  {
    title: 'Amazing Trip - RollingScopesSchool 2023 Final Project (Education)',
    description: 'SPA for online travelling used 3D graphic, Bootstrap, SpeechRecognition, Map API, authorization, with ability to comment visited country. Work with teammates: Elena Iakovenko, Tatyana Shipulina',
    tools_and_technologies: 'HTML, SCSS, JavaScript, TypeScript, Canvas, Three.js, Audio API, Semantic markup, Webpack, Bootstrap, Nouislider, ESLint, Prettier, Node.js, Express, Axios, Git',
    responsibilities: [
      'Using Three.js for 3D Graphics (creation of 3D objects with comples internal/external textures by applying “layers”)',
      'Implementation of the ability to "manage" an object by using CameraControl;',
      'Implementation of "clicking" on object by using RayCaster',
      'Implementation of a dark/light theme',
      // 'Implementation modification tasks/lists (change filter, change status, change title, delete task/ todoLists)',
      // 'Maintaining code quality participating Code Review and using tools (ESLint, Prettier)'
    ],
    img: [
      amazingTrip001,
      amazingTrip002,
      amazingTrip003,
      amazingTrip004,
      amazingTrip005,
      amazingTrip006,
      amazingTrip007,
      amazingTrip008,
      amazingTrip009,
      amazingTrip010,
      amazingTrip011,
      amazingTrip012,
    ],
    // cover: amazingTrip001,
    gitHubLink: 'https://github.com/AlexKabanau/rsclone',
    link: 'https://alexkabanau.github.io/rsclone/'
  },
  {
    title: 'React Pizza (Self-Development)',
    description: 'SPA Online pizza store ',
    tools_and_technologies: 'React, TypeScript, RTK, Axios + Fetch, React Hooks, Prettier, CSS-Modules / SCSS, React Content Loader, React Pagination, Lodash.Debounce, Code Splitting, React Loadable, useWhyDidYouUpdate, Webpack, ESLint',
    responsibilities: [
      'Integrating RTK for application data management, create action/reducers/slices',
      'Using createAsincThunk for error catching',
      'Implementing application routing and navigation using React Router',
      'Facilitating interaction with backend for data retrieval using Axios and Fetch',
      'Implementing Lazy Loading to improve application performance using React Loadable',
      'Implementation sort, filter, pagination, create sortParamas for URL',
      'Using skeleton for slow speed connection',
      'Implementation of loading optimization by using React.memo and useCallback',
      'Implementation of reRender optimization by using Outlet',
    ],
    img: [
      reactPizza001,
      reactPizza002,
      reactPizza003,
      reactPizza004,
      reactPizza005,
      reactPizza006,
      reactPizza007,
    ],
    // cover: reactPizza001,
    gitHubLink: 'https://github.com/AlexKabanau/ReactPizza/tree/master/react_pizza',
    link: 'https://alexkabanau.github.io/ReactPizza/react_pizza/'
  },
  {
    title: 'Way of the samurai (Self-Development)',
    description: 'SPA, social network with authorization, educational project with a focus on the architecture project BLL <-> UI <-> DAL (for example, creating our own redux, connect)',
    tools_and_technologies: 'React, TypeScript, Axios, Classnames, Formik, react-dom, react-redux, react-router-dom, redux, redux-form, redux-thunk, reselect, Webpack, ESLint, Prettier, Jest',
    responsibilities: [
      'Preparing project structure and configuring tools for development (linters, unit-testing, building)',
      'Implementing application routing and navigation using React Router (main page, user page, dialogs page)',
      'Using css-componets for styles',
      'Using preloader for slow speed connection',
      'Realization of FLUX for inputs and text-fields',
      'Integrating Redux for application data management, create actions/reducers/slices, dispatch',
      'Covering JavaScript logic with Unit Tests using Jest',
      'Implementing Lazy Loading to improve application performance using React Loadable',
      'Using container components for logic layer and pure function-components for render',
      'Using RESTful API for backend request',
      'Implementation sort, filter, pagination, create sortParamas for URL',
      'Implementation of user authorization',
      'Implementation of loading optimization by using React.memo and useCallback',
    ],
    img: [
      wots001,
      wots002,
      wots003,
      wots004,
      wots005,
      wots006,
      wots007,
    ],
    // cover: wots001,
    gitHubLink: 'https://github.com/AlexKabanau/Way-of-the-Samurai',
    link: 'https://alexkabanau.github.io/rsclone/'
  },
]