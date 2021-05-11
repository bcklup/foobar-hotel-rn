import React, { useEffect, useState } from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import useRoomStore from '../../states/rooms-store';
import useThemeStore from '../../states/theme-store';

import { SCENE } from '../../static/enums';

const Rooms = ({ navigation }) => {
    /* Props and State */
    // const [showModal, toggleShowModal] = useState(false);
    const [refreshing, toggleRefreshing] = useState(false);

    // context
    const toggleTheme = useThemeStore(state => state.toggleTheme);

    // state selectors
    const rooms = useRoomStore(state => state.rooms);

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
    return (
        <Layout style={{ flex: 1, justifyContent: 'center' }}>
            <Text category="h4">DETAILS</Text>
            <Button style={{ marginVertical: 4 }} onPress={toggleTheme}>
                TOGGLE THEME
            </Button>
        </Layout>
    );
};

export default Rooms;
