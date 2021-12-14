import gitHubImage from '../images/github.png';
import gmailImage from '../images/gmail.png';
import linkedinImage from '../images/linkedin.png';
import whatsappImage from '../images/whatsapp.png';
import LinkedinIcon from '../icons/linkedin.svg';
import GitHubIcon from '../icons/github.svg';
import pLogo from '../images/p-logo.png';

const linkedinLink = 'https://www.linkedin.com/in/pauloeduardods/';
const ghLink = 'https://github.com/pauloeduardods';

const contacts = [
  {
    name: 'Email',
    description: 'pauloedsg@gmail.com',
    href: 'mailto:pauloedsg@gmail.com',
    icon: gmailImage,
  },
  {
    name: 'Linkedin',
    description: 'pauloeduardods',
    href: linkedinLink,
    icon: linkedinImage,
  },
  {
    name: 'GitHub',
    description: 'pauloeduardods',
    href: ghLink,
    icon: gitHubImage,
  },
  {
    name: 'WhatsApp',
    description: '+55 (19) 9 99454-5364',
    href: 'https://wa.me/5519994545364',
    icon: whatsappImage,
  },
];

export {
  contacts,
  linkedinLink,
  ghLink,
  LinkedinIcon,
  GitHubIcon,
  pLogo,
  gitHubImage,
  gmailImage,
  linkedinImage,
  whatsappImage,
};
