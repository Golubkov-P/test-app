import * as types from './actions-types';

const PAGINATE_SIZE = 3;

const initialState = {
  articles: [],
  activeArticle: null,
  visibleArticlesCount: 3,
  maxVisibleCount: 3
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(types.SAVE_ARTICLE): {
      return {
        ...state,
        articles: [action.article, ...state.articles],
        visibleArticlesCount: state.visibleArticlesCount + 1,
        maxVisibleCount: state.maxVisibleCount + 1,
      };
    }

    case(types.LOAD_ARTICLES): {
      return {
        ...state,
        articles: action.articles,
        maxVisibleCount: action.articles.length,
      };
    }

    case(types.LOAD_ARTICLE): {
      return {
        ...state,
        activeArticle: action.article,
      };
    }

    case(types.PAGINATE): {
      return {
        ...state,
        visibleArticlesCount: state.visibleArticlesCount + PAGINATE_SIZE,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
