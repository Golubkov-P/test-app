import React, { PureComponent } from 'react';
import Type from 'prop-types';

import { connect } from 'react-redux';
import cn from 'cn-decorator';

import AddForm from './Components/AddForm';
import ArticlesList from './Components/ArticlesList';
import Button from 'library/Button';
import ContentWrapper from 'components/content-wrapper';

import { saveArticle, getArticles, paginate } from 'store/reducers/Articles/actions';

import './blog-page.css';

@cn('paginate-button')
class PaginateButton extends Button {}

class BlogPage extends PureComponent {
  static propTypes = {
    articles: Type.arrayOf(Type.shape({
      id: Type.number,
      title: Type.string,
      description: Type.string,
    })),
    savePost: Type.func,
    loadArticles: Type.func,
    paginateArticles: Type.func,
    maxVisibleCount: Type.number,
    visibleArticlesCount: Type.number,
  }

  componentDidMount() {
    this.props.loadArticles();
  }

  handleCreatePost = (data) => {
    this.props.savePost(data);
  }

  handlePaginate = () => {
    this.props.paginateArticles();
  }

  render() {
    return (
      <div className="page-wrapper">
        <AddForm
          onSubmit={this.handleCreatePost}
        />
        <ArticlesList
          articles={this.props.articles.slice(0, this.props.visibleArticlesCount)}
        />
        {
          this.props.visibleArticlesCount < this.props.maxVisibleCount
          &&
          <ContentWrapper>
            <PaginateButton
              onClick={this.handlePaginate}
            >
              Показать ещё
            </PaginateButton>
          </ContentWrapper>
        }
      </div>
    );
  }
}

const mapProps = ({ Articles }) => ({
  articles: Articles.articles,
  visibleArticlesCount: Articles.visibleArticlesCount,
  maxVisibleCount: Articles.maxVisibleCount,
});

const mapDispatch = dispatch => ({
  savePost: (data) => dispatch(saveArticle(data)),
  loadArticles: () => dispatch(getArticles()),
  paginateArticles: () => dispatch(paginate()),
});

export default connect(mapProps, mapDispatch)(BlogPage);
