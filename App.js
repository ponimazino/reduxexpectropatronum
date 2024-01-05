import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import CounterComponent from './src/component/CounterComponent';

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;