import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationFooter from '../components/NavigationFooter';
import Chip from '../components/Chip';
import axios from 'axios';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Account({navigation}) {
  const [getTags, setTags] = React.useState([]);
  var tags = [];
  const [loadingState, setLoadingState] = React.useState('not_loaded');
  const [item, setItem] = React.useState([]);
  const [getUserInfo, setUserInfo] = React.useState([]);

  React.useEffect(() => { 
    GoogleSignin.configure({
      webClientId:
        '175282312397-s2jkpdm3rd5qqaieh03q5aq4cgl9phol.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      setUserInfo({ currentUser });
    };
    getCurrentUser();
    axios
      .post(`http://10.0.2.2:8080/api/users/getUser`, {
        email: getUserInfo.currentUser.user.email,
      })
      .then(response => {
        setItem(response.data);
        tags = response.data[0].tags.slice(1).slice(0, -1).split(',');
        setTags(tags);
        setLoadingState('loaded');
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const interestList = () => {
    return getTags.map((i, index) => {
      return (
        <Chip
          key={index}
          textColor="#102c3d"
          borderColor="white"
          backgroundColor="#ebf5f6"
          label={i.slice(1).slice(0, -1)}
        />
      );
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}>
          <Icon name="left" size={25} color="#155e6d" />
        </TouchableOpacity>
        <View style={styles.titleHeader}>
          <Text style={styles.titleHeader}>Profile</Text>
        </View>
        <View style={{width: 25}} />
      </View>
      {loadingState === 'loaded' && (
        <View style={styles.content}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.profileFrame}>
              <Image
                source={{
                  uri: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102281644397826068/4877415126921268548.503FA07FE94C48BDB94D4B10F02379FE.23043021.jpg',
                }}
                style={styles.profilePhoto}
              />
            </View>
            <View style={styles.textGrid}>
              <Text style={styles.subheader}>{item[0].FirstName}</Text>
              <Text style={styles.description}>
                {item[0].FirstName}&nbsp;{item[0].LastName}
              </Text>
              <Text style={styles.description}>{item[0].faculty}</Text>
              <Text style={styles.description}>{item[0].major}</Text>
              <Chip
                textColor="#102c3d"
                borderColor="#06bac0"
                backgroundColor="white"
                label={item[0].Goals}
              />
            </View>
          </View>
          <Text style={styles.subheader2}>Bio</Text>
          <Text style={styles.bio}>Just enjoying the ride.</Text>
          <Text style={styles.subheader2}>Interests</Text>
          <View style={styles.tagsMap}>{interestList()}</View>
        </View>
      )}
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
    width: Dimensions.get('window').width,
    paddingHorizontal: '5%',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
  iconButton: {
    height: 'auto',
    marginBottom: '2%',
  },
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  profileFrame: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    borderRadius: 250,
    overflow: 'hidden',
    marginRight: '5%',
  },
  profilePhoto: {
    height: 150,
    width: 150,
  },
  tagsMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  textGrid: {
    alignItems: 'flex-start',
  },
  description: {
    color: 'black',
    fontWeight: 400,
    fontSize: 15,
    flex: 1,
  },
  subheader: {
    color: '#414141',
    fontWeight: 600,
    fontSize: 22,
    marginBottom: '5%',
    flex: 1,
  },
  inputTitle: {
    color: '#155E6D',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',
    paddingVertical: 5,
    marginRight: '2%',
  },
  bio: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
    height: '20%',
    borderRadius: 20,
    color: 'black',
    fontSize: 15,
    marginBottom: '5%',
  },
  subheader2: {
    color: '#414141',
    fontWeight: 600,
    fontSize: 18,
    marginVertical: '3%',
  },
  interestItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 0.3 * Dimensions.get('window').width,
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
});
