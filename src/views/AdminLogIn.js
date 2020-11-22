import React, { useState, useContext, useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../auth/authContext';
import fire from '../auth/firebase';

const AdminLogIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/admin');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='admin' />;
  }

  return (
    <section>
      <h3>This is where the Admin Logs in</h3>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          name='email'
          type='email'
          autoFocus
          required
          placeholder='email'
        />
        <label>Password:</label>
        <input
          name='password'
          type='password'
          autoFocus
          required
          placeholder='password'
        />
        <button type='submit'>Sign In</button>
      </form>
    </section>
  );
};

export default withRouter(AdminLogIn);
