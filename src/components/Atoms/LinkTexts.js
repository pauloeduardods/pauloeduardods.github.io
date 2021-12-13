import tw from 'tailwind-styled-components';

const WhiteLinks = tw.span`
  text-base
  font-medium
  text-gray-200
  hover:text-white
`;

const BlackLinks = tw.span`
  text-base
  font-medium
  text-gray-500
  hover:text-gray-900
`;

export { WhiteLinks, BlackLinks };
