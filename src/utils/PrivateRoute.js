import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <Route
      {...rest}
      render={() =>
        !!currentUser ? children : <Redirect to={'/adminLogMeIn'} />
      }
    />
  );
};

export default PrivateRoute;
