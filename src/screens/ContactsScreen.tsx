import React, { FC, useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { makeRequest } from '../utils/axiosClient';
import RenderContacts, { IContact } from '../components/RenderContacts';

const ContactsScreen: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [contactList, setContactList] = useState<Array<IContact>>([]);
    const [paginationInfo, setPaginationInfo] = useState({
        page: 1,
        results: 1,
    });

    useEffect(() => {
        console.log('ContactScreen starting...');
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        let endPointUrl = `?page=1&results=20`;
        makeRequest(endPointUrl)
            .then((contacts) => {
                setLoading(false);
                if (contacts) {
                    setPaginationInfo(contacts.info);
                    setContactList(contacts.results);
                }
            });
    }


    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ScrollView
                refreshControl={<RefreshControl
                    refreshing={loading}
                    onRefresh={() => loadData()}
                />}
            >
                <RenderContacts contacts={contactList} />
            </ScrollView>
        </View>
    );
}

export default ContactsScreen;