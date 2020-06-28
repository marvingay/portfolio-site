import React from 'react';
import NavBar from './NavBar';
import Marvin from './Marvin';

const Header: React.FC = () => {
  return (
    <header>
      <NavBar />
      <Marvin />
    </header>
  )
};

export default Header;