import React from 'react';
import { SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';

// navigations
import Navigation from './Navigation';

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Navigation />
            </SafeAreaView>
        );
    }
}
