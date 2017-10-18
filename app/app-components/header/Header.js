import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import ContentWrapper from '../content-wrapper';

import './header.css';

@cn('header')
class Header extends PureComponent {

  render(cn) {
    return (
      <header className={cn()}>
        <ContentWrapper>
          {'My skills test'}
        </ContentWrapper>
      </header>
    );
  }
}

export default Header;
