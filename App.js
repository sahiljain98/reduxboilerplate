import React from 'react';

import { Provider } from 'react-redux';

import configureStore from './code/redux/store';

// import RootStack from './code/routes';
import RootStack from './screennavigator';


const store = configureStore(); //get store



export default class App extends React.Component {
  render() {
    return this.App()
  }

   App = () => {
    return (
        <Provider store={store}>
          <RootStack />
        </Provider>
    )
}
}