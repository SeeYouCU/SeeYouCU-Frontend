import * as React from 'react';
import {View, Dimensions, Text, StyleSheet, ImageBackground} from 'react-native';

const notiInfo = [
  {
  icon: "gift", 
  title: "exchange request", 
  description: "fah requested to exchange 'books'",
  time: "16:57"
  },
  {
    icon: "hands", 
    title: "new friend", 
    description: "apple sent a high five", 
    time: "16:57"
  },
];

export default function Notification({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
        <Text>Notification</Text>
        {notiInfo.map((item) => {
          return (
            <View>
              <Text>{item.icon}</Text>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>{item.time}</Text>
            </View>
          )
        })}
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
