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
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';
import NavigationFooter from '../components/NavigationFooter';
import Icon from 'react-native-vector-icons/AntDesign';
import Chip from '../components/Chip';
import axios from 'axios';

export default function NewEvent({route, navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Ename: '',
      MaxP: '',
      date: '',
      location: '',
      meetUp: '',
      tag: '"["sport","game"]"',
      desc: '',
      img: 'null',
      userid: '3',
    },
  });

  const dates = [];
  for (let i = 1; i <= 30; i++) {
    dates.push(i.toString() + ' April 2023');
  }
  for (let i = 1; i <= 31; i++) {
    dates.push(i.toString() + ' May 2023');
  }

  const [imageActive1, setImageActive1] = React.useState(false);
  const [imageActive2, setImageActive2] = React.useState(false);

  const participantNo = [];
  for (let i = 2; i <= 20; i++) {
    participantNo.push(i.toString());
  }

  const onSubmit = async(data) => {
    console.log(data);
    await axios
    .post(`http://localhost:8080/api/posts/addPost`, data)
    .then(response => {
      console.log(data);
      navigation.navigate('Events');
    })
    .catch(error => {
      console.error(error);
    });
  };

  // const [tags, setTags] = React.useState([
  //   {
  //     key: 'AerobicDance',
  //     src: 'https://www.stylecraze.com/wp-content/uploads/2015/01/04.jpg',
  //     title: 'Aerobic Dance',
  //     isSelected: false,
  //   },
  //   {
  //     key: 'Acting',
  //     src: 'https://theatre.ua.edu/wp-content/uploads/2019/10/17-18-Vinegar-Tom-JH-1024x684.jpg',
  //     title: 'Acting',
  //     isSelected: false,
  //   },
  //   {
  //     key: 'Anime',
  //     src: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
  //     title: 'Anime',
  //     isSelected: false,
  //   },
  //   {
  //     key: 'Badminton',
  //     src: 'https://ss-i.thgim.com/public/incoming/wf966c/article66364426.ece/alternates/FREE_1200/GettyImages-1409229566.jpg',
  //     title: 'Badminton',
  //     isSelected: false,
  //   },
  //   {
  //     key: 'Basketball',
  //     src: 'https://cdn.nba.com/manage/2023/04/GettyImages-1239701619-scaled.jpg',
  //     title: 'Basketball',
  //     isSelected: false,
  //   },
  // ]);

  const [getTags, setTags] = React.useState([]);
  var tags = [];
  var tagsList = [];
  const [loadingState, setLoadingState] = React.useState('not_loaded');
  const {currTags} = route.params;
  const [item, setItem] = React.useState(currTags);

  React.useEffect(() => {
    setLoadingState('loading');
    axios
      .post(`http://localhost:8080/api/users/getUser`, {
        email: 'test11@gmail.com',
      })
      .then(response => {
        setItem(response.data);
        tags = response.data[0].tags.slice(1).slice(0, -1).split(',');
        if (currTags !== []) setTags(tags);
        setLoadingState('loaded');
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const interestList = () => {
    return getTags.map((i, index) => {
      console.log("gettags",getTags);
      tagsList.push(i.slice(1).slice(0, -1));
      return (
        // <TouchableOpacity key={index} onPress={() => removeTag(item.key)}>
        //   <View key={index} style={styles.interestItem}>
        //     <View style={styles.itemImgFrame}>
        //       <Image
        //         source={{
        //           uri: item.src,
        //         }}
        //         style={styles.itemImg}
        //       />
        //     </View>
        //     <Text style={styles.itemName}>{item.title}</Text>
        //   </View>
        // </TouchableOpacity>
        <Chip
          key={index}
          textColor="#102c3d"
          borderColor="white"
          backgroundColor="#ebf5f6"
          label={i.slice(1).slice(0, -1)}
        />
      );
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Events')}
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
            <View style={styles.eventCard}>
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
                  name="Ename"
                />
              </View>
              {errors.Ename && <Text>This is required.</Text>}
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
                        {participantNo.map((item, i) => {
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
                  name="MaxP"
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
                        {dates.map((item, i) => {
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
              </View>
              {(errors.date || errors.MaxP) && (
                <Text>This is required.</Text>
              )}
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
                  name="location"
                />
              </View>
              {errors.location && <Text>This is required.</Text>}
              <View style={{flexDirection: 'row', marginTop: '3%'}}>
                <Text style={styles.inputTitle}>Meet Up Location</Text>
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
                  name="meetUp"
                />
              </View>
              {errors.meetUp && <Text>This is required.</Text>}
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text
                  style={[
                    styles.inputTitle,
                    {marginBottom: '1%', marginTop: '3%'},
                  ]}>
                  Tags
                </Text>
                {/* <Text
                  style={[
                    styles.exception,
                    {marginBottom: '1%', marginTop: '3%'},
                  ]}>
                  *Tap to remove tag
                </Text> */}
              </View>
              {loadingState === 'loaded' && (
                <View style={styles.tagsMap}>{interestList()}</View>
                // <View>
                // <Controller
                //   control={control}
                //   rules={{
                //     required: false,
                //   }}
                //   render={({field: {onChange, onBlur, value}}) => (
                //     // <View
                //     //   style={[
                //     //     styles.textInput,
                //     //     {
                //     //       height: '15%',
                //     //       borderRadius: 15,
                //     //       paddingHorizontal: 0,
                //     //       overflow: 'hidden',
                //     //       justifyContent: 'center',
                //     //     },
                //     //   ]}
                //     //   value={value}>
                    

                //     // </View>
                //   )}
                //   name="tags"
                // />
                // </View>
              )}
              {/* <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Tags', {'initialTags': tagsList, 'page': 'NewEvent'})}
                  style={styles.button1} // TODO: reroute later, fix dimensions?
                >
                  <Text style={styles.buttonText2}>Edit Tags</Text>
                </TouchableOpacity>
              </View> */}
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
                name="desc"
              />
              {errors.desc && <Text>This is required.</Text>}
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
  interestItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 0.3 * Dimensions.get('window').width,
  },
  itemImgFrame: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 90,
    width: 90,
    borderRadius: 70,
    margin: '3%',
  },
  itemImg: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  tagsMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
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
    paddingVertical: 0,
    marginRight: '2%',
  },
  exception: {
    color: '#ff3d00',
    fontSize: 10,
    fontWeight: 300,
    textAlign: 'left',
    paddingVertical: 5,
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
