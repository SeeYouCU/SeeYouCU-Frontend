import * as React from 'react';
import {View, Dimensions, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const notiInfo = [
  {
  icon: "gift", 
  title: "Exchange request", 
  description: "fah requested to exchange 'books'",
  time: "16:57"
  },
  {
    icon: "hands", 
    title: "New friend", 
    description: "apple sent a high five", 
    time: "16:57"
  },
];

export default function Notification({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
        <Text style={styles.header}>Notification</Text>
        {notiInfo.map((item) => {
          return (
            <View style={styles.notiContainer}>
              <View style={styles.notiIconContainer}>
                <Image source={require('../public/notification/calendar.png')} style={styles.notiIcon}></Image>
              </View>
                <View style={styles.notiTitleContainer}>
                  <Text style={styles.notiTitle}>{item.title}</Text>
                  <Text style={styles.notiDescription}>{item.description}</Text>
                </View>
              <View style={styles.timeContainer}>
                <Text style={styles.notiTime}>{item.time}</Text>
              </View>
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
    paddingTop: '15%'
  },
  header: {
    color: '#155E6D',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 28,
  },
  notiContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: '2%',
    marginBottom: '2%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  notiIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  notiIconContainer:{
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notiTitleContainer: {
    justifyContent: 'center',
    padding: '3%'
  },
  notiTitle: {
    color: '#434542',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: '5%'
  },
  notiDescription: {
    color: '#414141',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },
  notiTime: {
    color: '#414141',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    marginLeft: 'auto'
  },
  timeContainer: {
    position: 'absolute',
    right: '10%',
    height: '60%',
  }
});
