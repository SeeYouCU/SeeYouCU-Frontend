import * as React from 'react';
import { Text, View, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';
import { getFacultyAll } from '../locales/faculty';

export default function Setup({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      goal: '',
      yearGraduated: 2023,
      faculty: '',
      major: '',
    }
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Interests')
  }

  return (
    <ImageBackground source={require('../public/bg.png')} style={styles.container}>
    <SafeAreaView style={styles.container}>
    <Button title="Back" onPress={() => navigation.goBack()} />
    <View>
      <Text>Set Up Your Profile Page</Text>
      <Text>First Name</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>}

      <Text>Goal</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="goal"
      />
      {errors.goal && <Text>This is required.</Text>}

      <Text>Year Graduated</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
            <Picker.Item label="2026" value="2026" />
            <Picker.Item label="Other" value="9999" />
          </Picker>
        )}
        name="yearGraduated"
      />
      {errors.yearGraduated && <Text>This is required.</Text>}

      <Text>Faculty</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            {
              getFacultyAll().map( (ele, i) => {
                return ( <Picker.Item key={i} label={ele.name_en} value={ele.name_en}/> )
              })
            }
          </Picker>
        )}
        name="faculty"
      />
      {errors.faculty && <Text>This is required.</Text>}

      <Text>Major</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.textInput}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="major"
      />
      {errors.major && <Text>This is required.</Text>}

      <Button title="Next" onPress={handleSubmit(onSubmit)} />
      {/* <Button
        title="Go to Setup again"
        onPress={() => navigation.push('Setup')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
});