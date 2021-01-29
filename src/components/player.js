import React, { useState } from "react";
import PropTypes from "prop-types";
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents
} from "react-native-track-player";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

function ProgressBar() {
  const progress = useTrackPlayerProgress();

  return (
    <View style={styles.progress}>
      <View style={{ flex: progress.position, backgroundColor: "red" }} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: "grey"
        }}
      />
    </View>
  );
}

function ControlButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      <Text style={styles.controlButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState("");
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState("");
  useTrackPlayerEvents(["playback-track-changed"], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title, artist, artwork } = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const { style, onNext, onPrevious, onTogglePlayback } = props;

  var middleButtonText = "Play";

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText = "Pause";
  }

  return (
    <View style={{width:'100%', height:90, backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
      
      <View style={[styles.card, style]}>
      <ProgressBar />
      <View style={styles.card1}>
      <Image style={styles.cover} source={{ uri: trackArtwork }} />
      
      <View style={{width:'30%',height:'100%'}}>
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      </View>
      <View style={styles.controls}>
        <ControlButton title={"<<"} onPress={onPrevious} />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton title={">>"} onPress={onNext} />
      </View>
      </View>
    </View>
    </View>
  );
}

Player.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired
};

Player.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height:'90%',
    alignItems: "center",
    shadowColor: "black",
    alignItems:'center',
  },
  card1:{
    width: "100%",
    height:'90%',
    alignItems: "center",
    shadowColor: "black",
    alignItems:'center',
    flexDirection:'row',
  },
  cover: {
    width: '15%',
    height: '65%',
    // backgroundColor: "grey",
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'

  },
  progress: {
    height: 3,
    width: "90%", 
    flexDirection: "row",
   
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: "bold"
  },
  controls: {
  //  backgroundColor:'yellow',
   height:'100%',
    flexDirection: "row",
    width:'60%',
    alignItems:'center',
    justifyContent:'center'
  },
  controlButtonContainer: {
    flex: 1
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  }
});
