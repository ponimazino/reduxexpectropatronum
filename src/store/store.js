import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  // This line enables the Redux DevTools Extension, if it's installed in the browser.
  // If not present, you can omit this argument or use other middleware/enhancers.
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

export default store;