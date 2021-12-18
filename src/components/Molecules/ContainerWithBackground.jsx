import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Atoms/Container';
import { BackgroundColor } from '../Atoms/BackgroundColor';

function ContainerWithBackground(props) {
  const { children, id } = props;
  const elementProps = { ...props };
  delete elementProps.children;
  delete elementProps.id;
  return (
    <section id={ id }>
      <BackgroundColor { ...elementProps }>
        <Container>
          {children}
        </Container>
      </BackgroundColor>
    </section>
  );
}

ContainerWithBackground.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

ContainerWithBackground.defaultProps = {
  id: '',
};

export default ContainerWithBackground;
