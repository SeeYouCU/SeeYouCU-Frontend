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
import { create } from 'react-test-renderer';

export default function Item({route, navigation}) {
  const formatDate = (date) => {
    const rawDate = new Date(date);
    return rawDate.toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  };
  const {id,userid,desc,tag,img,createAt,PlaceOfPurchase,DateOfPurchase,Condition,userId,firstName,LastName} = route.params;
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
            <Text style={styles.titleHeader}>{firstName}</Text>
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
              src={img}
              title={desc}
              nickname={firstName}
              fullname={LastName}
              datePosted={formatDate(createAt)}
              condition={Condition}
              location={PlaceOfPurchase}
              date={DateOfPurchase}
              return={Condition}
              interests={['aerob']}
              description={desc}
            />
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Exchange')}
            style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
          >
            <Text style={styles.buttonText}>Send Request</Text>
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
    borderWidth: 1,
    borderColor: '#ade7e9',
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
