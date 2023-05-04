import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationFooter from '../components/NavigationFooter';

export default function Settings({navigation}) {
  const handlePress = async () => {
    const url = 'https://drive.google.com/file/d/1smMqvGLNFEUS4aWRL8S9a7_EnNYNhU2w/view?usp=sharing'; // Replace with your Google Drive link
    const supported = await Linking.canOpenURL(url);
  
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Unable to open ${url}`);
    }
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.titleHeader}>
        <Text style={styles.titleHeader}>Settings</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.settingsHeader}>Account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}
        > 
          <View style={styles.settingsRow}>
            <Icon name="person-outline" size={25} color="black" />
            <Text style={styles.settingsText}>Personal and account information</Text>
          </View>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: 'black', width: Dimensions.get('window').width}} />
        <TouchableOpacity onPress={()=>{ Linking.openURL('https://drive.google.com/file/d/1smMqvGLNFEUS4aWRL8S9a7_EnNYNhU2w/view?usp=sharing')}} //TODO: reroute later
        > 
          <View style={styles.settingsRow}>
            <Icon name="help-outline" size={25} color="black" />
            <Text style={styles.settingsText}>User Manual</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.settingsHeader}>Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} //TODO: reroute later
        > 
          <View style={styles.settingsRow}>
            <Icon name="logout" size={25} color="black" />
            <Text style={styles.settingsText}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <NavigationFooter currentPage="3" />
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
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    padding: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
  },
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: '2%',
  },
  settingsHeader: {
    color: '#434542',
    fontWeight: 700,
    fontSize: 20,
    marginTop: '3%'
  },
  settingsRow: {
    marginVertical: '2%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingsText: {
    color: 'black',
    fontWeight: 400,
    fontSize: 15,
    marginLeft: '2%',
  },
});
