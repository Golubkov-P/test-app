const STORE_NAME = 'articles';
const STORE_SCHEMA = {
  articles: [],
  lastItemId: 0,
};
const MAX_PREVIEW_TEXT_LENGTH = 200;

export const Articles = {
  createStore() {
    this.saveStore(STORE_SCHEMA);

    return STORE_SCHEMA;
  },
  getStore() {
    const store = localStorage.getItem(STORE_NAME);

    if (store) {
      return JSON.parse(store);
    }

    return this.createStore();
  },
  saveStore(data) {
    localStorage.setItem(STORE_NAME, JSON.stringify(data));
  },
  getArticles() {
    return this.getStore().articles;
  },
  getArticle(id) {
    return this.getStore().articles
      .filter(article => article.id === id)[0];
  },
  saveArticle(article) {
    const store = this.getStore();
    const articleForSave = {
      ...article,
      id: store.lastItemId,
      prewiew_text: article.description.slice(0, MAX_PREVIEW_TEXT_LENGTH),
    };

    store.lastItemId = store.lastItemId + 1;
    store.articles.unshift(articleForSave);
    
    this.saveStore(store);

    return articleForSave;
  }
} 
