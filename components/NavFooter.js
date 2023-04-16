import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

const NavFooter = props => {
  return (
    <View style={styles.container}>
      <Image source={require('../public/handshake.png')} style={styles.icon} />
      <Image source={require('../public/event.png')} style={styles.icon} />
      <Image source={require('../public/item.png')} style={styles.icon} />
      <Image source={require('../public/qr.png')} style={styles.icon} />
      <Image source={require('../public/settings.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: 0.9 * Dimensions.get('window').width, // maybe a bit weird because idk how to fix padding in Match page
    height: 0.08 * Dimensions.get('window').height,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 0.06 * Dimensions.get('window').width,
  },
});

export default NavFooter;
