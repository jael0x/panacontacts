import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigator';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;