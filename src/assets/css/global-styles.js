import COLORS from '../../static/colors';

export default {
    /* Text */
    text: { fontSize: 17, color: COLORS.dark, fontFamily: 'Louis George Cafe' },
    bold: {
        fontSize: 17,
        color: COLORS.dark,
        fontFamily: 'Louis George Cafe Bold',
    },
    light: {
        fontSize: 17,
        color: COLORS.dark,
        fontFamily: 'Louis George Cafe Light',
    },

    /* Containers */
    mainContainer: {
        flex: 1,
        backgroundColor: '#e9edf0',
    },

    container: {
        flex: 1,
    },

    /* Modifiers */
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};
