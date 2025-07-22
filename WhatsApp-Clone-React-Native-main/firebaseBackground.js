// firebaseBackground.js
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import App from './App';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📩 Message handled in the background!', remoteMessage);
  // You can also display a local notification here if needed
});

AppRegistry.registerComponent('main', () => App);
