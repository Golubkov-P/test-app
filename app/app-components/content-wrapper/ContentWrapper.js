import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import './content-wrapper.css';

@cn('content')
class ContentWrapper extends PureComponent {
  static propTypes = {
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
  };

  render(cn) {
    return (
      <section className={cn()}>
        {this.props.children}
      </section>
    );
  }
}

export default ContentWrapper;
