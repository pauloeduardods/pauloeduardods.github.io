import tw from 'tailwind-styled-components';

const SectionTitle = tw.h2`
  text-xl
  font-bold
  text-center
  mb-4
`;

const AboutTitle = tw.span`
  text-left font-mono text-3xl
`;

const AboutModalTitle = tw.h1`
  text-left font-mono text-2xl md:text-3xl underline decoration-double
  decoration-1 mt-4 mb-1 ml-12
`;

const TechTitle = tw.h1`
  text-gray-100
  text-5xl
  underline
  font-bold
  font-mono
  decoration-double
  decoration-2
  underline-offset-4
`;

export { SectionTitle, AboutTitle, AboutModalTitle, TechTitle };
