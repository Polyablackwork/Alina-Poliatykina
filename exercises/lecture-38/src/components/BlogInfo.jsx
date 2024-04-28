import React, { useContext } from 'react';
import BlogContext from './BlogContext';

const BlogInfo = () => {
  const blogName = useContext(BlogContext);

  return (
    <div className="px-8">
      <p>Hello!</p>
    </div>
  );
};

export default BlogInfo;