import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Header from './Header';
import PostMain from './PostMain';
import PostContext from './PostContext';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/Polyablackwork/db/posts/1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching data");
      }
    }

    fetchData();
  }, []);

  if (!post) return null;

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;