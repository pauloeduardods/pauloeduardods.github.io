import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AsyncImage = (props) => {
  const { src } = props;
  const [loadedSrc, setLoadedSrc] = useState(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (src) {
      const handleLoad = () => {
        setLoadedSrc(src);
      };
      const image = new Image();
      image.addEventListener('load', handleLoad);
      image.src = src;
      return () => {
        image.removeEventListener('load', handleLoad);
      };
    }
  }, [src]);
  if (loadedSrc === src) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img { ...props } />
    );
  }
  return null;
};

AsyncImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default AsyncImage;
