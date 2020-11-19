import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IoIoArrowDroprightCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

import useComments from '../utils/useComments';

const BlogList = () => {
  const [sortBy, setSortBy] = useState('NONE');

  const blogs = useComments(sortBy, 'blog');

  return (
    <section className='blog-container'>
      <div className='sort-bar'>
        <label htmlFor='sort'>Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value='NONE'>---None---</option>
          <option value='TIME_DESC'>Most Recent</option>
          <option value='TIME_ASC'>Oldest</option>
        </select>
      </div>
      {blogs.map((blog) => {
        return (
          <article key={blog.id} className='blog'>
            <h4 className='entry-type-name'>BLOG POST</h4>
            <div>
              <h3 className='blog-title'>{blog.title}</h3>
            </div>

            <div className='blog-link-container'>
              <Link to={`/blog/${blog.id}`} className='blog-link'>
                Read More
              </Link>
              <Link to={`/blog/${blog.id}`} className='blog-link'>
                <IoIosArrowDroprightCircle />
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default BlogList;
