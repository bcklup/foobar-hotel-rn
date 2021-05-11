import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../assets/css/global-styles';
import useStore from '../../state';

// import { useFocusEffect } from '@react-navigation/native';

import { ROOM_CARD_MODE, SCENE } from '../../static/enums';
import RoomCard from '../../components/RoomCard';
import styles from './styles';

const Room = props => {
    /* Props and State */
    const { navigation, route } = props;
    const { room } = route.params;
    console.log('room', room);
    const [refreshing, toggleRefreshing] = useState(false);

    // useEffect(() => {
    //     if (allJobs.length <= 0) {
    //         dispatch(actions.fetchJobs());
    //     }
    //     toggleRefreshing(false);
    // }, [dispatch]);

    /* Functions */
    const fetchRooms = () => {
        toggleRefreshing(true);
        // dispatch(actions.fetchJobs());
        toggleRefreshing(false);
    };

    /* Template */
    return (
        <View style={globalStyles.mainContainer}>
            <Image
                source={{
                    uri: 'https://assets1.hospitalitytech.com/styles/content_md/s3/2018-06/LuMINN%20room%2054.jpg',
                }}
                style={styles.imageHeader}
            />
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Icon name="arrow-left" size={25} color="white" />
            </Pressable>
            <View style={styles.cardContainer}>
                <RoomCard mode={ROOM_CARD_MODE.DETAIL} data={room} />
            </View>
        </View>
    );
};

export default Room;
