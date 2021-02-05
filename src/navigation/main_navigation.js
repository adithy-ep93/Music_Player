import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigation from '../navigation/homestack';
import Scan from '../screens/Scan/scan_library';
import HomePage from '../screens/Home/home_page';
import Settings from '../screens/Settings/settings';
import Equalizer from '../screens/Equalizer/equalizer';
import DriveMode from '../screens/DriveMode';
import Widget from '../screens/Widget/Widget';
import SleepTimer from '../screens/SleepTimer';

import CustomDrawerContent from './drawer_content';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerStyle={{ width: '80%' }}
                drawerContentOptions={{
                    inactiveTintColor: 'rgba(0,0,0,0.75)',
                    labelStyle: { fontSize: 16, fontWeight: '700', color:'#fff' }
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeStackNavigation} />
                <Drawer.Screen name="Scan" component={Scan} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Equalizer" component={Equalizer} />
                <Drawer.Screen name="DriveMode" component={DriveMode} />
                <Drawer.Screen name="Widget" component={Widget} />
                <Drawer.Screen name="SleepTimer" component={SleepTimer} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}