import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

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

  const intrArray = [
    {
      key: 'AerobicDance',
      title: 'Aerobic Dance',
      img: '',
    },
    {
      key: 'Acting',
      title: 'Acting',
      img: '',
    },
    {
      key: 'Anime',
      title: 'Anime',
      img: '',
    },
  ];

  const intrList = () => {
    return intrArray.map(element => {
      return (
        <View key={element.key} style={styles.interest}>
          <Image source={require('../public/anime.png')} />
          <Text style={styles.h3}>{element.title}</Text>
        </View>
      );
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View>
        {/* <Button title="Back" onPress={() => navigation.goBack()} /> */}
        <Text style={styles.h1}>Pick Your Top 5 Interests</Text>
        <Text>(Will be search bar)</Text>
        <View style={styles.content}>{intrList()}</View>
        <View style={styles.content}>{intrList()}</View>
        <View style={styles.content}>{intrList()}</View>
        <View style={styles.content}>{intrList()}</View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="interests"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <Button title="Done" onPress={handleSubmit(onSubmit)} />
      </View>
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
  h1: {
    paddingTop: 0.08 * Dimensions.get('window').width,
    fontSize: 24,
    color: '#155E6D',
    textAlign: 'center',
    fontWeight: 700,
  },
  content: {
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
});
