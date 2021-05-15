import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList,TextInput,ScrollView } from 'react-native';
//import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';
import Ripple from 'react-native-material-ripple';
import ContactTile from '../../components/contactlibrary';
import UserData from './data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../config/colors';
import {useNavigation} from '@react-navigation/native';

const StatusBarHeight = StatusBar.currentHeight;
const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;

const Searchlibrary = () => {
    const [modalVisible, setModalVisible] = useState(true);

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <ContactTile
            data={item.image}
            id={item.id}
            name={item.name}
            subname={item.message}
            rightname={item.path}
            size={item.size}
            time={item.time}
            album={item.album}
            artist={item.artist}
            genre={item.genre}
           // onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
        />
    );


    return (
        
        /* Main view starts here */
        <View>
            <StatusBar backgroundColor="slategray" translucent={true} />
                <ScrollView>
                    <View style={{ height: '100%' }}>
                        
                        {/* Header session starts here */}
                        <View style={styles.headerContainer}>
                            <Ripple onPress={()=> navigation.goBack(null)}>
                                <Feather name="arrow-left" style={{color:"white",paddingLeft:10, paddingRight:10}} size={20} color="#fff" />
                            </Ripple>
                            <TextInput placeholder="Search Library" style={{ lineHeight: 700,fontSize: 17,width:600,paddingRight:60,paddingLeft:10}} placeholderTextColor="white" underlineColorAndroid='white' color="white"  />  
                        </View>
                        <View elevation={3} style={{ flexDirection:"row",paddingRight:20,width: "100%",backgroundColor: Colors.primary, color:"white",           // borderColor: "black",
                        alignSelf: "center"}}>
                            <Text style={{  fontSize: 18,color:"white", fontFamily:"default",paddingBottom:10,paddingLeft:10,fontSize: 40, fontWeight: 'bold', flex: 1, alignSelf: "flex-start", paddingTop: 10, fontSize:20}}>Tracks</Text>
                             
                        </View>
                        {/* Header session ends here */}

                        {/* Content session starts here */}
                        <FlatList
                            data={Frequent_Users}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                        />
                        {/* Content session ends here*/}

                    </View>
                </ScrollView>               
        </View >
        /* Main view ends here */
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 55 + StatusBarHeight,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        paddingTop: StatusBarHeight
    },
    menuIcon: {
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 10,
    },
    headerHeading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    newIconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        elevation: 10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 10,
        alignItems: "center",
    },
    modalText: {
        alignSelf:'flex-start',
        padding:10,
        fontWeight:'bold',
        fontSize:18
  },
})

export default Searchlibrary;