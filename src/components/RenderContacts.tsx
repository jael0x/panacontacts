import React, { FC } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ContactDetailsProp } from '../NavigatorTypes';
import IContact from '../IContact'

const RenderContacts: FC<{
    contacts: Array<IContact>
}> = ({
    contacts
}) => {
        const navigation = useNavigation<ContactDetailsProp>();

        return (
            <View>
                {contacts.map((contact, key) => {
                    return (
                        <TouchableWithoutFeedback key={key} onPress={() => { navigation.navigate('ContactDetailScreen', contact) }}>
                            <View style={styles.container}>
                                <View style={styles.subContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{contact.name.first} {contact.name.last}</Text>
                                        <Text style={{ fontSize: 15, color: '#2B90D8' }}>{contact.cell}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    height: 1,
                                    backgroundColor: '#474B4E',
                                    opacity: 0.2,
                                    alignSelf: 'center',
                                    width: '85%'
                                }} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
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
        marginRight: 15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100
    }
});

export default RenderContacts;