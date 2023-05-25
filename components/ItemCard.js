import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Chip from './Chip';

const ItemCard = props => {
  return (
    <View>
      <View style={styles.itemFrame}>
        <Image
          source={{
            uri: 'https://www.smallofficeideas.com/wp-content/uploads/2013/01/stationery-for-small-or-home-office.jpg',
          }}
          style={styles.itemPic}
        />
      </View>
      <View style={styles.itemCard}>
        <Text style={styles.itemPicTitle}>{props.title}</Text>
        <Text style={styles.itemFont3}>
          {props.nickname}&nbsp;{props.fullname}&nbsp;·&nbsp;Posted&nbsp;
          {props.datePosted}
        </Text>
        <Text style={styles.itemFont1}>
          Condition:&nbsp;{props.condition}
        </Text>
        <Text style={styles.itemFont1}>
          Place of Purchase:&nbsp;{props.location}
        </Text>
        <Text style={styles.itemFont1}>
          Date of Purchase:&nbsp;{props.date}
        </Text>
        <Text style={styles.itemFont1}>
          Return:&nbsp;{props.return}
        </Text>
        <Text style={styles.itemFont2}>Tags</Text>
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
        <Text style={styles.itemFont2}>Description</Text>
        <Text style={styles.itemFont3}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
    marginTop: '5%',
  },
  itemFrame: {
    overflow: 'hidden',
    height: '45%',
    borderRadius: 15,
  },
  itemPic: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  itemPicTitle: {
    color: '#414141',
    fontSize: 40,
    fontWeight: '500',
  },
  itemFont1: {
    color: '#414141',
    fontSize: 14,
    fontWeight: 400,
    marginTop: '1%',
  },
  itemFont2: {
    color: '#414141',
    fontSize: 18,
    fontWeight: 600,
    marginTop: '3%',
    marginBottom: '2%',
  },
  itemFont3: {
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

export default ItemCard;
