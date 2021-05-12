import React from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';

// navigations
import Navigation from './Navigation';

export default class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigation />
            </View>
        );
    }
}
