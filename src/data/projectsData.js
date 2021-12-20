import ProjectImage from '../images/profile/profilePhoto.png';
import techsList from './technologiesData';

function getTechs(Array) {
  return Array.map((tech) => {
    return techsList.find((item) => item.name === tech);
  });
}

const projectsData = [
  { name: 'App de Receitas', subTitle:'Aplicativo de receitas', image: ProjectImage, technologies: getTechs(['React', 'RTL', 'Bootstrap', 'CSS', 'Docker' ]), link: 'https://pauloedsg.com/recipes-app' },
  { name: 'TrybeWallet', image: ProjectImage, technologies: getTechs(['JavaScript', 'React', 'RTL', 'CSS', 'Bootstrap', 'Docker' ]) },
  { name: 'Trivia', image: ProjectImage, technologies: getTechs(['JavaScript', 'React', 'RTL', 'CSS', 'Bootstrap', 'Docker']) },
  { name: 'Front-end Online Store', subTitle: 'Loja Online', image: ProjectImage, technologies: getTechs(['React', 'RTL', 'Bootstrap', 'CSS', 'Docker']), link: 'https://pauloedsg.com/recipes-app' },
];

export default projectsData;
