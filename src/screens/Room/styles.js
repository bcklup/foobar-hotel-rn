// react modules
import { Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../static/colors';
import globalStyles from '../../assets/css/global-styles';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    imageHeader: {
        width: screenWidth,
        height: screenWidth * 0.8,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backButton: {
        position: 'absolute',
        top: 45,
        left: 20,
        zIndex: 9,
    },
    cardContainer: {
        position: 'absolute',
        top: screenWidth * 0.6,
        zIndex: 10,
        alignSelf: 'center',
        width: '100%',
    },
    cardShadow1: {
        position: 'absolute',
        top: screenWidth * 0.88,
        zIndex: 5,
        alignSelf: 'center',
        width: '80%',
        height: 60,
        backgroundColor: '#b7c1c7',
        borderRadius: 10,
    },
    cardShadow2: {
        position: 'absolute',
        top: screenWidth * 0.9,
        zIndex: 4,
        alignSelf: 'center',
        width: '70%',
        height: 60,
        backgroundColor: '#dfe3e6',
        borderRadius: 10,
    },
    detailsBody: {
        marginTop: 120,
    },
    sectionContainer: {
        margin: 15,
    },
    sectionHeader: {
        ...globalStyles.bold,
        fontSize: 25,
        color: COLORS.dark,
        marginBottom: 10,
    },
    summaryText: {
        ...globalStyles.text,
        fontSize: 17,
        paddingLeft: 10,
        color: 'gray',
    },
    amenities: {
        paddingLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    amenitiesItem: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 5,
    },
    amenitiesItemText: {
        color: 'white',
    },
    loadingMessage: {
        ...globalStyles.text,
        color: 'gray',
        fontSize: 15,
    },
});

export default styles;
