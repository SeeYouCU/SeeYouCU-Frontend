import * as React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Chip from './Chip';

const UserMatch = props => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileFrame}>
        <Image
          source={{
            uri: props.src,
          }}
          style={styles.profilePic}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={[styles.profileFont1, {marginRight: '5%'}]}>
              {props.nickname}
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Chip
              textColor="#102c3d"
              borderColor="#06bac0"
              backgroundColor="white"
              label={props.event}
            />
          </View>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: 'white',
    borderRadius: 12,
    padding: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%'
  },
  profileFrame: {
    overflow: 'hidden',
    height: Dimensions.get('window').width * 0.18,
    width: Dimensions.get('window').width * 0.18,
    borderRadius: 50,
    marginRight: '5%',
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
    color: '#102c3d',
    fontSize: 18,
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
    marginTop: '5%',
  },
});

export default UserMatch;
