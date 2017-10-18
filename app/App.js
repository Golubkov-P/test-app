import React, { PureComponent } from 'react';
import Type from 'prop-types';

import Header from './app-components/header';

import './app.css';

class App extends PureComponent {
  static propTypes = {
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
  };

  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
