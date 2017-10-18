import * as types from './actions-types';
import { Articles } from 'api';

export const saveArticle = (article) => {
  return ({
    type: types.SAVE_ARTICLE,
    article: Articles.saveArticle(article),
  });
};

export const getArticles = () => {
  return ({
    type: types.LOAD_ARTICLES,
    articles: Articles.getArticles(),
  });
};

export const getArticleById = (id) => {
  return ({
    type: types.LOAD_ARTICLE,
    article: Articles.getArticle(id),
  });
};

export const paginate = () => {
  return ({
    type: types.PAGINATE,
  });
};
