import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <MaterialIcons
                        name="menu"
                        size={25}
                        color={'#fff'} />
                </View>
                <View style={{ justifyContent: 'center', width: '60%', height: '100%', paddingLeft: 10 }}><Text style={{ fontSize: 25, color: '#fff' }}>Music Player</Text></View>
                <View style={{ width: '30%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 10 }}>
                    <MaterialCommunityIcons
                        name="gift"
                        size={25}
                        color={'#fff'} />
                    <MaterialIcons
                        name="search"
                        size={25}
                        color={'#fff'} />
                </View>
            </View>
            <ScrollView>
                <View>
                    <View style={{backgroundColor:'#4a4b46'}}>
                    <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.card}>
                        <Text style={{fontSize:20, color:'#fff'}}>LIBRARY</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={{fontSize:20, color:'#fff'}}>FOLDERS</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={{fontSize:20, color:'#fff'}}>FAVORITES</Text>
                        </View>

                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.card}>
                        <Text style={{fontSize:20, color:'#fff'}}>RECENT PLAY</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={{fontSize:20, color:'#fff'}}>RECENT ADD</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={{fontSize:20, color:'#fff'}}>MOST PLAY</Text>
                        </View>

                    </View>
                </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    card: {
        height: 100,
        width: 100,
        backgroundColor: 'pink',
        marginHorizontal: 7,
        alignItems:'center',
        justifyContent:'center'
    }
});
