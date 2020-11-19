import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useComments from '../utils/useComments';

const BlogList = () => {
  const [sortBy, setSortBy] = useState('NONE');

  const blogs = useComments(sortBy, 'blog');

  return (
    <div>
      <div>
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
          <article key={blog.id}>
            <div>
              <h3>{blog.title}</h3>
            </div>

            <Link className='btn' to={`/blog/${blog.id}`}>
              Read More
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;
