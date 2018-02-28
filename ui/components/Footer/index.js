/**
 * Created by danielhollcraft on 4/12/17.
 */
import React, {
  PropTypes,
} from 'react';

import './index.scss'

const Footer = (props) => {
  return (
    <footer className="footer">
    <div className="footer-text">
        Copyright © Daniel Hollcraft {(new Date()).getFullYear()}
    </div>
    </footer>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
