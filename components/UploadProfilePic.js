import * as React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import Vinze from './Vinze';
const UploadProfilePic = props => {
  return (
    <View style={styles.dot}>
      <Image source={require('../public/camera.png')} style={styles.camIcon} />
      <Vinze></Vinze>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 200,
    width: 200,
    backgroundColor: 'rgba(6, 186, 192, 0.01)',
    borderRadius: 100,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  camIcon: {
    height: 25,
    width: 29,

    // width: '50%',
  },
});

export default UploadProfilePic;
