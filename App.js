import React from 'react';
import {StatusBar} from 'react-native';
import List from './src/pages/List';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <List />
    </>
  );
};

export default App;
