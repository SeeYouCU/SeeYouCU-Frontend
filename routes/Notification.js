import * as React from 'react';
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-vector-icons/AntDesign';

const notiInfo = [
  {
    type: 'item',
    title: 'Exchange Request',
    description: "Fah requested to exchange 'Serway Physics'",
    time: '16:57',
  },
  {
    type: 'friend',
    title: 'New Friend',
    description: 'Fah sent a high five!',
    time: '17:05',
  },
  {
    type: 'event',
    title: 'Upcoming Event',
    description: "'To the top!' will be held tomorrow.'",
    time: '17:34',
  },
  {
    type: 'participant',
    title: 'New Participant',
    description: "Fah joined 'TGIF'",
    time: '17:37',
  },
  {
    type: 'event',
    title: 'Event Updates',
    description: "'TGIF' is now cancelled.",
    time: '17:58',
  },
  {
    type: 'item',
    title: 'Exchange Request',
    description: "Fah requested to exchange 'M5Stack'",
    time: '18:19',
  },
  {
    type: 'event',
    title: 'Upcoming Event',
    description: "'TGIF' will be held tomorrow.'",
    time: '18:32',
  },
  {
    type: 'friend',
    title: 'New Friend',
    description: 'Apple sent a high five!',
    time: '17:05',
  },
];

function iconReturn(type) {
  let icon;

  if (type === 'item') {
    icon = (
      <Image source={require('../public/item1.png')} style={styles.notiIcon} />
    );
  } else if (type === 'event' || type === 'participant') {
    icon = (
      <Image
        source={require('../public/event1.png')}
        style={styles.notiIcon}
      />
    );
  } else if (type === 'friend') {
    icon = (
      <Image
        source={require('../public/add-friend.png')}
        style={styles.notiIcon}
      />
    );
  } else {
    icon = null;
  }

  return icon;
}

export default function Notification({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>        
        <View style={[styles.header, {paddingHorizontal: '5%'}]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Match')}
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={[styles.titleHeader]}>
            <Text style={styles.titleHeader}>Notifications</Text>
          </View>
          <View style={{width: 25}} />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 0}}>
        <View style={styles.scroll}>
          {notiInfo.map((item, index) => {
            return (
              <View style={styles.notiContainer} key={index}>
                <View style={styles.notiIconContainer}>
                  {iconReturn(item.type)}
                </View>
                <View style={styles.notiTitleContainer}>
                  <Text style={styles.notiTitle}>{item.title}</Text>
                  <Text style={styles.notiDescription}>{item.description}</Text>
                </View>
                <View style={styles.timeContainer}>
                  <Text style={styles.notiTime}>{item.time}</Text>
                </View>
              </View>
            );
          })}
          </View>
        </ScrollView>
      </View>
      <NavigationFooter currentPage="0" style={{position: 'relative'}} />
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
  content: {
    marginTop: '10%',
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    paddingVertical: '5%',
    paddingBottom: 0,
  },
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5%',
  },
  scroll: {
    flex: 1,
    flexDirection: 'column',
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
    resizeMode: 'contain',
  },
  notiIconContainer: {
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notiTitleContainer: {
    justifyContent: 'center',
    padding: '3%',
  },
  notiTitle: {
    color: '#434542',
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: '5%',
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
    marginLeft: 'auto',
  },
  timeContainer: {
    position: 'absolute',
    right: '10%',
    height: '60%',
  },
});
