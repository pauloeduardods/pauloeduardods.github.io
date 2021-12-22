import React from 'react';
import PropTypes from 'prop-types';
import ContainerWithBackground from '../Molecules/ContainerWithBackground';

function Footer(props) {
  const { style, className } = props;
  return (
    <footer style={ style } className={ className }>
      <ContainerWithBackground id="footer">
        <div className="flex md:justify-between relative flex-col md:flex-row">
          <div
            className="md:h-20 w-full flex flex-col justify-center font-mono
            text-xs mb-3 mt-6 md:mb-6 md:mt-0"
          >
            <p>
              Feito por
              {' '}
              <a
                href="https://github.com/pauloeduardods"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pauloeduardods
              </a>
              {' '}
            </p>
            <p>
              Utilizando ReactJS, TailwindCSS, Docker e AWS EC2
            </p>
          </div>
          <div
            className="md:h-20 w-full flex flex-row justify-start md:justify-end font-mono
            text-xs mb-12 md:mb-6"
          >
            <div className="w-20 flex flex-col justify-center">
              <p>Email:</p>
              <p>Whatsapp:</p>
            </div>
            <div
              className="w-[138px] flex flex-col justify-center text-blue-200
              font-semibold"
            >
              <p>
                pauloedsg@gmail.com
              </p>
              <p>
                (19) 99454-5364
              </p>
            </div>
          </div>
          <div className="bottom-2 text-center absolute w-full">
            <hr className="border-slate-500 mb-2" />
            <p className="text-xs font-semibold">
              © Copyright 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </ContainerWithBackground>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

Footer.defaultProps = {
  className: '',
  style: {},
};

export default Footer;
