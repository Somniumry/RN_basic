import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Stacks from './navigation/Stacks';


const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <Stacks />
    </NavigationContainer>
  );
};

export default App;
