import project01 from '../img/projects/01.jpg';
import project01cover from '../img/projects/01-big.jpg';
import project02 from '../img/projects/02.jpg';
import project02cover from '../img/projects/02-big.jpg';
import project03 from '../img/projects/03.jpg';
import project03cover from '../img/projects/03-big.jpg';
import project04 from '../img/projects/04.jpg';
import project04cover from '../img/projects/04-big.jpg';
import project05 from '../img/projects/05.jpg';
import project05cover from '../img/projects/05-big.jpg';
import project06 from '../img/projects/06.jpg';
import project06cover from '../img/projects/06-big.jpg';
//TODO: add images


export const projects = [
  {//TODO: add info
    title: 'Next Pizza',
    skills: 'Any skills1',
    img: project01,
    cover: project01cover,
    gitHubLink: 'github.com',
  },
  {
    title: 'NostrBet',
    description: 'Part of NOSTR network (a decentralization social network), app for creation disputes with bet (e.g. Who will win Champions League 2024), with the ability to create, view, participate or close (croupier role) disputes.',
    tools_and_technologies: 'React, Bootstrap, Lodash, React-bootstrap, React-bottom-scroll-listener, React-dom, React-hook-form, React-icons, React-redux, React-router-dom, React-select, nostr-dev-kit/ndk, RTK, localStorage, nostr-tools, webSocket, Webpack, ESLint, Prettier, Git, HTML, SCSS/ SASS, JavaScript',
    responsibilities: ['Implementing semantic Responsive Web markup using Bootstrap, CSS Modules (Flexbox, CSS Grid)', 'Creating UI Components ( Disputes, DisputeComments, DisputeAnswers, ContacsList, modals), reducers, pages (CreateDet page, Dispute page)', 'Implementing Form validation and submission (React Hook Form, useForm, Controller, React-Select)', 'Implementing functionality for authorized data retrieve using WebSocket and Nostr Dev Kit', 'Implementing data storage by using Redux, localStorage', 'Maintaining code quality participating Code Review and using tools (ESLint, Prettier)'],
    img: project02,
    cover: project02cover,
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
    img: project02,
    cover: project02cover,
    gitHubLink: 'https://github.com/AlexKabanau/todolist',
    link: 'https://bet.nostrapps.org/#/login'//TODO: fix link
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
    img: project02,
    cover: project02cover,
    gitHubLink: 'https://github.com/AlexKabanau/rsclone',
    link: 'https://bet.nostrapps.org/#/login'//TODO: fix link
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
    img: project02,
    cover: project02cover,
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
    img: project02,
    cover: project02cover,
    gitHubLink: 'https://github.com/AlexKabanau/Way-of-the-Samurai',
    link: 'https://bet.nostrapps.org/#/login'//TODO: fix link
  },
]