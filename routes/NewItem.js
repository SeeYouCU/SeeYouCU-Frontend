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
import NavigationFooter from '../components/NavigationFooter';

export default function NewItem({navigation}) {
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

  const faculty = [
    {
      name_en: 'Graduate School',
    },
    {
      name_en: 'Engineering',
    },
    {
      name_en: 'Arts',
    },
    {
      name_en: 'Science',
    },
    {
      name_en: 'Political Science',
    },
    {
      name_en: 'Architecture',
    },
    {
      name_en: 'Commerce And Accountancy',
    },
    {
      name_en: 'Education',
    },
    {
      name_en: 'Communication Arts',
    },
    {
      name_en: 'Economics',
    },
    {
      name_en: 'Medicine',
    },
    {
      name_en: 'Veterinary Science',
    },
    {
      name_en: 'Dentistry',
    },
    {
      name_en: 'Pharmaceutical Sciences',
    },
    {
      name_en: 'Law',
    },
    {
      name_en: 'Fine And Applied Arts',
    },
    {
      name_en: 'Nursing',
    },
    {
      name_en: 'Allied Health Sciences',
    },
    {
      name_en: 'Psychology',
    },
    {
      name_en: 'Sports Science',
    },
    {
      name_en: 'School of Agricultural Resources',
    },
    {
      name_en: 'College of Population Studies',
    },
    {
      name_en: 'College of Public Health Sciences',
    },
    {
      name_en: 'Language Institute',
    },
    {
      name_en: 'School of Integrated Innovation',
    },
    {
      name_en: 'Sasin Graduate Institute of Business Administion',
    },
    {
      name_en: 'The Sirindhorn Thai Language Institute',
    },
  ];

  const currentYear = new Date().getFullYear() + 6; // 6 year MDCU program

  const years = [];
  for (let i = currentYear; i >= 1917; i--) {
    years.push(i.toString());
  }

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Interests');
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleHeader}>Set Up Your Profile Page</Text>
        <View style={styles.inputContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.inputTitle}>Name</Text>
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
          </View>
          {errors.firstName && <Text>This is required.</Text>}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.inputTitle}>Return</Text>
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
                    {years.map((item, i) => {
                      return (
                        <Picker.Item
                          style={styles.pickerItem}
                          key={i}
                          label={item}
                          value={item}
                        />
                      );
                    })}
                  </Picker>
                </View>
              )}
              name="yearGraduated"
            />
            <Text style={styles.inputTitle}>Condition</Text>
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
                    {faculty.map((item, i) => {
                      return (
                        <Picker.Item
                          style={styles.pickerItem}
                          key={i}
                          label={item.name_en}
                          value={item.name_en}
                        />
                      );
                    })}
                  </Picker>
                </View>
              )}
              name="faculty"
            />
            {errors.faculty ||
              (errors.yearGraduated && <Text>This is required.</Text>)}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.inputTitle}>Place of Purchase</Text>
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
          </View>
          <Text style={styles.inputTitle}>Description</Text>
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
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => handleSubmit(onsubmit)}
            style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
          >
            <Text style={styles.buttonText}>View Request</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationFooter currentPage="2" />
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
  content: {
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    padding: '5%',
    paddingBottom: 0,
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
    marginTop: '5%',
  },
  inputTitle: {
    color: '#155E6D',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',
    paddingVertical: 5,
    marginRight: '2%',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    flex: 1,
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
    width: '25%',
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
