import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ROOM_CARD_MODE, SCENE } from '../../static/enums';
import styles from './styles';

const RoomCard = props => {
    /* Props and State */
    const { mode, navigation, data } = props;

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

    const listItemCard = () => {
        return (
            <TouchableOpacity style={styles.listCardContainer}>
                <CardImage />
                <CardContent />
                <CardFooter />
            </TouchableOpacity>
        );
    };
    if (mode === ROOM_CARD_MODE.LIST) return listItemCard();
    return <View />;
};

export default RoomCard;
