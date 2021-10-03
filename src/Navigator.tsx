import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactsScreen from './screens/ContactsScreen';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

const Navigator: FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name='Contacts'
                component={ContactsScreen}
                options={{
                    title: 'Contactos',
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