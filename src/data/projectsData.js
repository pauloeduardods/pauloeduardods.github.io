import techsList from './technologiesData';
import RecipesAppImage from '../images/projects/Recipes-app.webp';
import TriviaImage from '../images/projects/Trivia.webp';
import TrybeWalletImage from '../images/projects/TrybeWallet.webp';
import StarWarsImage from '../images/projects/StarWars.webp';
import OnlineStoreImage from '../images/projects/OnlineStore.webp';
import TrybeTunesImage from '../images/projects/TrybeTunes.webp';

function getTechs(Array) { // JavaScript HTML CSS Bootstrap TailwindCSS React Redux Jest RTL Docker SQL AWS
  return Array.map((tech) => {
    return techsList.find((item) => item.name === tech);
  });
}

const projectsData = [
  { name: 'App de Receitas', subTitle: 'Aplicativo de receitas', image: RecipesAppImage, technologies: getTechs(['React', 'RTL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Docker' ]), link: 'https://pauloedsg.com/recipes-app' },
  { name: 'TrybeWallet', subTitle: 'Gerenciamento de despesas', image: TrybeWalletImage, technologies: getTechs(['React', 'JavaScript', 'HTML', 'TailwindCSS', 'Redux']), link: 'https://pauloeduardods.github.io/TrybeWallet/' },
  { name: 'Trivia', subTitle: 'Jogo de perguntas e respostas', image: TriviaImage, technologies: getTechs(['React', 'JavaScript', 'HTML', 'TailwindCSS', 'Redux']), link: 'https://pauloeduardods.github.io/Trivia-React-Redux/' },
  { name: 'Front-end Online Store', subTitle: 'Loja Online', image: OnlineStoreImage, technologies: getTechs(['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']), link: 'https://pauloeduardods.github.io/frontend-online-store/' },
  { name: 'StarWars', subTitle: 'Filtro de planetas do StarWars', image: StarWarsImage, technologies: getTechs(['React', 'JavaScript', 'HTML', 'TailwindCSS']), link: 'https://pauloeduardods.github.io/StarwarsPlanetsSearch/' },
  {
    name: 'TrybeTunes', subTitle: '"Spotify"', image: TrybeTunesImage, technologies: getTechs(['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']), link: 'https://pauloeduardods.github.io/TrybeTunes/' },
];

export default projectsData;
