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
        top: 30,
        left: 20,
        zIndex: 9,
    },
    cardContainer: {
        position: 'absolute',
        top: screenWidth * 0.6,
        alignSelf: 'center',
        width: '100%',
    },
});

export default styles;
