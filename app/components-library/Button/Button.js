import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import './button.css';

@cn('button')
class Button extends PureComponent {
  static propTypes = {
    onClick: Type.func,
    type: Type.oneOf(['button', 'submit']),
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
  }

  static defaultProps = {
    type: 'button',
  }

  handleClick = (evt) => {
    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  }

  render(cn) {
    return (
      <button
        type={this.props.type}
        onClick={this.handleClick}
        className={cn()}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
