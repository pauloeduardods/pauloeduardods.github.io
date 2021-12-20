import ProjectImage from '../images/profile/profilePhoto.png';
import techsList from './technologiesData';

function getTechs(Array) {
  return Array.map((tech) => {
    return techsList.find((item) => item.name === tech);
  });
}

const projectsData = [
  { name: 'App de Receitas', image: ProjectImage, technologies: getTechs(['JavaScript', 'React', 'RTL', 'CSS', 'Bootstrap', 'Docker', 'TailwindCSS', 'Redux', 'HTML', 'Jest' ]) },
  { name: 'TrybeWallet', image: ProjectImage, technologies: getTechs(['JavaScript', 'React', 'RTL', 'CSS', 'Bootstrap', 'Docker' ]) },
  { name: 'Trivia', image: ProjectImage, technologies: getTechs(['JavaScript', 'React', 'RTL', 'CSS', 'Bootstrap', 'Docker']) },
];

export default projectsData;
