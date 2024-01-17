import { configureStore } from '@redux.js/tookit';
import reducers from '../client/reducers/index.js';

const store = configureStore({
  reducers: reducers,
});

export default store;
