import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 pb-16">
      {children}
    </div>
  );
};

export default Layout;