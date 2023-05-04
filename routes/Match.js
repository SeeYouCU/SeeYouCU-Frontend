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
  const [is1, makeIs1] = React.useState(true)
  const [is2, makeIs2] = React.useState(false)
  const [is3, makeIs3] = React.useState(false)
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Input isSearch="true" placeholder="Search" style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={styles.iconButton}>
            <Icon name="notifications-outline" size={25} color="#155e6d" />
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
        <TouchableOpacity onPressOut={() => {
          if (is1 == true) {makeIs1(false); makeIs2(true)}
          if (is2 == true) {makeIs2(false); makeIs3(true)}
        }}
        style={{flex: 1}}
        >
          {is1 == true && (
            <ProfileCard
              src="https://cdn.discordapp.com/attachments/1102280430293618789/1102284453746843759/image.png"
              nickname="Chaba"
              name="Chaba Jumsai"
              event="Finding a Friend"
              age="22"
              faculty="Engineering"
              major="ICE"
              class="Chula 104"
              isMatch="true"
              bio="Looking forward to meeting you!"
              interests={['Skincare', 'Exercise', 'Makeup', 'Movies', 'Music']}
            />
          )}
          {is2 == true && (
            <ProfileCard
              src="https://cdn.discordapp.com/attachments/1102280430293618789/1102283966700081234/IMG_6771.jpg"
              nickname="Leila"
              name="Leila Iglesias"
              event="Finding a Friend"
              age="20"
              faculty="Engineering"
              major="ICE"
              class="Chula 104"
              isMatch="true"
              bio="Let's have a good lunch together!"
              interests={['Gaming', 'Basketball', 'Makeup', 'Comics', 'Music']}
            />
          )}
          {is3 == true && (
            <ProfileCard
              src="https://cdn.discordapp.com/attachments/1102280430293618789/1102281844004761731/4877415126921268548.9540010e62a7ceefefcd3d60c7ef651a.23043014.jpg"
              nickname="Tem"
              name="Natchuda Somboonviboon"
              event="Finding a Friend"
              age="21"
              faculty="Engineering"
              major="ICE"
              class="Chula 104"
              isMatch="true"
              bio="I'll be your project manager!"
              interests={[
                'Business',
                'Reading',
                'Harry Potter',
                'Dramas',
                'Music',
              ]}
            />
          )}
        </TouchableOpacity>
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
