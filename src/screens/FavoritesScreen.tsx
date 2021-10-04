import React, { FC, useEffect, useState } from 'react';
import { View, ScrollView, RefreshControl, NativeScrollEvent } from 'react-native';
import { makeRequest } from '../utils/axiosClient';
import RenderFavoritesContacts from '../components/RenderFavoritesContacts';
import IContact from '../IContact';

const FavoritesScreen: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [contactList, setContactList] = useState<Array<IContact>>([]);
    const [paginationInfo, setPaginationInfo] = useState({
        page: 1,
        results: 1,
    });

    useEffect(() => {
        console.log('FavoritesScreen starting...');
        loadData();
    }, []);

    const loadData = async (page = 1) => {
        setLoading(true);
        let endPointUrl = '?page=' + page + '&results=20';
        makeRequest(endPointUrl)
            .then((contacts) => {
                if (contacts) {
                    setPaginationInfo(contacts.info);
                    if (page === 1)
                        setContactList(contacts.results);
                    else
                        setContactList([...contactList, ...contacts.results]);
                }
                setLoading(false);
            });
    }

    const isCloseToBottom = (nativeEvent: NativeScrollEvent) => {
        const paddingToBottom = 100;
        const { layoutMeasurement, contentOffset, contentSize } = nativeEvent
        const position = layoutMeasurement.height + contentOffset.y;
        const content = contentSize.height - paddingToBottom;
        return position >= content;
    };

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ScrollView
                refreshControl={<RefreshControl
                    refreshing={loading}
                    onRefresh={() => loadData()}
                />}
                onScroll={({ nativeEvent }) => {
                    if (isCloseToBottom(nativeEvent)) {
                        const page = paginationInfo.page + 1;
                        loadData(page);
                    }
                }}
                scrollEventThrottle={400}
            >
                <RenderFavoritesContacts contacts={contactList} />
            </ScrollView>
        </View>
    );
}

export default FavoritesScreen;