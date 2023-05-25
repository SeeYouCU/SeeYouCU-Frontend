import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationFooter from '../components/NavigationFooter';
import EventMapCard from '../components/EventMapCard';
import TogglePage from '../components/TogglePage';
import axios from 'axios';

export default function Events({navigation}) {
  const [events, setEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = React.useState('');

  const handleInputChange = e => {
    console.log(e);
    setSearchText(e);
  };

  useEffect(() => {
    axios
      .get(`http://10.0.2.2:8080/api/posts/getEvents`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    axios
      .get(`http://10.0.2.2:8080/api/join/getJoinedEvent`)
      .then(response => {
        setMyEvents(Array.from(new Set(response.data.map(item => item.Eid))));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>      
        {/* <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={15}
            color="#155e6d"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor="#155e6d"
            value={searchText}
            onChangeText={handleInputChange}
          />
        </View> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={styles.iconButton}>
            <Icon name="notifications-outline" size={25} color="#155e6d" />
          </TouchableOpacity>
        <View
          style={{
            flex: 1,
          }}>
          <TogglePage
            leftTitle="Discover"
            rightTitle="Your Events"
            active={active}
            setActive={setActive}
          />
        </View>
        <View style={{width: 25}}/>
        </View>
        <View style={{marginTop: '5%'}}>
          <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 180}}>
            {active ? (
              <View style={{paddingBottom: 0}}>
                {events.map((item, index) => {
                  if (myEvents.includes(item.id))
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => navigation.navigate('Event', item)}>
                      <EventMapCard key={index} item={item} type={'event'} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : (
              <View style={{paddingBottom: 0}}>
                {events.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate('Event', item)}>
                    <EventMapCard key={index} item={item} type={'event'} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NewEvent', {currTags: '[]'})}
            style={[styles.button2, {width: '100%', height: '70%'}]}>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#155e6d',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    marginLeft: 3,
    marginRight: 6,
  },
  textInput: {
    height: 'auto',
    padding: 0,
    margin: 0,
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
