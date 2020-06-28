import React from 'react';
import NavBar from './NavBar';
import Marvin from './Marvin';
import SocialMedia from './SocialMedia';

const Header: React.FC = () => {
  return (
    <header>
      <NavBar />
      <Marvin />
      <SocialMedia />
    </header>
  )
};

export default Header;