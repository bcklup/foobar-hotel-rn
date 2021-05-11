import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../../assets/css/global-styles';
// import { useFocusEffect } from '@react-navigation/native';

import useStore from '../../state';
import COLORS from '../../static/colors';
import { ROOM_CARD_MODE, SCENE } from '../../static/enums';
import styles from './styles';

import RoomCard from '../../components/RoomCard';

const Rooms = ({ navigation }) => {
    /* Props and State */
    // const [showModal, toggleShowModal] = useState(false);
    const [refreshing, toggleRefreshing] = useState(false);

    // state selectors
    const rooms = useStore(state => state.rooms);

    // useEffect(() => {
    //     if (allJobs.length <= 0) {
    //         dispatch(actions.fetchJobs());
    //     }
    //     toggleRefreshing(false);
    // }, [dispatch]);

    // useFocusEffect(
    //     React.useCallback(() => {
    //         dispatch(actions.fetchJobs());
    //         // do stuff when focused
    //         return () => {
    //             // do stuff when blurred
    //         };
    //     }, []),
    // );

    /* Functions */
    const fetchRooms = () => {
        toggleRefreshing(true);
        // dispatch(actions.fetchJobs());
        toggleRefreshing(false);
    };

    // const openJob = item => {
    //     dispatch(actions.setCurrentlySelectedJobItem(item));
    //     navigation.navigate(SCENE.JOB, { job: item });
    // };

    // const openSettings = () => {
    //     navigation.navigate(SCENE.SETTINGS);
    // };

    // const prepareJobs = jobsList => {
    //     const newJobsList = cloneDeep(jobsList);
    //     const allMedia = {
    //         title: 'All Media',
    //         jobPrimaryMediaUrl: getRecentJobThumbnail(), // TODO: Temporary thumbnailing
    //         allMedia: true,
    //     };
    //     const addJob = {
    //         title: 'Add Job',
    //         jobPrimaryMediaUrl: '',
    //         addJob: true,
    //     };
    //     if (newJobsList && newJobsList.length > 0) {
    //         newJobsList.unshift(addJob);
    //         newJobsList.unshift(allMedia);
    //         return newJobsList;
    //     }
    //     return [allMedia, addJob];
    // };

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
                refreshing={refreshing}
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
