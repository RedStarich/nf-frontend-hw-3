"use client";

import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import styles from './PostsPage.module.css'; // Import the CSS module


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      <ul className={styles.postsList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/posts/${post.id}`}>
              <p className={styles.postLink}>
                <h2>{post.title}</h2>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
