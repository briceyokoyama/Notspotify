import React from 'react';
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    props.currentUser ? (
      <div className={'home-nav sign-in'}>
        <span className={'home-nav-el logo'}>
          <Link to="/">
            <svg className={'home-nav-logo'}></svg>
            <div className={'home-nav-title'}>Notspotify</div>
          </Link>
        </span>
        <span className={'home-nav-el right'}>
          <button onClick={props.logout}>Logout</button>
        </span>
      </div>
    ) : (
      <div className={'home-nav'}>
        <span className={'home-nav-el logo'}>
          <Link to="/">
            <div className={'home-nav-logo'}></div>
            <div className={'home-nav-title'}>Notspotify</div>
          </Link>
        </span>
        <span className={'home-nav-el right'}>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log In</Link>
        </span>
      </div>
    )
  )
}