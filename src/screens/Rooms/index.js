import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import useStore from '../../state';

// import { useFocusEffect } from '@react-navigation/native';

import { SCENE } from '../../static/enums';

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

    /* Template */
    return <View />;
};

export default Rooms;
