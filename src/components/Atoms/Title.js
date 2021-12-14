import tw from 'tailwind-styled-components';

const PageTitle = tw.h1`
  text-white
  text-lg
  md:text-2xl
  font-bold
  py-4
  pl-
  col-span-5
`;

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
  text-left font-mono text-3xl underline decoration-double decoration-1 mt-4 mb-1
`;

export { PageTitle, SectionTitle, AboutTitle, AboutModalTitle };
