import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

const NavFooter = props => {
  const [images, setImages] = useState([
    {source: require('../public/handshake.png'), key: 'handshake'},
    {source: require('../public/event.png'), key: 'event'},
    {source: require('../public/item.png'), key: 'item'},
    {source: require('../public/qr.png'), key: 'qr'},
    {source: require('../public/settings.png'), key: 'settings'},
  ]);

  const handleIconPress = key => {
    const newImages = [...images];
    newImages[key].source = require('../public/handshake1.png');
    setImages(newImages);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../public/handshake.png')} style={styles.icon} />
      <Image source={require('../public/event.png')} style={styles.icon} />
      <Image source={require('../public/item.png')} style={styles.icon} />
      <Image source={require('../public/qr.png')} style={styles.icon} />
      <Image source={require('../public/settings.png')} style={styles.icon} /> */}
      {images.map(({source, key}) => (
        <Image
          key={key}
          source={source}
          style={styles.icon}
          onPress={() => handleIconPress(key)}
        />
      ))}
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
