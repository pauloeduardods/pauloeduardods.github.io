import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Atoms/Container';
import { BackgroundColor, BackgroundColor2 } from '../Atoms/BackgroundColor';

function ContainerWithBackground(props) {
  const { children, id, color } = props;
  const elementProps = { ...props };
  delete elementProps.children;
  delete elementProps.id;

  const Background = color ? BackgroundColor2 : BackgroundColor;
  return (
    <section id={ id }>
      <Background { ...elementProps }>
        <Container>
          {children}
        </Container>
      </Background>
    </section>
  );
}

ContainerWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  color: PropTypes.bool,
};

ContainerWithBackground.defaultProps = {
  id: '',
  color: false,
};

export default ContainerWithBackground;
