import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import mainStyle from '../config/styles';

import Library from '../screens/Pages/Library';
import Theme from '../screens/Theme';

import Folder from '../screens/Pages/Folder';
import Download from '../screens/Pages/Audiofiles/Download';
import RecentAdd from '../screens/Pages/RecentAdd';


const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={Library}>
            <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
            <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false }} />
            

           <Stack.Screen name="Folder" component={Folder} options={{ headerShown: false }} />
           <Stack.Screen name="Download" component={Download} options={{ headerShown: false }} />
            <Stack.Screen name="RecentAdd" component={RecentAdd} options={{ headerShown: false }} /> 
           
        </Stack.Navigator>
        </NavigationContainer>

    );
}

export default HomeScreenStack;