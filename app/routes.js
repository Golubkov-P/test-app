import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from './App';
import BlogPage from './pages/blog-page';
import ArticlePage from './pages/article-page';

const AppRoute = () => {
  return (
    <App>
      <Router>
        <Switch>
          <Route exact path='/' component={BlogPage} />
          <Route path='/article/:id' component={ArticlePage} />
        </Switch>
      </Router>
    </App>
  );
}

export default AppRoute;
