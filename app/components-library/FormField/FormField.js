import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import './form-field.css';

@cn('form-field')
class FormField extends PureComponent {
  static propTypes = {
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
    alignItems: Type.oneOf(['left', 'center', 'right'])
  }

  static defaultProps = {
    alignItems: 'center',
  }

  render(cn) {
    return (
      <div className={cn({ align: this.props.alignItems })}>
        {this.props.children}
      </div>
    );
  }
}

export default FormField;
