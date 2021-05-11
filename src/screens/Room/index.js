import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import useRoomsStore from '../../states/rooms-store';

// import { useFocusEffect } from '@react-navigation/native';

import { SCENE } from '../../static/enums';

const Room = ({ navigation }) => {
    /* Props and State */
    // const [showModal, toggleShowModal] = useState(false);
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
    return <View />;
};

export default Room;
