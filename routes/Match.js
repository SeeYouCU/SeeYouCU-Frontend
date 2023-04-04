import * as React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import MatchButton from '../components/MatchButton';

export default function Match() {
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <ProfileCard
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/440px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png"
        nickname="Taylor"
        event="Finding a Friend"
        age="22"
        faculty="BALAC"
        major="French"
        bio="Hi, Im the problem its me"
        interests={[
          'Basketball',
          'Tennis',
          'Marvel Movies',
          'Comics',
          'Music',
          'Science',
        ]}
      />
      <View style={styles.matchButton}>
        <MatchButton />
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
  matchButton: {
    position: 'relative',
    top: '50%', 
    left: '50%',
  },
});
