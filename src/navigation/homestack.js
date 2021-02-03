import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import mainStyle from '../config/styles';


import HomePage from '../screens/Home/home_page';
import Folder from '../screens/pages/Folder';
import Library from '../screens/pages/Library';
import Mostplay from '../screens/Mostplay';
import Recentplay from '../screens/Recentplay';
import Defaultlist from '../screens/Defaultlist';
import Favhome from '../screens/Favourite/favhome';


const Stack = createStackNavigator();

const HomeStackNavigation = () => {
    return (
        
            <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={HomePage}>
            <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
            <Stack.Screen name="Folder" component={Folder} options={{ headerShown: false }} />
            <Stack.Screen name="Favorites" component={Favhome} options={{ headerShown: false }} />
            <Stack.Screen name="Mostplay" component={Mostplay} options={{ headerShown: false }} />
            <Stack.Screen name="Defaultlist" component={Defaultlist} options={{ headerShown: false }} />
            <Stack.Screen name="Recentplay" component={Recentplay} options={{ headerShown: false }} />
           
        </Stack.Navigator>
      

    );
}

export default HomeStackNavigation;