import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NavigationFooter = props => {
  const navigation = useNavigation();
  const icons = [
    {
      key: 0,
      source: require('../public/handshake.png'),
      route: 'Match',
      isSelected: false,
    },
    {
      key: 1,
      source: require('../public/event.png'),
      route: 'Events',
      isSelected: false,
    },
    {
      key: 2,
      source: require('../public/item.png'),
      route: 'Exchange',
      isSelected: false,
    },
    {
      key: 3,
      source: require('../public/settings.png'),
      route: 'Settings',
      isSelected: false,
    },
  ];

  const iconSelectedSrc = [
    require('../public/handshake1.png'),
    require('../public/event1.png'),
    require('../public/item1.png'),
    require('../public/settings1.png'),
  ];

  const handleIconPress = key => {
    const newIcons = [...icons];
    newIcons[key].isSelected = !newIcons[key].isSelected;
    if (!newIcons[key].isSelected) {
      newIcons[key].isSelected = false;
    }
    navigation.navigate(newIcons[key].route);
  };

  var iconSrc;
  var curr = props.currentPage;
  const iconList = () => {
    return icons.map(icon => {
      (curr.includes(icon.key))
        ? iconSrc = iconSelectedSrc[icon.key]
        : iconSrc = icon.source;
      return (
        <TouchableOpacity
          key={icon.key}
          onPress={() => handleIconPress(icon.key)}>
          <Image source={iconSrc} style={styles.icon} />
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.container}>{iconList()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgb(250, 253, 252)',
    height: '10%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: '5%'
  },
  icon: {
    resizeMode: 'contain',
    height: 27,
    width: 27,
  },
});

export default NavigationFooter;
