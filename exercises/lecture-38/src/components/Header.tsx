import React, { useContext } from 'react';
import BlogContext from './BlogContext';

const Header = () => {
    const blogName = useContext(BlogContext);
  
    return (
        <header className="header text-white bg-gray-800 py-4 px-8">Header</header>
    );
};  

export default Header;