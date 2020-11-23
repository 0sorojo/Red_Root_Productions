import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import fire from '../auth/firebase';
import { useCallback } from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import moment from 'moment';

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
      <article className='blog'>
        <h4 className='entry-type-name'>BLOG POST</h4>

        <div>
          <h3 className='blog-title'>{blog.title}</h3>
        </div>
        <h4 className='entry-type-name'>
          {moment(blog.time).format('MMMM Do, YYYY')}
        </h4>
        <p className='blog-text'>{blog.body}</p>
      </article>
      <CommentList id={id} />
      <CommentForm id={id} />
    </section>
  );
};

export default SingleBlogPost;
