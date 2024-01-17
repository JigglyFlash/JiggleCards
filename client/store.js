import { configureStore } from '@reduxjs/toolkit';
import reducers from './index.js'

const store = configureStore({
    reducer: reducers,
});

export default store;