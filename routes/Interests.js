import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  ImageBackground,
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
    {
      key: 'Badminton',
      title: 'Badminton',
      img: '',
    },
    {
      key: 'Basketball',
      title: 'Basketball',
      img: '',
    },
    {
      key: 'Baking',
      title: 'Baking',
      img: '',
    },
  ];

  const intrList = () => {
    return intrArray.map(element => {
      return (
        <View key={element.key}>
          <Text>{element.title}</Text>
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
        <Text style={styles.title}>Pick Your Top 5 Interests</Text>
        {/* search bar */}
        <View>
          <Text>Your Interests</Text>
          {intrList()}
        </View>

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
  title: {
    paddingTop: 0.05 * Dimensions.get('window').width,
    backgroundColor: 'transparent',
    fontSize: 24,
    color: '#155E6D',
    textAlign: 'center',
  },
  container: {
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
  },
});
