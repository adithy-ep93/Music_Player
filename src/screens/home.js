import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Colors from '../config/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Data from './data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

// import Music from './music_player';

import PlaylistScreen from './sample';


// const detials = new Data();

const Home = () => {
    const navigation = useNavigation();
    const [addmodalVisible, setAddModalVisible] = useState(false);
    const [text, setText] = useState("New list 1");


    // const renderItem = ({ item }) => (
    //     <View style={styles.card}>
    //         <Text style={{ fontSize: 20, color: '#fff' }}>{item.name}</Text>
    //     </View>

    // );
    return (
        <View style={styles.view}>
             <ScrollView>
            <View style={styles.header}>
                <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialIcons
                        name="menu"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', width: '60%', height: '100%', paddingLeft: 10 }}><Text style={{ fontSize: 25, color: '#fff' }}>Music Player</Text></View>
                <View style={{ width: '30%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: '100%', paddingHorizontal: 10 }}>
                    <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="gift"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <MaterialIcons
                        name="search"
                        size={25}
                        color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
           
                <View>
                    {/* style={{ backgroundColor: '#4a4b46' }} */}
                    <View >
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.card}>

                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>29</Text>

                                    <FontAwesome
                                        name="music"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>LIBRARY</Text>
                                </View>
                                <View style={styles.card}>
                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>18</Text>
                                    <FontAwesome
                                        name="folder-open"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>FOLDERS</Text>
                                </View>
                                <View style={styles.card}>
                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>19</Text>
                                    <FontAwesome
                                        name="heart"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>FAVORITES</Text>
                                </View>
                                {/* <FlatList 
                                data = {detials}
                                keyExtractor = { (item) => item.id.toString()}
                                renderItem={renderItem}/> */}

                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.card}>
                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>3</Text>
                                    <MaterialCommunityIcons
                                        name="playlist-play"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>RECENT PLAY</Text>
                                </View>
                                <View style={styles.card}>
                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>9</Text>
                                    <MaterialCommunityIcons
                                        name="playlist-plus"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>RECENT ADD</Text>
                                </View>
                                <View style={styles.card}>
                                    <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>0</Text>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={25}
                                        color={'#fff'} />
                                    <Text style={{ fontSize: 20, color: '#fff' }}>MOST PLAY</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    {/* /Playlist/ */}
                    <View style={styles.playlist}>
                        <Text style={{ color: "#fff", fontSize: 20 }}>PLAYLIST(1)</Text>
                        <View style={{ width: '20%', height: '100%' ,alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                            <TouchableOpacity  onPress={()=> setAddModalVisible(true)}>
                                <MaterialIcons
                                    name="add"
                                    size={25}
                                    color={'#fff'} />

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome
                                    name="angle-right"
                                    size={25}
                                    color={'#fff'} />

                            </TouchableOpacity>

                        </View>
                    </View>
                   
                    <View style={{ margin: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.card1}>
                                <Text style={{ color: '#fff', alignSelf: 'flex-end', paddingRight: 5 }}>2</Text>
                                    <MaterialCommunityIcons
                                        name="playlist-music-outline"
                                        size={40}
                                        color={'#fff'} />
                                   <View style={{backgroundColor:'#ffd', width:'100%',marginTop:10}}>
                                   <Text style={{ fontSize: 20, color: '#000',alignSelf:'center' }}>Default list</Text>
                                   </View>
                                </View>
                                <View style={styles.card1}>
                                <TouchableOpacity onPress={()=> setAddModalVisible(true)}>
                                <MaterialIcons
                                    name="add"
                                    size={40}
                                    color={'#fff'}
                                   />

                            </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                </View>
            </ScrollView>

            <View style={{marginRight:20,}}>
            <View style={{height:50,width:50, borderRadius:25,position:'absolute',bottom:70,backgroundColor:'orange',alignSelf:'flex-end', alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity>
                                <MaterialIcons
                                    name="shuffle"
                                    size={30}
                                    color={'#fff'}
                                   />

                            </TouchableOpacity>
            </View>
            </View>

            {/* MusicTrack */}

            <View style={styles.music}>
                <Music/>
                {/* <PlaylistScreen/> */}
            </View>

            {/* AddModal */}
            <Modal
            isVisible={addmodalVisible}
            style={{margin: 0}}
            backdropOpacity={0.3}
            onBackdropPress={() => setAddModalVisible(false)}
            >
                <View style={styles.addModal}>
                    <Text style={{fontSize:18}}>Create a new playlist</Text>
                <TextInput
         
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          style={styles.textfield}
        />
        <View style={{alignItems:'center',justifyContent:'space-between',marginTop:40, flexDirection:'row',alignSelf:'flex-end',width:'40%', marginRight:20}}>
        <Text style={{fontSize:18}}>CANCEL</Text>
        <Text style={{fontSize:18}}>OK</Text>  
        </View>
                </View>
            </Modal>

        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    view: {

        backgroundColor: Colors.primary,
        height:'100%',
        width:'100%'
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
        alignItems: 'center',

    },
    card1: {
        height: 100,
        width: 100,
        backgroundColor: 'pink',
        marginHorizontal: 7,
        alignItems: 'center',
        justifyContent:'center'

    },
    playlist: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'grey',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    music:{
        position:'absolute',
        bottom:0,
        width:'100%'
    },
    addModal:{
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height:'30%'  ,
        paddingBottom:20
    },
    textfield:{
    
        height: 40,
       width: '100%',
       borderBottomWidth:1,
       borderBottomColor:'blue',    
 },
 
});
