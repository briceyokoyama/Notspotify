import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className={'main-footer'}>
    <Link to="/">
      <svg className={'home-nav-logo'}></svg>
      <div className={'home-nav-title'}>Notspotify</div>
    </Link>
    <div className={'links'}>
      <a href={'https://github.com/briceyokoyama'}><i class="fa fa-github big-icon" aria-hidden="true"></i></a>
      <a href={'https://www.linkedin.com/in/brice-yokoyama/'}><i class="fab fa-linkedin-in big-icon"></i></a>
    </div>
  </div>
)

export default Footer;