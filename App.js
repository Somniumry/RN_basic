import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Stacks from './navigation/Stacks';
import Root from './navigation/Root';


const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      {/* <Stacks /> */}
      <Root />
    </NavigationContainer>
  );
};

export default App;
