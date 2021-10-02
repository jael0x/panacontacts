import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;