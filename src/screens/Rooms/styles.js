// react modules
import { StyleSheet } from 'react-native';
import COLORS from '../../static/colors';
import globalStyles from '../../assets/css/global-styles';

const styles = StyleSheet.create({
    mainHeaderContainer: {
        height: 140,
        marginBottom: -20,
    },
    headerContainerStyle: {
        justifyContent: 'flex-end',
        height: '100%',
        alignContent: 'space-between',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTextStyle: {
        ...globalStyles.bold,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 40,
    },
    roomList: {},
    placeholderContainer: {
        height: 500,
        ...globalStyles.center,
    },
    placeholderText: {
        ...globalStyles.text,
        color: 'gray',
        fontSize: 15,
    },
});

export default styles;
