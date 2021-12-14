import tw from 'tailwind-styled-components';

const HeaderIcons = tw.img`
  h-8
  w-auto
  sm:h-10
`;

const ContactIcons = tw.img`
  flex-shrink-0
  h-9
  w-9
  text-indigo-600
`;

const BodyIcons = tw.img`
  h-8 w-auto sm:h-10
`;

export { HeaderIcons, ContactIcons, BodyIcons };
