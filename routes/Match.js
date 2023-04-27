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
import TogglePage from '../components/TogglePage';

export default function Match({navigation}) {
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
            marginVertical: '4%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{width: 30}} />
          <View style={{flex: 1}}>
            <TogglePage rightTitle="Added You" leftTitle="Discover" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friends')} // TODO: reroute later
            style={styles.iconButton2}>
            <Icon name="people" size={20} color="#155e6d" />
          </TouchableOpacity>
        </View>
        <ProfileCard
          src="https://assets.entrepreneur.com/content/3x2/2000/1396294231-why-college-students-need-entrepreneurial-careers.jpg"
          nickname="John"
          event="Finding a Friend"
          age="22"
          faculty="Language Arts"
          major="French"
          class="Chula 104"
          isMatch="true"
          bio="Nice to meet you!"
          interests={[
            'Basketball',
            'Tennis',
            'Marvel Movies',
            'Comics',
            'Music'
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
    borderRadius: 40,
    width: 30,
    height: 30,
    backgroundColor: '#c3eaeb',
  },
});
