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
      route: 'Home', //TODO: change route later
      isSelected: false,
    },
    {
      key: 2,
      source: require('../public/item.png'),
      route: 'Home', //TODO: change route later
      isSelected: false,
    },
    {
      key: 3,
      source: require('../public/qr.png'),
      route: 'Home', //TODO: change route later
      isSelected: false,
    },
    {
      key: 4,
      source: require('../public/settings.png'),
      route: 'Home', //TODO: change route later
      isSelected: false,
    },
  ];

  const iconSelectedSrc = [
    require('../public/handshake1.png'),
    require('../public/event1.png'),
    require('../public/item1.png'),
    require('../public/qr1.png'),
    require('../public/settings1.png'),
  ];

  const [selectedIcon, setSelectedIcon] = useState([]);

  const handleIconPress = key => {
    const newIcons = [...icons];
    newIcons[key].isSelected = !newIcons[key].isSelected;
    navigation.navigate(newIcons[key].route);
    setSelectedIcon(
      newIcons.filter(icon => icon.isSelected).map(icon => icon.key),
    );
    if (!newIcons[key].isSelected) {
      newIcons[key].isSelected = false;
    }
  };

  var curr = props.currentPage;

  useEffect(() => {
    handleIconPress(curr);
  }, []);

  const iconList = () => {
    return icons.map(icon => {
      const iconSrc = !selectedIcon.includes(icon.key)
        ? icon.source
        : iconSelectedSrc[icon.key];
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
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 253, 252, 0.9)',
    width: Dimensions.get('window').width,
    height: '10%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    margin: 0.06 * Dimensions.get('window').width,
  },
});

export default NavigationFooter;
