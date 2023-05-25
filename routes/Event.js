import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import EventCard from '../components/EventCard';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationFooter from '../components/NavigationFooter';
import axios from 'axios';

export default function Event({route, navigation}) {
  const {
    id,
    EName,
    desc,
    createAt,
    img,
    meetUp,
    location,
    date,
    tag,
    userid,
    maxP,
    firstName,
    LastName,
  } = route.params;
  const [isLoaded, setIsLoaded] = React.useState('not_loaded');

  const [tagsList, setTagsList] = React.useState([]);

  React.useEffect(() => {
    var sampleTag = '["sport","game"]';
    var tagsTemp = JSON.parse(sampleTag);
    console.log(tagsTemp);
    setTagsList(tagsTemp);
    setIsLoaded('loaded');
  }, []);

  const handleButtonPress = async () => {
    console.log(typeof(id.toString()), userid);
    await axios
      .post('http://10.0.2.2:8080/api/join/joinEvent', {"Eid": id.toString(), "userID": userid.toString()})
      .then(async (response) => {
        console.log('response', response);
        await axios
          .post('http://10.0.2.2:8080/api/join/approveJoin', {"Eid": id.toString()})
          .then(response => {
            console.log('response', response);
            navigation.navigate('Events');
          })
          .catch(error => {
            console.log('error', error);
          });
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.titleHeader}>{EName}</Text>
          </View>
          {isOwner == true ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.iconButton}>
              <Icon name="edit" size={25} color="#155e6d" />
            </TouchableOpacity>
          ) : (
            <View style={{width: 25}} />
          )}
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 440}}>
          <View style={styles.scroll}>
            {isLoaded == 'loaded' ? (
              <EventCard
                src={'https://business.twitter.com/content/dam/business-twitter/insights/may-2018/event-targeting.png.twimg.1920.png'}
                title={EName}
                nickname={firstName}
                fullname={LastName}
                datePosted={createAt}
                maxParticipants={maxP}
                location={location}
                datetime={date}
                meetupLocation={meetUp}
                interests={tagsList}
                description={desc}
              />
            ) : null}
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={handleButtonPress}
            style={[styles.button2, {width: '100%', height: '70%'}]}>
            <Text style={styles.buttonText}>Join Event</Text>
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
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    padding: '5%',
    paddingBottom: 0,
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
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    height: 'auto',
    marginBottom: '2%',
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
  floatingButton: {
    width: Dimensions.get('window').width,
    height: '12%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});
