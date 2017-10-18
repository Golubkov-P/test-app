import React, { PureComponent } from 'react';
import Type from 'prop-types';

import { connect } from 'react-redux';

import ContentWrapper from 'components/content-wrapper';
import Toolbar from './Components/Toolbar';

import { getArticleById } from 'store/reducers/Articles/actions';

import './article-page.css';


class ArticlePage extends PureComponent {
  static propTypes = {
    data: Type.shape({
      id: Type.number,
      title: Type.string,
      description: Type.string,
    }),
    getArticle: Type.func,
    match: Type.shape({
      params: Type.shape({
        id: Type.string,
      })
    })
  }

  componentDidMount() {
    this.props.getArticle(Number(this.paramsId));
  }

  get paramsId() {
    return this.props.match.params.id;
  }

  render() {
    if (this.props.data === null) {
      return null;
    }

    if (this.props.data === undefined) {
      return (
        <div className={'article-page'}>
          <Toolbar />
          <ContentWrapper>
            <p className={'article-page__not-found'}>
              Извините, статья с ID: {this.props.match.params.id} не найдена!
            </p>
          </ContentWrapper>
        </div>
      );
    }

    return (
      <div className="article-page">
        <Toolbar />
        <ContentWrapper>
          <h1 className="article-page__title">
            {this.props.data.title}
          </h1>
          <p className="article-page__text">
            {this.props.data.description}
          </p>
        </ContentWrapper>
      </div>
    );
  }
}

const mapProps = ({ Articles }) => ({
  data: Articles.activeArticle,
});

const mapDispatch = dispatch => ({
  getArticle: id => dispatch(getArticleById(id)),
});

export default connect(mapProps, mapDispatch)(ArticlePage);
