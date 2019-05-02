import React from 'react';
import { Link } from 'react-router-dom'

const Splash = () => (
  <div className={'hero-container'}>
    <div className={'hero-content-container'}>
      <div className={'hero-content-header'}>
        Listen to a few songs.
      </div>
      <div className={'hero-content-extra'}>
        There aren't many to choose from.
      </div>
      <Link to='/signup' className={'hero-button'}>Create an account</Link>
    </div>
  </div>
)

export default Splash;