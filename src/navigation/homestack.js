import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../config/colors';


import HomePage from '../screens/Home/home_page';
import Folder from '../screens/pages/Folder';
import Library from '../screens/pages/Library';
import Mostplay from '../screens/search/Mostplay';
import Recentplay from '../screens/search/Recentplay';
import Defaultlist from '../screens/search/Defaultlist';
import Favhome from '../screens/Favourite/favhome';
import RecentAdd from '../screens/pages/RecentAdd';
import Searchlibrary from '../screens/search/Searchlibrary'; 
import Pickfromnet from '../screens/search/Pickfromnet';
import Tabnavigation from './Tabbar';



const Stack = createStackNavigator();

const HomeStackNavigation = () => {
    return (
        
            <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={HomePage}>
            <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
            <Stack.Screen name="Folder" component={Folder} options={{ headerShown: false }} />
            <Stack.Screen name="Favorites" component={Favhome} options={{ headerShown: false }} />
            <Stack.Screen name="Mostplay" component={Mostplay} options={{ headerShown: false }} />
            <Stack.Screen name="Defaultlist" component={Defaultlist} options={{ headerShown: false }} />
            <Stack.Screen name="Recentplay" component={Recentplay} options={{ headerShown: false }} />
            <Stack.Screen name="RecentAdd" component={RecentAdd} options={{ headerShown: false }} />
            <Stack.Screen name="Searchlibrary" component={Searchlibrary} options={{ headerShown: false }} />
            <Stack.Screen name="Pickfromnet" component={Pickfromnet} options={{ headerShown: false }} />
            <Stack.Screen name="Tabnavigation" component={Tabnavigation} options={{ headerShown: false }} />
            
           
        </Stack.Navigator>
      

    );
}

export default HomeStackNavigation;