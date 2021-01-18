import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/home';
import Colors from '../config/colors';


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
                <Drawer.Screen name="Home" component={Home} />
                {/* <Drawer.Screen name="Guidlines" component={Guidlines} /> */}
                {/* <Drawer.Screen name="Status" component={Status} />
                <Drawer.Screen name="Invites" component={Invites} />
                <Drawer.Screen name="Archived" component={Archived} /> */}


            </Drawer.Navigator>
        </NavigationContainer >
    );
}