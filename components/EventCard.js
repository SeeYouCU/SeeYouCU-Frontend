import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Chip from './Chip';

const EventCard = props => {
  return (
    <View>
      <View style={styles.eventFrame}>
        <Image
          source={{
            uri: props.src,
          }}
          style={styles.eventPic} //TODO: horizontal scrollable
        />
      </View>
      <View style={styles.eventCard}>
        <Text style={styles.eventPicTitle}>{props.title}</Text>
        <Text style={styles.eventFont3}>
          "{props.nickname}"&nbsp;{props.fullname}&nbsp;·&nbsp;Posted&nbsp;
          {props.datePosted}
        </Text>
        <Text style={styles.eventFont1}>
          <Icon name="account-outline" size={15} />
          &nbsp;&nbsp;{props.currentParticipants}/{props.maxParticipants}{' '}
          Participants
        </Text>
        <Text style={styles.eventFont1}>
          <Icon name="map-marker-radius-outline" size={15} />
          &nbsp;&nbsp;{props.location}
        </Text>
        <Text style={styles.eventFont1}>
          <Icon name="alarm" size={15} />
          &nbsp;&nbsp;{props.datetime}
        </Text>
        <Text style={styles.eventFont1}>
          <Icon name="map-marker-account-outline" size={15} />
          &nbsp;&nbsp;{props.meetupLocation}
        </Text>
        <Text style={styles.eventFont2}>Tags</Text>
        <View style={styles.tagsMap}>
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
        <Text style={styles.eventFont2}>Description</Text>
        <Text style={styles.eventFont3}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
    marginTop: '5%',
  },
  eventFrame: {
    overflow: 'hidden',
    height: '45%',
    borderRadius: 15,
  },
  eventPic: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  eventPicTitle: {
    color: '#414141',
    fontSize: 40,
    fontWeight: '500',
  },
  eventFont1: {
    color: '#414141',
    fontSize: 14,
    fontWeight: 400,
    marginTop: '1%',
  },
  eventFont2: {
    color: '#414141',
    fontSize: 18,
    fontWeight: 600,
    marginTop: '3%',
    marginBottom: '2%',
  },
  eventFont3: {
    color: '#414141',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: '3%',
  },
  tagsMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default EventCard;
