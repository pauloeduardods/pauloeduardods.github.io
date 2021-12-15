import tw from 'tailwind-styled-components';

const TextWhite = tw.span`
  text-base
  font-medium
  text-gray-200
  hover:text-white
`;

const BlackText = tw.span`
  text-base
  font-medium
  text-gray-500
  hover:text-gray-900
`;

const TextDescription = tw.span`
  mt-1 text-sm text-gray-400
`;

const AboutDescription = tw.p`
  py-1 text-lg indent-3 subpixel-antialiased font-sans
`;

const AboutModalDescription = tw.p`
  text-base md:text-lg py-1 indent-2 subpixel-antialiased font-sans
`;
// colocar a letra menor quando diminuir a tela

export { TextWhite, BlackText, TextDescription, AboutDescription, AboutModalDescription };
