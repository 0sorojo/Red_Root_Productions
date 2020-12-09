import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    console.log(blog.title);
  }, [getBlog, id]);

  return (
    <section className='blog-container'>
      <article className='blog'>
        <h4 className='entry-type-name'>BLOG POST</h4>
        <img
          src={blog.fileUrl}
          alt={blog.imageAlt}
          title={blog.imageAlt}
          className='blog-image'
        />
        <div>
          <h3 className='blog-title'>{blog.title}</h3>
        </div>
        <h4 className='entry-type-name'>
          {moment(blog.time).format('MMMM Do, YYYY')}
        </h4>
        <p className='blog-text'>{blog.bodyOne}</p>
        <div className='quote-container'>
          <h2>{blog.quote}</h2>
        </div>
        <p className='blog-text'>{blog.bodyTwo}</p>
      </article>
      <CommentList id={id} />
      <CommentForm id={id} />
    </section>
  );
};

export default SingleBlogPost;
