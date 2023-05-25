import * as React from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import UserMatch from '../components/UserMatch';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
  {
    src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102281644083249162/4877415126921268548.f380451f921a47ddb713700a9952291f.23043022.jpg',
    nickname: 'Tata',
    name: 'Penpim Jirajarus',
    event: 'Finding a Friend',
    age: '20',
    faculty: 'ISE',
    major: 'ICE',
    batch: 'Chula 104',
    bio: 'See you!',
    interests: ['Coffee', 'Movie', 'Makeup', 'Skincare', 'Music'],
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102283966700081234/IMG_6771.jpg',
    nickname: 'Leila',
    name: 'Leila Sagad Iglesias',
    event: 'Finding a Friend',
    age: '20',
    faculty: 'ISE',
    major: 'ICE',
    batch: 'Chula 104',
    bio: 'See you!',
    interests: ['Gaming', 'Fashion', 'Makeup', 'Skincare', 'Music'],
  },
];

export default function Friends({navigation}) {

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Match')}
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.titleHeader}>Friends List</Text>
          </View>
          <View style={{width: 25}} />
        </View>
        <ScrollView fadingEdgeLength={100} persistentScrollbar={true}>
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Profile', item)}>
              <UserMatch
                src={item.src}
                nickname={item.nickname}
                event={item.event}
                interests={item.interests.slice(0, 2)}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  itemImgFrame: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 90,
    width: 90,
    borderRadius: 70,
    margin: '3%',
  },
  itemImg: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  interestMap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 0.08 * Dimensions.get('window').width,
    fontSize: 24,
    color: '#155E6D',
    textAlign: 'center',
    fontWeight: 700,
  },
  search: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 0.03 * Dimensions.get('window').width,
    paddingLeft: 0.04 * Dimensions.get('window').width,
    padding: 0.01 * Dimensions.get('window').width,
  },
  itemName: {
    color: '#155E6D',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 0.01 * Dimensions.get('window').width,
  },
  interestItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 0.3 * Dimensions.get('window').width,
    marginBottom: '20%',
  },
  nextBtn: {
    textAlign: 'right',
    paddingRight: 0.05 * Dimensions.get('window').width,
    color: '#155E6D',
    fontSize: 20,
    fontWeight: 600,
    marginTop: '5%',
  },
});
