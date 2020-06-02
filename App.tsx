import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './screens/navigator';

import store from './tools/store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </Provider>
  );
}
