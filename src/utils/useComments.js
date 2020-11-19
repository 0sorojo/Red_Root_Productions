import { useState, useEffect } from 'react';
import fire from '../auth/firebase';

const SORT_OPTION = {
  NONE: { column: 'time', direction: 'desc' },
  TIME_ASC: { column: 'time', direction: 'asc' },
  TIME_DESC: { column: 'time', direction: 'desc' },
};

const useComments = (sortBy, collection) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = fire
      .firestore()
      .collection(collection)
      .orderBy(SORT_OPTION[sortBy].column, SORT_OPTION[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newComment = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setComments(newComment);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return comments;
};

export default useComments;
