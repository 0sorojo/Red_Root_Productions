import React, { useState } from 'react';

import useComments from '../utils/useComments';

const CommentList = ({ id }) => {
  const [sortBy, setSortBy] = useState('NONE');

  const comments = useComments(sortBy, 'comments');

  const filteredComments = comments.filter((comment) => comment.blogID === id);

  console.log(filteredComments);

  return (
    <div>
      <h2>Comments</h2>
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
      <ul>
        {filteredComments.map((comment) => {
          return (
            <li key={comment.id}>
              <div>
                <h3>{comment.title}</h3>
                <p>{comment.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
