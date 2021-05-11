import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../assets/css/global-styles';
// import { useFocusEffect } from '@react-navigation/native';

import useStore from '../../state';
import COLORS from '../../static/colors';
import { ROOM_CARD_MODE } from '../../static/enums';
import styles from './styles';

import RoomCard from '../../components/RoomCard';

const Rooms = ({ navigation }) => {
    // state selectors
    const rooms = useStore(state => state.rooms);

    /* UI Functions */

    const RoomList = () => {
        return (
            <FlatList
                data={rooms}
                renderItem={({ item, index }) => (
                    <RoomCard
                        key={index}
                        mode={ROOM_CARD_MODE.LIST}
                        data={item}
                        navigation={navigation}
                    />
                )}
                ListEmptyComponent={() => <RoomListEmptyState />}
                keyExtractor={(item, index) =>
                    `${item._id}+${index.toString()}`
                }
                contentContainerStyle={styles.roomList}
                ListHeaderComponent={() => <RoomListHeader />}
            />
        );
    };

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
