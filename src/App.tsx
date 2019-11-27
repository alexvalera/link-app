import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.scss';
import Profile from '@components/Profile';
import GlobalNav from '@components/GlobalNav';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line
  (window as any)['__REDUX_DEVTOOLS_EXTENSION__'] && (window as any)['__REDUX_DEVTOOLS_EXTENSION__'](),
);

// eslint-disable-next-line
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalNav />
        <Profile />
      </div>
    </Provider>
  );
}

export default App;
