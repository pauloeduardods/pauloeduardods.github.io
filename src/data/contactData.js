import gitHubImage from '../images/contacts/github.webp';
import gmailImage from '../images/contacts/gmail.webp';
import linkedinImage from '../images/contacts/linkedin.webp';
import whatsappImage from '../images/contacts/whatsapp.webp';
import LinkedinIcon from '../icons/linkedin.svg';
import GitHubIcon from '../icons/github.svg';
import pLogo from '../images/logo/p-logo.webp';

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
