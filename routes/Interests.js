import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useForm} from 'react-hook-form';

export default function Interests({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      interests: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Match');
  };

  const interests = [
    {
      key: 'AerobicDance',
      title: 'Aerobic Dance',
      isSelected: false,
    },
    {
      key: 'Acting',
      title: 'Acting',
      isSelected: false,
    },
    {
      key: 'Anime',
      title: 'Anime',
      isSelected: false,
    },
  ];

  const [selectedIntr, setSelectedIntr] = useState([]);

  const toggleSelection = key => {
    const index = interests.findIndex(item => item.key === key);
    const newInterests = [...interests];
    newInterests[index].isSelected = !newInterests[index].isSelected;
    setSelectedIntr(
      newInterests.filter(item => item.isSelected).map(item => item.key),
    );
    if (!newInterests[index].isSelected) {
      newInterests[index].isSelected = false;
    }
  };

  const intrList = () => {
    return interests.map((item, index) => {
      const intrIcon = selectedIntr.includes(item.key)
        ? require('../public/checked.png')
        : require('../public/anime.png');
      return (
        <TouchableOpacity key={index} onPress={() => toggleSelection(item.key)}>
          <View style={styles.interest}>
            <Image source={intrIcon} />
            <Text style={styles.h3}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
      <Text style={styles.h1}>Pick Your Top 5 Interests</Text>
      <Text style={styles.search}>Search</Text>
      <View style={styles.interestPan}>
        <View style={styles.row}>{intrList()}</View>
        <View style={styles.row}>{intrList()}</View>
        <View style={styles.row}>{intrList()}</View>
        <View style={styles.row}>{intrList()}</View>
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btn}>Next {'>'}</Text>
      </TouchableOpacity>
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
  interestPan: {
    alignItems: 'center',
  },
  h1: {
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
  row: {
    flexDirection: 'row',
  },
  h3: {
    color: '#155E6D',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 0.01 * Dimensions.get('window').width,
  },
  interest: {
    alignItems: 'center',
    width: 0.3 * Dimensions.get('window').width,
    margin: 0.01 * Dimensions.get('window').width,
    padding: 0.01 * Dimensions.get('window').width,
  },
  btn: {
    textAlign: 'right',
    paddingRight: 0.05 * Dimensions.get('window').width,
    color: '#155E6D',
    fontSize: 20,
    fontWeight: 600,
  },
});
