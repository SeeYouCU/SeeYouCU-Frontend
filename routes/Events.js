import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationFooter from '../components/NavigationFooter';
import EventMapCard from '../components/EventMapCard';
import TogglePage from '../components/TogglePage';

const data = [
  {
    src: 'https://cdn.sanity.io/images/rizm0do5/production/192f4adf3e8499902f5cb0d369b5730d7b538165-1440x900.jpg',
    title: "Girl's Night Out",
    nickname: 'Vinze',
    fullname: 'Siriwat J.',
    currentParticipants: '9',
    maxParticipants: '12',
    location: 'BEAM Thonglor',
    datetime: '22:00 Today',
  },
  {
    src: 'https://cdn.sanity.io/images/rizm0do5/production/192f4adf3e8499902f5cb0d369b5730d7b538165-1440x900.jpg',
    title: "Girl's Night Out",
    nickname: 'Vinze',
    fullname: 'Siriwat J.',
    currentParticipants: '9',
    maxParticipants: '12',
    location: 'BEAM Thonglor',
    datetime: '22:00 Today',
  },
  {
    src: 'https://cdn.sanity.io/images/rizm0do5/production/192f4adf3e8499902f5cb0d369b5730d7b538165-1440x900.jpg',
    title: "Girl's Night Out",
    nickname: 'Vinze',
    fullname: 'Siriwat J.',
    currentParticipants: '9',
    maxParticipants: '12',
    location: 'BEAM Thonglor',
    datetime: '22:00 Today',
  },
  {
    src: 'https://cdn.sanity.io/images/rizm0do5/production/192f4adf3e8499902f5cb0d369b5730d7b538165-1440x900.jpg',
    title: "Girl's Night Out",
    nickname: 'Vinze',
    fullname: 'Siriwat J.',
    currentParticipants: '9',
    maxParticipants: '12',
    location: 'BEAM Thonglor',
    datetime: '22:00 Today',
  },
  {
    src: 'https://cdn.sanity.io/images/rizm0do5/production/192f4adf3e8499902f5cb0d369b5730d7b538165-1440x900.jpg',
    title: "Girl's Night Out",
    nickname: 'Vinze',
    fullname: 'Siriwat J.',
    currentParticipants: '9',
    maxParticipants: '12',
    location: 'BEAM Thonglor',
    datetime: '22:00 Today',
  },
];

export default function Events({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Input isSearch="true" placeholder="Search" style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')} // TODO: reroute later
            style={styles.iconButton}>
            <Icon name="notifications-outline" size={25} color="#155e6d" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')} // TODO: reroute later
            style={styles.iconButton}>
            <Icon name="chatbox-ellipses-outline" size={25} color="#155e6d" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: '4%',
            marginBottom: '8%',
          }}>
          <TogglePage rightTitle="Added You" leftTitle="Discover" />
        </View>
        <View style={{marginTop: '5%'}}>
          <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 180}}>
            <View style={{paddingBottom: 0}}>
              {data.map(
                //TODO: what is this padding
                (
                  item,
                  index, //TODO: detect length of padding needed?
                ) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Event')} //TODO: reroute later
                  >
                    <EventMapCard key={index} item={item} type={'event'} />
                  </TouchableOpacity>
                ),
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewEvent')}
            style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
          >
            <Text style={styles.buttonText}>New Event</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationFooter currentPage="1" />
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
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    padding: '5%',
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
    marginTop: '5%',
    height: '35%',
  },
  eventFrame: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15,
  },
  eventPic: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  eventPicTitle: {
    color: '#414141',
    fontSize: 30,
    fontWeight: '500',
  },
  eventFont1: {
    color: '#414141',
    fontSize: 14,
    fontWeight: 400,
  },
  button2: {
    marginTop: '5%',
    borderWidth: 1,
    borderColor: '#ade7e9',
    borderRadius: 60,
    backgroundColor: '#8ddee1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 2,
    shadowColor: 'black',
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  floatingButton: {
    width: Dimensions.get('window').width,
    height: '12%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
});
