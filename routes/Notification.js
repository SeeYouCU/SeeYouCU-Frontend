import * as React from 'react';
import {View, Dimensions, Text, StyleSheet, ImageBackground} from 'react-native';

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
        <Text>Notification</Text>
        <View>
            <Text>Icon</Text>
            <Text>Header</Text>
            <Text>Subheader</Text>
            <Text>Time</Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
