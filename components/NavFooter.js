import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const NavFooter = props => {
  const [icons, setIcons] = useState([
    {source: require('../public/handshake.png'), key: 0},
    {source: require('../public/event.png'), key: 1},
    {source: require('../public/item.png'), key: 2},
    {source: require('../public/qr.png'), key: 3},
    {source: require('../public/settings.png'), key: 4},
  ]);

  const iconSelected = [
    require('../public/handshake1.png'),
    require('../public/event1.png'),
    require('../public/item1.png'),
    require('../public/qr1.png'),
    require('../public/settings1.png'),
  ];

  const iconList = () => {
    return icons.map(icon => {
      return (
        <TouchableOpacity
          key={icon.key}
          onPress={() => handleIconPress(icon.key)}>
          <Image source={icon.source} style={styles.icon} />
        </TouchableOpacity>
      );
    });
  };

  const handleIconPress = key => {
    const newIcons = [...icons];
    newIcons[key].source = iconSelected[key];
    setIcons(newIcons);
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../public/handshake.png')} style={styles.icon} />
      <Image source={require('../public/event.png')} style={styles.icon} />
      <Image source={require('../public/item.png')} style={styles.icon} />
      <Image source={require('../public/qr.png')} style={styles.icon} />
      <Image source={require('../public/settings.png')} style={styles.icon} /> */}
      {iconList()}
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
