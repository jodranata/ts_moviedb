import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import dataReducer from './reducers/dataReducer';

const middleware = [thunk];

const store = createStore(
  dataReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof dataReducer>;

export default store;
