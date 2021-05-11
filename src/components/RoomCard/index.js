import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ROOM_CARD_MODE, SCENE } from '../../static/enums';
import styles from './styles';

const RoomCard = props => {
    /* Props and State */
    const { mode, navigation, data } = props;

    /* Methods */
    const openRoom = () => navigation.navigate(SCENE.ROOM, { room: data }); // TODO: Implement API call to fetch detail

    /* Template */
    const CardImage = () => (
        <Image
            source={{
                uri: 'https://insights.ehotelier.com/wp-content/uploads/sites/6/2020/01/hotel-room.jpg',
            }}
            style={styles.listCardImage}
        />
    );

    const CardContent = () => (
        <View style={styles.listCardContent}>
            <Text style={styles.listCardTitle}>{data.room_name}</Text>
            <View style={styles.listCardAttributes}>
                <View style={styles.listCardAttribute}>
                    <Icon name="user" size={15} color="#c23fd1" />
                    <Text style={styles.listCardAttributeLabel}>
                        {data.accomodation}
                    </Text>
                </View>
                <View style={styles.listCardAttribute}>
                    <Icon name="bed" size={15} color="#e8994a" />
                    <Text style={styles.listCardAttributeLabel}>
                        {data.beds}
                    </Text>
                </View>
                <View style={styles.listCardAttribute}>
                    <Icon name="shower" size={15} color="#e84a4a" />
                    <Text style={styles.listCardAttributeLabel}>
                        {data.bathrooms}
                    </Text>
                </View>
            </View>
        </View>
    );

    const CardFooter = () => (
        <View style={styles.listCardFooter}>
            <View style={{ justifyContent: 'space-evenly' }}>
                <Text style={styles.listCardPriceText}>$133</Text>
                <Text style={styles.listCardPriceSubText}>/night</Text>
            </View>
            <TouchableOpacity>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#33CDFF', '#27c2f5']}
                    style={styles.listCardButton}>
                    <Text style={styles.listCardButtonText}>Book a room</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

    const ListItemCard = () => (
        <TouchableOpacity onPress={openRoom} style={styles.listCardContainer}>
            <CardImage />
            <CardContent />
            <CardFooter />
        </TouchableOpacity>
    );

    const DetailCard = () => (
        <View style={styles.listCardContainer}>
            <CardContent />
            <CardFooter />
        </View>
    );

    if (mode === ROOM_CARD_MODE.LIST) return <ListItemCard />;
    return <DetailCard />;
};

export default RoomCard;
