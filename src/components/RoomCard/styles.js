// react modules
import { StyleSheet } from 'react-native';
import COLORS from '../../static/colors';
import globalStyles from '../../assets/css/global-styles';

const styles = StyleSheet.create({
    // list-item
    listCardContainer: {
        width: '90%',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    listCardImage: {
        height: 120,
        width: '100%',
    },
    listCardContent: {
        flex: 1,
        margin: 15,
    },
    listCardTitle: {
        ...globalStyles.bold,
        color: COLORS.dark,
        fontSize: 20,
    },
    listCardFooter: {
        margin: 15,
        marginTop: 0,
        paddingTop: 10,
        borderRadius: 1,
        borderTopColor: '#e4e8eb',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listCardPriceText: {
        ...globalStyles.bold,
        fontSize: 20,
    },
    listCardPriceSubText: {
        ...globalStyles.text,
        fontSize: 15,
        color: COLORS.dark,
    },
    listCardButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
    },
    listCardButtonText: {
        ...globalStyles.text,
        color: 'white',
        fontSize: 18,
    },
    // detail card
});

export default styles;
