import 'react-native-gesture-handler';
import React from 'react';

// Eva & UI Kittens Setup
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as customTheme } from './theme.json';

// navigations
import Navigation from './Navigation';

// theme store
import useThemeStore from './states/theme-store';

const App = () => {
    const theme = useThemeStore(state => state.theme);
    console.log('theme', theme);
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                theme={{ ...eva[theme], ...customTheme }}>
                <Navigation />
            </ApplicationProvider>
        </>
    );
};

export default App;
