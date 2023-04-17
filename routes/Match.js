import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationFooter from '../components/NavigationFooter';

export default function Match({navigation}) {
  return (
    <ImageBackground
      source={require('../public/bg.png')} // TODO: vinze - slider button
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
        <View style={{marginTop: '2%', marginBottom: '2%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')} // TODO: reroute later
            style={styles.iconButton2}>
            <Icon name="people" size={20} color="#155e6d" />
          </TouchableOpacity>
        </View>
        <ProfileCard
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/440px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png"
          nickname="Taylor"
          event="Finding a Friend"
          age="22"
          faculty="BALAC"
          major="French"
          class="Chula 104"
          isMatch="true"
          bio="Hi, I'm the problem it's me"
          interests={[
            'Basketball',
            'Tennis',
            'Marvel Movies',
            'Comics',
            'Music',
            'Science',
          ]}
        />
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
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    padding: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0%',
  },
  iconButton: {
    height: 'auto',
    padding: 0,
    margin: '1%',
  },
  iconButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: '1%',
    borderRadius: 40,
    width: 30,
    height: 30,
    backgroundColor: '#c3eaeb',
  },
});
