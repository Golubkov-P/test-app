import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import './form.css';

@cn('form')
class Form extends PureComponent {
  static propTypes = {
    onSubmit: Type.func,
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(evt);
    }
  }

  render(cn) {
    return (
      <form
        className={cn()}
        onSubmit={this.handleSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
