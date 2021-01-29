/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//imports track player
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);

//registers the track player
TrackPlayer.registerPlaybackService(() => require('./service'));
