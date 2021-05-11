import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';

// navigations
import Navigation from './Navigation';

export default class App extends React.Component {
    componentDidMount() {
        StatusBar.setBackgroundColor('#5ce2ff');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Navigation />
            </SafeAreaView>
        );
    }
}
