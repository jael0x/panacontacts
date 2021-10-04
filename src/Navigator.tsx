import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ContactsScreen from './screens/ContactsScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import { ContactStackTypes, BottomTabsTypes, FavoritesStackTypes } from './NavigatorTypes';

const BottomTab = createBottomTabNavigator<BottomTabsTypes>();
const StackForContact = createStackNavigator<ContactStackTypes>();
const StackForFavorites = createStackNavigator<FavoritesStackTypes>();

const ContactStack: FC = () => {
    return (
        <StackForContact.Navigator>
            <StackForContact.Screen name='ContactsScreen' component={ContactsScreen} options={{ title: 'Contactos' }} />
            <StackForContact.Screen name='ContactDetailScreen' component={ContactDetailScreen} options={{ title: 'Contacto' }}/>
        </StackForContact.Navigator>
    );
}

const FavoritesStack: FC = () => {
    return (
        <StackForFavorites.Navigator>
            <StackForFavorites.Screen name='FavoritesScreen' component={FavoritesScreen} options={{ title: 'Favoritos' }} />
            <StackForFavorites.Screen name='ContactDetailScreen' component={ContactDetailScreen} options={{ title: 'Contacto' }}/>
        </StackForFavorites.Navigator>
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
                name='FavoritesStack'
                component={FavoritesStack}
                options={{
                    title: 'Favoritos',
                    headerShown: false,
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