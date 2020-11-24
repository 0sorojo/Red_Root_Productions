import React, { useState } from 'react';
import moment from 'moment';
import useComments from '../utils/useComments';

const CommentList = ({ id }) => {
  const [sortBy, setSortBy] = useState('NONE');

  const comments = useComments(sortBy, 'comments');

  const filteredComments = comments.filter((comment) => comment.blogID === id);

  console.log(filteredComments);

  return (
    <div className='comment-container'>
      <h3 className='comment'>Comments</h3>
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
      <section>
        {filteredComments.map((comment) => {
          return (
            <div className='comment-div' key={comment.id}>
              <h3 className='comment-title'>{comment.title}</h3>

              <p className='comment-date'>
                {moment(comment.time).format('MMMM Do, YYYY')}
              </p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CommentList;
