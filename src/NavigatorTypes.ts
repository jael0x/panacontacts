import IContact from "./IContact";
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type ContactDetailsProp = CompositeNavigationProp<
    StackNavigationProp<ContactStackTypes, 'ContactsScreen'>,
    BottomTabNavigationProp<BottomTabsTypes, 'ContactStack'>
>;

export type ContactStackTypes = {
    ContactsScreen: undefined;
    ContactDetailScreen: IContact;
};

export type FavoritesStackTypes = {
    FavoritesScreen: undefined;
    ContactDetailScreen: IContact;
};

export type BottomTabsTypes = {
    ContactStack: undefined;
    FavoritesStack: undefined;
    Profile: undefined;
};