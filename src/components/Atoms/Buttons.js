import tw from 'tailwind-styled-components';

const MoreButton = tw.button`
  group
  relative
  w-60
  flex
  justify-center
  py-2
  px-4
  border
  border-transparent
  text-sm
  font-medium
  rounded-md
  text-white
  bg-indigo-600
  hover:bg-indigo-700
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
`;

const CarouselButton = tw.button`
  group
  mx-3
  relative
  w-20
  flex
  justify-center
  py-2
  px-4
  border
  border-transparent
  text-sm
  font-medium
  rounded-md
  text-white
  bg-rose-600
  hover:bg-rose-700
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
`;

export { MoreButton, CarouselButton };
