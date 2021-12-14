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

export { TextWhite, BlackText, TextDescription, AboutDescription };
