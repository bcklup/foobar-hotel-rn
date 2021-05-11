import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import useStore from '../../state';
import { ROOM_CARD_MODE } from '../../static/enums';
import RoomsAPI from '../../api/rooms-api';

import globalStyles from '../../assets/css/global-styles';
import styles from './styles';

import RoomCard from '../../components/RoomCard';
import COLORS from '../../static/colors';

const Rooms = ({ navigation }) => {
    // state selectors
    const rooms = useStore(state => state.rooms);
    const setRooms = useStore(state => state.setRooms);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (rooms.length <= 0) {
            fetchRooms();
        }
    }, []);

    /* Funtions */
    const fetchRooms = async () => {
        setLoading(true);
        RoomsAPI.getRooms()
            .then(res => {
                console.log('res', res);
                if (res.status === 200) {
                    setRooms(res.data);
                    setLoading(false);
                }
            })
            .catch(e => {
                setLoading(false);
                Alert('', 'Error encountered. Please try again later.');
                console.error('Error fetching media - ', e);
            });
    };

    /* UI Functions */
    const RoomList = () => {
        return (
            <FlatList
                data={rooms}
                renderItem={({ item, index }) => (
                    <RoomCard
                        key={index}
                        mode={ROOM_CARD_MODE.LIST}
                        room={item}
                        navigation={navigation}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={fetchRooms}
                        progressViewOffset={200}
                    />
                }
                ListEmptyComponent={() =>
                    isLoading ? (
                        <RoomListLoadingState />
                    ) : (
                        <RoomListEmptyState />
                    )
                }
                keyExtractor={(item, index) =>
                    `${item._id}+${index.toString()}`
                }
                contentContainerStyle={styles.roomList}
                ListHeaderComponent={() => <RoomListHeader />}
            />
        );
    };

    const RoomListLoadingState = () => (
        <View style={styles.placeholderContainer}>
            {/* <ActivityIndicator size="large" color={COLORS.primary} /> */}
            <Text style={styles.placeholderText}>Loading</Text>
        </View>
    );

    const RoomListEmptyState = () => (
        <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>
                There are no rooms available at the moment.
            </Text>
        </View>
    );

    const RoomListHeader = () => (
        <View style={styles.mainHeaderContainer}>
            <LinearGradient
                colors={['#5ce2ff', '#33CDFF', '#27c2f5']}
                style={styles.headerContainerStyle}>
                <Text style={styles.headerTextStyle}>Rooms</Text>
            </LinearGradient>
            <LinearGradient
                colors={['rgba(51, 205, 255, 0.4)', 'transparent']}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    margin: -35,
                }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        paddingVertical: 0,
                        paddingHorizontal: 20,
                        marginHorizontal: 20,
                        borderRadius: 15,
                        marginTop: 25,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}></View>
            </LinearGradient>
        </View>
    );

    return (
        <View style={{ ...globalStyles.mainContainer }}>
            <RoomList />
        </View>
    );
};

export default Rooms;
