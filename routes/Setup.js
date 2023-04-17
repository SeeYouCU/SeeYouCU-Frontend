import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import {getFacultyAll} from '../locales/faculty';

export default function Setup({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      goal: '',
      yearGraduated: '',
      faculty: '',
      major: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Interests');
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Text style={styles.titleHeader}>Set Up Your Profile Page</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>First Name</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
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
        <Text style={styles.inputTitle}>Last Name</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
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
        <Text style={styles.inputTitle}>Goal</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
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
        <Text style={styles.inputTitle}>Year Graduated</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={value}
                onValueChange={onChange}>
                <Picker.Item
                  style={styles.pickerItem}
                  label="2023"
                  value="2023"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="2024"
                  value="2024"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="2025"
                  value="2025"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="2026"
                  value="2026"
                />
                <Picker.Item
                  style={styles.pickerItem}
                  label="Other"
                  value="9999"
                />
              </Picker>
            </View>
          )}
          name="yearGraduated"
        />
        {errors.yearGraduated && <Text>This is required.</Text>}
        <Text style={styles.inputTitle}>Faculty</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={value}
                onValueChange={onChange}>
                {getFacultyAll().map((ele, i) => {
                  return (
                    <Picker.Item
                      style={styles.pickerItem}
                      key={i}
                      label={ele.name_en}
                      value={ele.name_en}
                    />
                  );
                })}
              </Picker>
            </View>
          )}
          name="faculty"
        />
        {errors.faculty && <Text>This is required.</Text>}
        <Text style={styles.inputTitle}>Major</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
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
      </View>
      <View
        style={{
          width: 'auto',
          height: '10%',
        }}>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    padding: '5%',
  },
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '5%',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    padding: '5%',
    overflow: 'scroll',
  },
  inputTitle: {
    color: '#155E6D',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',
    paddingVertical: 5,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 30,
    color: '#155E6D',
    padding: 0, // needed to override default padding
    paddingHorizontal: 20,
  },
  pickerContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    color: '#155E6D',
    width: '100%',
    height: 30,
  },
  pickerItem: {
    fontSize: 14,
  },
  buttonText: {
    color: '#155e6d',
    fontWeight: '500',
    fontSize: 20,
  },
  button2: {
    marginTop: '5%',
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
