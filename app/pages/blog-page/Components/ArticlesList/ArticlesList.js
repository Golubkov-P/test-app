import React, { PureComponent } from 'react';
import Type from 'prop-types';

import ContentWrapper from 'components/content-wrapper';
import Article from '../Article';

import './articles-list.css';

class ArticlesList extends PureComponent {
  static propTypes = {
    articles: Type.arrayOf(Type.shape({
      id: Type.number,
      title: Type.string,
      description: Type.string,
    })),
  }

  static defaultProps = {
    articles: [],
  }

  render() {
    if (this.props.articles.length === 0) {
      return (
        <div className="articles-list">
          <ContentWrapper>
            <p className="articles-list__empty-text">
              {'Нет доступных статей'}
            </p>
          </ContentWrapper>
        </div>
      );
    }

    return (
      <div className="articles-list">
        {
          this.props.articles
            .map(article => (
              <Article
                key={article.id}
                data={article}
              />
            ))
        }
      </div>
    );
  }
}

export default ArticlesList;
