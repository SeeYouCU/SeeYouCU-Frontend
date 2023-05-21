import React, {useState, useRef} from 'react';
import {
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Chip from './Chip';

const ProfileCard = (props) => {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef(null);

  const handlePressIn = () => {
    timeoutRef.current = setTimeout(() => setIsHeld(true), 2000);
  };

  const handlePressOut = () => {
    clearTimeout(timeoutRef.current);
    if (isHeld) {
      setIsHeld(false);
      console.log('rejected');
    } else {
      console.log('accepted');
    }
    setIsHeld(false);
  };

  return (
    <View style={styles.profileCard}>
      <View style={styles.profileFrame}>
        <Image
          source={{
            uri: props.src,
          }}
          style={styles.profilePic}
        />
        <Image
          source={require('../public/inset.png')}
          style={[styles.profilePic, {position: 'absolute', zIndex: 0}]}
        />
        <View style={styles.profileDescription}>
          <Text style={styles.profilePicTitle}>{props.nickname}</Text>
          <Chip
            textColor="#102c3d"
            borderColor="#06bac0"
            backgroundColor="white"
            label={props.event}
          />
        </View>
      </View>
      <View style={styles.profileGrid}>
        <Text style={styles.profileFont1}>
          <Icon name="user" size={15} />
          &nbsp;&nbsp;{props.name}, {props.age}
        </Text>
        <Text style={styles.profileFont1}>
          <Icon name="graduation" size={15} style={{marginRight: 20}} />
          &nbsp;&nbsp;{props.faculty} ({props.major})
        </Text>
        <Text style={styles.profileFont1}>
          <Icon name="info" size={15} />
          &nbsp;&nbsp;{props.class}
        </Text>
        {props.isMatch == 'true' ? (
          <View
            style={[
              {position: 'absolute', zIndex: 1, right: 0, bottom: 0},
              styles.buttonArea,
            ]}>
            <TouchableNativeFeedback
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={props.onRemove}
              background={
                Platform.OS === 'android'
                  ? TouchableNativeFeedback.Ripple(
                      'rgba(140, 140, 140, 0.2)',
                      false,
                    )
                  : undefined
              }>
              <View
                style={[
                  {backgroundColor: isHeld ? '#ff3d00' : '#06bac0'},
                  styles.buttonArea,
                ]}>
                <Image
                  source={require('../public/seeyou.png')}
                  style={{height: '60%', width: '60%'}}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        ) : null}
      </View>
      <Text style={styles.profileFont2}>{props.nickname} said,</Text>
      <Text style={styles.profileFont3}>"{props.bio}"</Text>
      <Text style={styles.profileFont2}>Interests</Text>
      <View style={styles.interestMap}>
        {props.interests.map(i => {
          return (
            <Chip
              key={i}
              textColor="#102c3d"
              borderColor="white"
              backgroundColor="#ebf5f6"
              label={i}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
  },
  profileFrame: {
    display: 'flex',
    overflow: 'hidden',
    height: '40%',
    borderRadius: 15,
    margin: '1%',
  },
  profilePic: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  profileDescription: {
    margin: '5%',
    marginTop: 'auto',
  },
  profilePicTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '500',
  },
  profileFont1: {
    color: '#414141',
    fontSize: 15,
    fontWeight: 500,
    marginTop: '3%',
  },
  profileFont2: {
    color: '#414141',
    fontSize: 18,
    fontWeight: 600,
    marginTop: '5%',
    marginBottom: '2%',
  },
  profileFont3: {
    color: '#414141',
    fontSize: 18,
    fontWeight: 400,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  interestMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  buttonArea: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
});

export default ProfileCard;
