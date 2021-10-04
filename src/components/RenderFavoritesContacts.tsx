import React, { FC, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContactDetailsProp } from '../NavigatorTypes';
import IContact from '../IContact'
import FavoritesScreen from '../screens/FavoritesScreen';

const RenderFavoritesContacts: FC<{
    contacts: Array<IContact>
}> = ({
    contacts
}) => {
        const navigation = useNavigation<ContactDetailsProp>();

        const renderFavorite = (contact: IContact) => {
            return (
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('ContactDetailScreen', contact) }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />
                    </View>
                </TouchableWithoutFeedback >
            )
        }

        const showFavorites = () => {
            let favoritesRendered = contacts.map((contact, key) => {
                if (key % 3 === 0) {
                    let subContacts = contacts.slice(key, key + 3);
                    return (
                        <View style={styles.subContainer}>
                            {
                                subContacts.map((contact, key) => { 
                                    return renderFavorite(contact);
                                })
                            }
                        </View>
                    )
                }
            });
            return favoritesRendered;
        }

        return (
            <View>
                {showFavorites()}
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    subContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 13,
        marginHorizontal: 20
    },
    imageContainer: {
        margin: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100
    }
});

export default RenderFavoritesContacts;