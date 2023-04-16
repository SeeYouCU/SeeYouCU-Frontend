import * as React from 'react';
import { Text, View, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import { getFacultyAll } from '../locales/faculty';

export default function Setup({navigation}) {
  const [selectedFaculty, setSelectedFaculty] = React.useState('-');
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
    <Text style={styles.titleHeader}>Set Up Your Profile Page</Text>
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>First Name</Text>
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

      <Text style={styles.inputTitle}>Last Name</Text>
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

      <Text style={styles.inputTitle}>Goal</Text>
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

      <Text style={styles.inputTitle}>Year Graduated</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedFaculty}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedFaculty(itemValue)
          }>
            <Picker.Item style={styles.pickerItem} label="2023" value="2023" />
            <Picker.Item style={styles.pickerItem} label="2024" value="2024" />
            <Picker.Item style={styles.pickerItem} label="2025" value="2025" />
            <Picker.Item style={styles.pickerItem} label="2026" value="2026" />
            <Picker.Item style={styles.pickerItem} label="Other" value="9999" />
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
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedFaculty}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedFaculty(itemValue)
          }>
            {
              getFacultyAll().map( (ele, i) => {
                return ( <Picker.Item style={styles.pickerItem} key={i} label={ele.name_en} value={ele.name_en}/> )
              })
            }
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

      {/* <Button
        title="Go to Setup again"
        onPress={() => navigation.push('Setup')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
    <Button title="Next" onPress={handleSubmit(onSubmit)} />
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
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    background: 'linear-gradient(113.96deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.5) 100%)',
    justifyContent: 'center',
    height: '60%',
    padding: '10%',
    margin: '5%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 25
  },
  inputTitle: {
    color: '#155E6D',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',
    paddingBottom: 3,
    paddingTop: 5,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 24,
    color: '#155E6D',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    paddingBottom: 0,
    alignSelf: 'center'
  },
  pickerContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyItems: 'center',
    alignItems: 'center',
    width: '40%'
  },
  picker: {
    color: '#155E6D',
    width: '100%',
    height: 30,
    alignItems: 'center'
  },
  pickerItem: {
    fontSize: 14,
    
  }
});