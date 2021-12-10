import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/index';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>

      </Provider>
    )
  }
}
export default App;
