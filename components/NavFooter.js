import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';

const NavFooter = props => {
  return (
    <View style={styles.container}>
      <Text>NavFooter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    width: 0.9 * Dimensions.get('window').width,
    height: 0.08 * Dimensions.get('window').height,
    borderRadius: 24,
    alignItems: 'center',
  },
});

export default NavFooter;
