import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput, ToastAndroid } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import playlistData from "../components/data.json";
import Modal from 'react-native-modal';
import Colors from '../config/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const DATA = require('../components/data.json');

//import track player
import TrackPlayer from 'react-native-track-player';
//import hook by track player to manage the progress
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
//import slider
import Slider from '@react-native-community/slider';

//import hook to manage remote play/pause changes
import { useTrackPlayerEvents } from 'react-native-track-player/lib/hooks';

//import constants to make the above hook to work
import { TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player';

const songDetails = {
    id: '1',
    url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
    title: 'The Greatest Song',
    album: 'Great Album',
    artist: 'A Great Dude',
    artwork: 'https://picsum.photos/300',
};

//function to initialize Track player
const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(playlistData);
    TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_JUMP_FORWARD,
            TrackPlayer.CAPABILITY_JUMP_BACKWARD,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
            TrackPlayer.CAPABILITY_STOP
        ],
    });
    await TrackPlayer.add(

        {
            id: songDetails.id,
            url:
                songDetails.url,
            type: songDetails.type,
            title: songDetails.title,
            album: songDetails.album,
            artist: songDetails.artist,
            artwork: songDetails.artwork,
        }
    );
    return true;
};

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <SimpleLineIcons
            name="options-vertical"
            size={15}
            color={'#fff'} />
        <SimpleLineIcons
            name="options-vertical"
            size={15}
            color={'#fff'} />
        <View style={{ width: '60%' }}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity>
            <EvilIcons
                name="heart"
                size={25}
                color={'#fff'}
                style={{ paddingHorizontal: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity>
            <EvilIcons
                name="close"
                size={25}
                color={'#fff'}
                style={{ paddingHorizontal: 10 }} />
        </TouchableOpacity>
    </TouchableOpacity>
);



const Music = () => {
    const [addmodalVisible, setAddModalVisible] = useState(false);
    const [deletemodalVisible, setDeleteModalVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [addPlaylistModalVisible, setAddPlaylistModalVisible] = useState(false);
    const [text, setText] = useState('New list 1');
    const showToast = () => {
        ToastAndroid.show("Succeed !", ToastAndroid.SHORT);
      };

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
            />
        );
    };

    //state to manage whether track player is initialized or not
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    //the value of the slider should be between 0 and 1
    const [sliderValue, setSliderValue] = useState(0);

    //flag to check whether the use is sliding the seekbar or not
    const [isSeeking, setIsSeeking] = useState(false);

    //useTrackPlayerProgress is a hook which provides the current position and duration of the track player.
    //These values will update every 250ms 
    const { position, duration } = useTrackPlayerProgress(250);

    //initialize the TrackPlayer when the App component is mounted
    useEffect(() => {
        const startPlayer = async () => {
            let isInit = await trackPlayerInit();
            setIsTrackPlayerInit(isInit);
        }
        startPlayer();
    }, []);

    //hook updates the value of slider while current position of song changes
    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration);
        }
    }, [position, duration]);

    //start playing the TrackPlayer when the button is pressed 
    const onButtonPressed = () => {
        if (!isPlaying) {
            TrackPlayer.play();
            setIsPlaying(true);
        } else {
            TrackPlayer.pause();
            setIsPlaying(false);
        }
    };

    // function for when the user starts to slide the seekbar
    const slidingStarted = () => {
        setIsSeeking(true);
    };

    // function called when the user stops sliding the seekbar
    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration);
        setSliderValue(value);
        setIsSeeking(false);
    };

    // The hook is called when any one of the events in the array is fired
    useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
        if (event.state === STATE_PLAYING) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    });

    async function skipToNext() {
        try {
            await TrackPlayer.skipToNext();
        } catch (_) { }
    }

    async function skipToPrevious() {
        try {
            await TrackPlayer.skipToPrevious();
        } catch (_) { }
    }

    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.bottombar}>
                {/* defining our slider here */}
                <Slider
                    style={{ width: '100%' }}
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    minimumTrackTintColor={Colors.secondary}
                    maximumTrackTintColor="#000000"
                    thumbTintColor={Colors.secondary}
                    onSlidingStart={slidingStarted}
                    onSlidingComplete={slidingCompleted}
                />
                <TouchableOpacity onPress={()=> navigation.navigate("MusicPage")}>
                <View style={styles.musicTile}>
                    <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={styles.image}>
                            {songDetails.artwork ? <Image style={styles.imageicon} source={{
                                uri: songDetails.artwork,
                            }} /> : <Entypo
                                    name="beamed-note"
                                    size={20}
                                    color={Colors.primary} />}

                        </View>
                        <View>
                            <Text style={{ color: '#fff' }}>{songDetails.title}</Text>
                            <Text style={{ color: '#fff' }}>Change song by swipe</Text>
                        </View>
                    </View>

                    <View style={styles.buttons}>

                        <TouchableOpacity onPress={onButtonPressed}
                        >
                            {isPlaying ?
                                <Entypo
                                    name="controller-paus"
                                    size={25}
                                    color={'#fff'} />
                                :
                                <Entypo
                                    name="controller-play"
                                    size={25}
                                    color={'#fff'} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => skipToNext()}>
                            <Entypo
                                name="controller-next"
                                size={25}
                                color={'#fff'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <MaterialCommunityIcons
                                name="playlist-music-outline"
                                size={40}
                                color={'#fff'} />
                        </TouchableOpacity>
                    </View>
                </View>
                </TouchableOpacity>
            </View>

            {/* bottomModal */}
            <Modal

                isVisible={isModalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                // animationIn={''}
                // animationOut={'slideOutRight'}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}>
                <View style={styles.musicModal}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => null}>
                            <MaterialCommunityIcons
                                name="repeat-once"
                                size={30}
                                color={'#fff'}
                                style={{ alignSelf: 'center' }} />
                        </TouchableOpacity>
                        <View style={styles.headerTitle}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Single</Text>
                        </View>
                        <View style={styles.headIcons}>
                            <TouchableOpacity onPress={() => setAddPlaylistModalVisible(true)}>
                                <MaterialIcons
                                    name="add-box"
                                    size={30}
                                    color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDeleteModalVisible(true)}>
                                <MaterialCommunityIcons
                                    name="delete"
                                    size={30}
                                    color={'#fff'} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <ScrollView>
                        <View>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                extraData={selectedId}

                            />
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 18, padding: 10 }}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </Modal>

            {/* SideaddplaylistModal */}
            <View>
                <Modal
                    isVisible={addPlaylistModalVisible}
                    style={{ margin: 0 }}
                    backdropOpacity={0.3}
                    animationIn={'slideInRight'}
                    animationOut={'slideOutRight'}
                    onBackdropPress={() => setAddPlaylistModalVisible(false)}
                    onBackButtonPress={() => setAddPlaylistModalVisible(false)}
                >
                    <View style={styles.sideAddModal}>
                        <View style={styles.header}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', paddingRight: 10 }}>
                                <TouchableOpacity onPress={() => setAddPlaylistModalVisible(false)}>
                                    <MaterialIcons
                                        name="arrow-back"
                                        size={25}
                                        color={'#fff'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', width: '50%', height: '100%', paddingLeft: 5 }}><Text style={{ fontSize: 25, color: '#fff' }}>Add to playlist</Text></View>
                            <View style={{ width: '45%', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', height: '100%', paddingHorizontal: 10, }}>
                                <TouchableOpacity onPress={() => setAddModalVisible(true)}>
                                    <Ionicons style={styles.optionButton} name="add" size={26} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Favourites */}
                        <View style={{ marginTop: 20 }}>
                            <TouchableOpacity onPress={()=> showToast()}>
                                <View style={styles.check}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={styles.folder}>
                                            <MaterialCommunityIcons
                                                name="playlist-music-outline"
                                                size={40}
                                                color={'#fff'}
                                            />
                                        </View>
                                        <View style={styles.folderData}>
                                            <Text style={{ fontSize: 18, color: '#fff' }}>Favourite</Text>
                                            <Text style={{ fontSize: 14, color: '#fff' }}>10 songs</Text>

                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <Divider style={{ marginHorizontal: 20, marginVertical: 7 }} />
                    </View>
                </Modal>
            </View>

            {/* AddModal */}
            <Modal
                isVisible={addmodalVisible}
                style={{ margin: 0 }}
                animationOut={'fadeOut'}
                backdropOpacity={0.3}
                onBackdropPress={() => setAddModalVisible(false)}>
                <View style={styles.addModal}>
                    <Text style={{ fontSize: 18 }}>Create a new playlist</Text>
                    <TextInput
                        onChangeText={(text) => setText(text)}
                        defaultValue={text}
                        style={styles.textfield}
                    />
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 40,
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                            width: '40%',
                            marginRight: 20,
                        }}>
                        <TouchableOpacity onPress={() => setAddModalVisible(false)}>
                            <Text style={{ fontSize: 18 }}>CANCEL</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18 }}>OK</Text>
                    </View>
                </View>
            </Modal>

            {/* DeleteModal */}
            <Modal
                isVisible={deletemodalVisible}
                style={{ margin: 0 }}
                animationIn={"fadeIn"}
                animationOut={'fadeOut'}
                backdropOpacity={0.3}
                onBackdropPress={() => setDeleteModalVisible(false)}>
                <View style={styles.deleteModal}>
                    <Text style={{ fontSize: 20, fontWeight:'700' }}>Clear</Text>
                    <Text style={{ fontSize: 18 }}>are you sure to clear the current list?</Text>
                    <View style={{flexDirection:'row', alignSelf:'flex-end', alignItems:'center', justifyContent:'space-between', width:'50%'}}>
                    <TouchableOpacity>
                    <Text style={{ fontSize: 18, color:'blue' }}>CANCEL</Text>
                    </TouchableOpacity>
                   <TouchableOpacity onPress={()=> setDeleteModalVisible(false)}>
                   <Text style={{ fontSize: 18, color:'blue' }}>CLEAR</Text>
                   </TouchableOpacity>
                    </View>
                   
                    
                </View>
            </Modal>

        </View>
    );
}

export default Music;

const styles = StyleSheet.create({
    musicTile: {
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:5

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: Colors.secondary,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageicon: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
    },
    buttons: {
        width: '55%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        padding:10
    },
    bottombar: {
        width: '100%',
        height: 85,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.primary,
        elevation: 10
    },
    musicModal: {
        width: '100%',
        backgroundColor: Colors.primary,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 15,

    },
    modalHeader: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.shade,
        elevation: 5,
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    headIcons: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        color: '#fff',
        paddingHorizontal: 10
    },
    item: {
        padding: 10,
        flexDirection: 'row'
    },
    sideAddModal: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.primary
    },
    header: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: Colors.primary
    },
    addModal: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height: '30%',
        paddingBottom: 20
    },
    deleteModal: {
        width: '80%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height: '25%',
        paddingBottom: 20,
        justifyContent:'space-evenly'
    },
    textfield: {

        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    check: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    folder: {
        width: 50,
        height: 50,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    folderData: {
        width: '80%',
        paddingHorizontal: 20
    },
})



