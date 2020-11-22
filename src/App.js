import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import AboutLawrence from './views/AboutLawrence';
import AboutThisSite from './views/AboutThisSite';
import Solutions from './views/Solutions';
import Benefits from './views/Benefits';
import ContactForm from './views/ContactForm';
import SingleBlogPost from './views/SingleBlogPost';
import Footer from './components/Footer';
import Error from './views/Error';
import ControlPanel from './views/ControlPanel';
import AdminLogIn from './views/AdminLogIn';

// import admin functions

// router wrapping

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/aboutlawrence'>
          <AboutLawrence />
        </Route>

        <Route path='/aboutsite'>
          <AboutThisSite />
        </Route>

        <Route path='/solutions'>
          <Solutions />
        </Route>

        <Route path='/benefits'>
          <Benefits />
        </Route>

        <Route exact path='/contact'>
          <ContactForm />
        </Route>

        <Route path='/blog/:id'>
          <SingleBlogPost />
        </Route>

        <PrivateRoute exact path='/admin'>
          <ControlPanel />
        </PrivateRoute>

        <Route exact path='/adminLogMeIn'>
          <AdminLogIn />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
