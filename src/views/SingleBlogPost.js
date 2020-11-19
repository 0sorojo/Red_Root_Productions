import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import fire from '../auth/firebase';
import { useCallback } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const getBlog = useCallback(() => {
    setBlog({});
    const blogCollection = fire.firestore().collection('blog').doc(id);
    blogCollection
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setBlog(doc.data());
        } else {
          console.log('no such document');
        }
      })
      .catch(function (error) {
        console.log('error getting document:', error);
      });
  }, [id]);

  useEffect(() => {
    getBlog();
    console.log(id);
  }, [getBlog]);

  return (
    <section>
      <article>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
      </article>
      <CommentList id={id} />
      <CommentForm id={id} />
    </section>
  );
};

export default SingleBlogPost;
