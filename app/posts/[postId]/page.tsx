"use client";

import { useSearchParams, usePathname } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './PostPage.module.css'; // Import the CSS module

// Define an interface to represent a Post
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostPage: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const postId = pathname.split('/').pop();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      try {
        const response: AxiosResponse<Post> = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to fetch post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  if (!post) {
    return <div className={styles.container}>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
