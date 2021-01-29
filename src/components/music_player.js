import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import playlistData from "../components/data.json";
import Modal from 'react-native-modal';
import Colors from '../config/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
        <View style={{width:'60%'}}>
        <Text style={styles.title}>{item.title}</Text>
        </View>
       <TouchableOpacity>
       <EvilIcons
                                    name="heart"
                                    size={25}
                                    color={'#fff'} 
                                    style={{paddingHorizontal:10}}/>
       </TouchableOpacity>
                                   <TouchableOpacity>
                                   <EvilIcons
                                    name="close"
                                    size={25}
                                    color={'#fff'} 
                                    style={{paddingHorizontal:10}}/>
                                   </TouchableOpacity>
    </TouchableOpacity>
);



const Music = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

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


    return (
        <View>
            <View style={styles.bottombar}>
                {/* defining our slider here */}
                <Slider
                    style={{ width: '100%' }}
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    minimumTrackTintColor="pink"
                    maximumTrackTintColor="#000000"
                    thumbTintColor='pink'
                    onSlidingStart={slidingStarted}
                    onSlidingComplete={slidingCompleted}
                />
                <View style={styles.musicTile}>
                    <View style={{ width: '50%', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={styles.image}>
                            {songDetails.artwork ? <Image style={styles.imageicon} source={{
                                uri: songDetails.artwork,
                            }} /> : <Entypo
                                    name="beamed-note"
                                    size={25}
                                    color={'#fff'} />}

                        </View>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 18 }}>{songDetails.title}</Text>
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
                            <TouchableOpacity onPress={() => null}>
                                <MaterialIcons
                                    name="add-box"
                                    size={30}
                                    color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => null}>
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
                            <TouchableOpacity onPress={()=> setModalVisible(false)}>
                            <Text style={{alignSelf:'center', color:'#fff', fontSize:18, padding:10}}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </Modal>
        </View>
    );
}

export default Music;

const styles = StyleSheet.create({
    musicTile: {
        width: '100%',
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20

    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'pink',
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
        width: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bottombar: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'grey'
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
        color:'#fff',
        paddingHorizontal:10
    },
    item: {
        padding: 10,
        flexDirection:'row'
      },
})



