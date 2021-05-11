import * as React from 'react';

// Libs
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Scenes
import Rooms from './screens/Rooms';
import Room from './screens/Room';
import Settings from './screens/Settings';
import { SCENE } from './static/enums';

// import globalStyles from './assets/css/global-styles';

// Navigators
const Stack = createStackNavigator();

// Stack Navigator as Root Navigator
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen
                    name={SCENE.ROOMS}
                    options={{ title: 'Rooms' }}
                    component={Rooms}
                />
                <Stack.Screen
                    name={SCENE.ROOM}
                    options={{ title: 'Room' }}
                    component={Room}
                />
                <Stack.Screen
                    headerTitleAlign="center"
                    name={SCENE.SETTINGS}
                    options={{ title: 'Settings' }}
                    component={Settings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
