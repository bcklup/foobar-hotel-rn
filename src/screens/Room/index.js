import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ROOM_CARD_MODE } from '../../static/enums';
import RoomCard from '../../components/RoomCard';
import globalStyles from '../../assets/css/global-styles';
import styles from './styles';
import RoomsAPI from '../../api/rooms-api';
import COLORS from '../../static/colors';

const Room = props => {
    /* Props and State */
    const { navigation, route } = props;
    const { roomId } = route.params;
    const [room, setRoom] = useState();
    const [isLoading, setLoading] = useState(false);

    // Fetch room details on mount
    useEffect(() => {
        if (!room && roomId) {
            fetchRoom();
        }
    }, [roomId]);

    /* Funtions */
    const fetchRoom = async () => {
        setLoading(true);
        RoomsAPI.getRoom(roomId)
            .then(res => {
                if (res.status === 200) {
                    setRoom(res.data);
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
    const RoomDetails = () => (
        <View style={styles.detailsBody}>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeader}>Description</Text>
                <Text style={styles.summaryText}>{room.summary}</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionHeader}>Amenities</Text>
                <View style={styles.amenities}>
                    {room.amenities.map((item, index) => (
                        <View key={index} style={styles.amenitiesItem}>
                            <Text style={styles.amenitiesItemText}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );

    /* Template */
    if (isLoading) {
        return (
            <View
                style={{
                    ...globalStyles.mainContainer,
                    ...globalStyles.center,
                }}>
                <View styles={globalStyles.container}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                    <Text style={styles.loadingIndicator}>Loading...</Text>
                </View>
            </View>
        );
    } else if (!isLoading && !room) {
        return (
            <View
                style={{
                    ...globalStyles.mainContainer,
                    ...globalStyles.center,
                }}>
                <View styles={globalStyles.container}>
                    <Text style={styles.loadingMessage}>Loading...</Text>
                </View>
            </View>
        );
    }
    return (
        <ScrollView style={globalStyles.mainContainer}>
            <Image
                source={{
                    uri: room ? room.image : '',
                }}
                style={styles.imageHeader}
            />
            <LinearGradient
                colors={['rgba(51, 205, 255, 0.4)', 'transparent']}
                style={{
                    left: 0,
                    right: 0,
                    height: 90,
                    margin: -55,
                    zIndex: -5,
                }}
            />
            <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Icon name="arrow-left" size={25} color="white" />
            </Pressable>
            <View style={styles.cardContainer}>
                <RoomCard mode={ROOM_CARD_MODE.DETAIL} room={room} />
            </View>
            <View style={styles.cardShadow1} />
            <View style={styles.cardShadow2} />
            <RoomDetails />
        </ScrollView>
    );
};

export default Room;
