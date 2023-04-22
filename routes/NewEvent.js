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
  Image
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-vector-icons/AntDesign';

export default function NewEvent({navigation}) {
  const {
    control,
    handleSubmit,
    // formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      maxParticipants: '',
      date: '',
      eventLocation: '',
      meetupLocation: '',
      tags: '',
      description: '',
    },
  });

  const faculty = [];
  for (let i = 1; i <= 30; i++) {
    faculty.push(i.toString()+" April 2023")
  }
  for (let i = 1; i <= 31; i++) {
    faculty.push(i.toString()+" May 2023")
  }

  const [imageActive1, setImageActive1] = React.useState(false);
  const [imageActive2, setImageActive2] = React.useState(false);

  const years = [];
  for (let i = 2; i <= 20; i++) {
    years.push(i.toString());
  }

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Events');
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Events')} // TODO: reroute later
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
                    required: false,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="name"
                />
              </View>
              {/* {errors.firstName && <Text>This is required.</Text>} */}
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
                    required: false,
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
                  name="maxParticipants"
                />
                <Text style={styles.inputTitle}>Date</Text>
                <Controller
                  control={control}
                  rules={{
                    required: false,
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
                              label={item}
                              value={item}
                            />
                          );
                        })}
                      </Picker>
                    </View>
                  )}
                  name="date"
                />
                {/* {errors.faculty ||
                  (errors.yearGraduated && <Text>This is required.</Text>)} */}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.inputTitle}>Event Location</Text>
                <Controller
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="eventLocation"
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: '3%'}}>
                <Text style={styles.inputTitle}>Meet Up Location</Text>
                <Controller //TODO: component later
                  control={control}
                  rules={{
                    required: false,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={[styles.textInput, {flex: 1}]}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="meetupLocation"
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
                  required: false,
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
                name="tags"
              />
              {/* {errors.major && <Text>This is required.</Text>} */}
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Tags')}
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
                  required: false,
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
                name="description"
              />
              {/* {errors.major && <Text>This is required.</Text>} */}
              <Text
                style={[
                  styles.inputTitle,
                  {marginBottom: '1%', marginTop: '3%'},
                ]}>
                Image
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: '50%',
                }}>
                <TouchableOpacity onPress={() => setImageActive1(true)}>
                  <View
                    style={{
                      width: Dimensions.get('window').width * 0.37,
                      height: Dimensions.get('window').width * 0.37,
                      backgroundColor: '#d9d9d9',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }} //TODO: can upload pic
                  >
                    {imageActive1 == false ? (
                      <Icon
                        name="camerao"
                        size={40}
                        color="#155E6D"
                        style={{position: 'absolute', zIndex: 0}}
                      />
                    ) : (
                      <Image
                        source={{
                          uri: 'https://cms.dmpcdn.com/food/2022/10/05/89016280-4482-11ed-baca-5b60fe5a12ea_webp_original.jpg',
                        }}
                        style={{
                          resizeMode: 'cover',
                          width: '100%',
                          height: '100%',
                          borderRadius: 15,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setImageActive2(true)}>
                  <View
                    style={{
                      width: Dimensions.get('window').width * 0.37,
                      height: Dimensions.get('window').width * 0.37,
                      backgroundColor: '#d9d9d9',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }} //TODO: can upload pic
                  >
                    {imageActive2 == false ? (
                      <Icon
                        name="camerao"
                        size={40}
                        color="#155E6D"
                        style={{position: 'absolute', zIndex: 0}}
                      />
                    ) : (
                      <Image
                        source={{
                          uri: 'https://media.timeout.com/images/105930806/image.jpg',
                        }}
                        style={{
                          resizeMode: 'cover',
                          width: '100%',
                          height: '100%',
                          borderRadius: 15,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
              {/* {errors.major && <Text>This is required.</Text>} */}
            </View>
          </View>
        </ScrollView>
        <View style={styles.floatingButton}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
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
