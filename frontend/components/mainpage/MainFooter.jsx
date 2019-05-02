import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className={'main-footer'}>
    <Link to="/">
      <svg className={'home-nav-logo'}></svg>
      <div className={'home-nav-title'}>Notspotify</div>
    </Link>
    Content here
  </div>
)

export default Footer;