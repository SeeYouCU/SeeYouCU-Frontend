import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-vector-icons/AntDesign';

export default function NewEvent({navigation}) {
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
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')} // TODO: reroute later
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.titleHeader}>New Event</Text>
          </View>
          <View style={{width: 25}} />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 400,
          }}>
          <View style={styles.scroll}>
            <View
              style={styles.eventCard}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.inputTitle}>Name</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="firstName"
                />
              </View>
              {errors.firstName && <Text>This is required.</Text>}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: '3%',
                }}>
                <Text style={styles.inputTitle}>Max Participants</Text>
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
                <Text style={styles.inputTitle}>Date</Text>
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
                <Text style={styles.inputTitle}>Event Location</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="firstName"
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: '3%'}}>
                <Text style={styles.inputTitle}>Meet Up Location</Text>
                <Controller //TODO: component later
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="firstName"
                />
              </View>
              <Text
                style={[
                  styles.inputTitle,
                  {marginBottom: '1%', marginTop: '3%'},
                ]}>
                Tags
              </Text>
              <Controller //component later
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={[
                      styles.textInput,
                      {height: '20%', borderRadius: 15},
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="major"
              />
              {errors.major && <Text>This is required.</Text>}
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => handleSubmit(onsubmit)}
                  style={styles.button1} // TODO: reroute later, fix dimensions?
                >
                  <Text style={styles.buttonText2}>Add Tags</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  styles.inputTitle,
                  {marginBottom: '1%', marginTop: '3%'},
                ]}>
                Description
              </Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={[
                      styles.textInput,
                      {height: '20%', borderRadius: 15},
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="major"
              />
              {errors.major && <Text>This is required.</Text>}
              <Text
                style={[
                  styles.inputTitle,
                  {marginBottom: '1%', marginTop: '3%'},
                ]}>
                Image
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between', height: '50%'}}>
                <View
                  style={{
                    width: Dimensions.get('window').width * 0.37,
                    height: Dimensions.get('window').width * 0.37,
                    backgroundColor: '#d9d9d9',
                    borderRadius: 15,
                  }} //TODO: can upload pic
                ></View>
                <View
                  style={{
                    width: Dimensions.get('window').width * 0.37,
                    height: Dimensions.get('window').width * 0.37,
                    backgroundColor: '#d9d9d9',
                    borderRadius: 15,
                  }} //TODO: can upload pic
                ></View>
              </View>
              {errors.major && <Text>This is required.</Text>}
            </View>
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={() => handleSubmit(onsubmit)}
            style={[styles.button2, {width: '100%', height: '70%'}]} // TODO: reroute later, fix dimensions?
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigationFooter currentPage="1" />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    height: 'auto',
    marginBottom: '2%',
  },
  titleHeader: {
    color: '#155E6D',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  eventCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: '5%',
    marginTop: '5%',
  },
  scroll: {
    flex: 1,
    flexDirection: 'column',
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
  button2: {
    marginTop: '5%',
    borderColor: 'white',
    borderRadius: 60,
    backgroundColor: '#8ddee1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 2,
    shadowColor: 'black',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ade7e9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  button1: {
    marginTop: '5%',
    borderColor: 'white',
    borderRadius: 15,
    backgroundColor: '#8ddee1',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 5,
    shadowColor: 'black',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#ade7e9',
    width: '70%',
    height: Dimensions.get('window').height * 0.05,
  },
  buttonText2: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
  floatingButton: {
    width: Dimensions.get('window').width,
    height: '12%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
});
