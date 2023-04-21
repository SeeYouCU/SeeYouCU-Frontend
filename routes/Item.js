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
import ItemCard from '../components/ItemCard';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationFooter from '../components/NavigationFooter';

export default function Item({route, navigation}) {
  const {isOwner} = route.params;
  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')} // TODO: reroute later
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.titleHeader}>Serway Physics</Text>
          </View>
          {isOwner == true ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} // TODO: reroute later
              style={styles.iconButton}>
              <Icon name="edit" size={25} color="#155e6d" />
            </TouchableOpacity>
          ) : (
            <View style={{width: 25}} />
          )}
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 440}}>
          <View style={styles.scroll}>
            <ItemCard //TODO: detect length of padding needed?
              src="https://m.media-amazon.com/images/I/513gBS+AT2L._AC_UF1000,1000_QL80_.jpg" //TODO: swipe src
              title="Serway Physics"
              nickname="Vinze"
              fullname="Siriwat J."
              datePosted="23 March 2023"
              condition="New"
              location="Chula Book Center"
              date="20 August 2020"
              return="Not Required"
              interests={[
                'Basketball',
                'Tennis',
                'Marvel Movies',
                'Comics',
                'Music',
                'Science',
              ]}
              description="Hi, I'm the problem it's me"
            />
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
          >
            <Text style={styles.buttonText}>View Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationFooter currentPage="2" />
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
    borderColor: 'white',
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
