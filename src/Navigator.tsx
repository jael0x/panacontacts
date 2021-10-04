import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactsScreen from './screens/ContactsScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import { ContactStackTypes, BottomTabsTypes } from './NavigatorTypes';

const BottomTab = createBottomTabNavigator<BottomTabsTypes>();
const Stack = createStackNavigator<ContactStackTypes>();

const ContactStack: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='ContactsScreen' component={ContactsScreen} options={{ title: 'Contactos' }} />
            <Stack.Screen name='ContactDetailScreen' component={ContactDetailScreen} options={{ title: 'Contacto' }}/>
        </Stack.Navigator>
    );
}

const Navigator: FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name='ContactStack'
                component={ContactStack}
                options={{
                    title: 'Contactos',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name='format-list-bulleted' size={24} color={color} />
                }}
            />
            <BottomTab.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <Icon name='star' size={24} color={color} />
                }}
            />
            <BottomTab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Icon name='account' size={24} color={color} />
                }}
            />
        </BottomTab.Navigator>
    )

}

export default Navigator;