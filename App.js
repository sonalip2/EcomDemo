/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Navigator from './src/navigation';
import {Provider} from 'react-redux';
import Store from './store';
import {setTopLevelNavigator} from './src/utils/navigationService';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />
      </Provider>
    );
  }
}

export default App;
