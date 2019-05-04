import React from 'react';
import HomeNavBarContainer from "./navbar/HomeNavBarContainer";
import Splash from './Splash';
import MainFooter from './MainFooter';

const MainPage = () => {
  return (
    <div className='main-page'>
      <HomeNavBarContainer />
      <Splash />
      <MainFooter />
    </div>
  )
}

export default MainPage;