import jsImage from '../images/technologies/JS.png';
import reactImage from '../images/technologies/react.png';
import reduxImage from '../images/technologies/redux.png';
import rtlImage from '../images/technologies/RTL.png';
import htmlImage from '../images/technologies/HTML.png';
import jestImage from '../images/technologies/jest.png';
import cssImage from '../images/technologies/CSS.png';
import bootstrapImage from '../images/technologies/bootstrap.png';
import tailwindImage from '../icons/tailwindcss.svg';
import dockerImage from '../images/technologies/docker.png';
import sqlImage from '../images/technologies/sql.png';

const JavaScript = [
  'Algumas features que conheço:',
  'Destructuring, Spread, Rest, Arrow Functions, Template Literals, HOFs, Modules, Classes, Promises e Async/Await.',
];

const HTML = [
  'Algumas features que conheço:',
  'Estruturas de paginas, HTML Semântico, Forms, Responsividade e Web Components.',
];

const CSS = [
  'Algumas features que conheço:',
  'CSS3, Flexbox, Grid, Styled Components e Responsividade',
];

const Bootstrap = [
  'Algumas coisas que ja fiz com Bootstrap:',
  'Header, Navbar, Carousel, Cards, Modal, Form, Button, ProgressBar, Popover e List'
];

const TailwindCSS = [
  'Algumas coisas que ja fiz com TailwindCSS:',
  'Header, Navbar, Carousel, Cards, Modal, Form, Button, Popover, List e utilizar a biblioteca headlessUI'
];

const React = [
  'Algumas features que conheço:',
  'Class e Functional Components, Props, Router, State, Ciclo de vida, Context API, useContext, Hooks, useEffect, useMemo e useState'
];

const Redux = [
  'Algumas features que conheço:',
  'Store, reducer, provider, mapStateToProps, mapDispatchToProps, useDispatch, useReducer e testes'
];

const Jest = [
  'Algumas features que conheço:',
  'Expect e matchers, testes assincronos, testes unitarios, e testes de regressão'
];

const RTL = [
  'Algumas features que conheço:',
  'Mocks, Jest, ReactRouter e Redux'
];

const Docker = [
  'Algumas coisas que ja fiz com Docker e Docker-compose:',
  'Criar e executar containers, criar e executar imagens, build e deploy automático no AWS EC2 (CD)'
];

const Mysql = [
  'Algumas features que conheço:',
  'SELECT, LIMIT, OFFSET, ORDER BY, WHERE, LIKE, IN, BETWEEN, INSERT, UPDATE, DELETE, GROUP BY, HAVING, JOINs, etc...'
];

const techsList = [
  { name: 'JavaScript', img: jsImage, description: JavaScript },
  { name: 'HTML', img: htmlImage, description: HTML },
  { name: 'CSS', img: cssImage, description: CSS },
  { name: 'Bootstrap', img: bootstrapImage, description: Bootstrap },
  { name: 'TailwindCSS', img: tailwindImage, description: TailwindCSS },
  { name: 'React', img: reactImage, description: React },
  { name: 'Redux', img: reduxImage, description: Redux },
  { name: 'Jest', img: jestImage, description: Jest },
  { name: 'RTL', img: rtlImage, description: RTL },
  { name: 'Docker', img: dockerImage, description: Docker },
  { name: 'SQL', img: sqlImage, description: Mysql },
];

export default techsList;
