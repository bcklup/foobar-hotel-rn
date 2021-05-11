import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../assets/css/global-styles';

import { ROOM_CARD_MODE } from '../../static/enums';
import RoomCard from '../../components/RoomCard';
import styles from './styles';

const Room = props => {
    /* Props and State */
    const { navigation, route } = props;
    const { room } = route.params;

    /* Template */
    return (
        <ScrollView style={globalStyles.mainContainer}>
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
                                <Text style={styles.amenitiesItemText}>
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Room;
