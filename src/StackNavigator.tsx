import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HistoryScreen from './screens/HistoryScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactsScreen from './screens/ContactsScreen';

const Stack = createStackNavigator();

const StackNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Contacts' component={ContactsScreen} />
            <Stack.Screen name='History' component={HistoryScreen} />
            <Stack.Screen name='Favorites' component={FavoritesScreen} />
        </Stack.Navigator>
    )

}

export default StackNavigator;