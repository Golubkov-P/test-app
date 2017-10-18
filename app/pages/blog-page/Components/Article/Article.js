import React, { PureComponent } from 'react';
import Type from 'prop-types';

import cn from 'cn-decorator';

import ContentWrapper from 'components/content-wrapper';
import { Link } from 'react-router-dom';

import './article.css';

@cn('article')
class Article extends PureComponent {
  static propTypes = {
    data: Type.shape({
      id: Type.id,
      title: Type.string,
      description: Type.string,
      prewiew_text: Type.string,
    })
  }

  render(cn) {
    return (
      <div className={cn('wrapper')}>
        <ContentWrapper>
          <div className={cn()}>
            <Link
              className={cn('title')}
              to={`/article/${this.props.data.id}`}
            >
              {this.props.data.title}
            </Link>
            <p className={cn('description')}>
              {this.props.data.prewiew_text}
            </p>
          </div>
        </ContentWrapper>
      </div>
    );
  }
}

export default Article;
