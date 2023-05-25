import * as React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const EventMapCard = ({item, type}) => {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventFrame}>
        <Image
          source={{
            uri: 'https://business.twitter.com/content/dam/business-twitter/insights/may-2018/event-targeting.png.twimg.1920.png',
          }}
          style={styles.eventPic}
        />
      </View>
      <Text style={styles.eventPicTitle}>{item.EName}</Text>
      <Text style={styles.eventFont1}>
        {item.firstName}&nbsp;{item.LastName}
      </Text>
      {type === 'item' ? (
        <View>
          <Text style={styles.eventFont1}>
            Condition:&nbsp;
            <Text style={[styles.eventFont1, {fontWeight: '600'}]}>
              {item.condition}
            </Text>
          </Text>
          <Text style={styles.eventFont1}>{item.datePosted}</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.eventFont1}>
            <Icon name="account-outline" size={15} />
            &nbsp;&nbsp;{item.maxP}{' '}
            Participants
          </Text>
          <Text style={styles.eventFont1}>
            <Icon name="map-marker-radius-outline" size={15} />
            &nbsp;&nbsp;{item.location}
          </Text>
          <Text style={styles.eventFont1}>
            <Icon name="alarm" size={15} />
            &nbsp;&nbsp;{item.date}
          </Text>
        </View>
      )}
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
    height: Dimensions.get('window').height * 0.45,
  },
  eventFrame: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 15,
  },
  eventPic: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  eventPicTitle: {
    color: '#414141',
    fontSize: 30,
    fontWeight: '500',
  },
  eventFont1: {
    color: '#414141',
    fontSize: 14,
    fontWeight: 400,
  },
});

export default EventMapCard;
