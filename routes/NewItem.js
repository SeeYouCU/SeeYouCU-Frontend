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
import axios from 'axios';

export default function NewItem({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      return: '',
      condition: '',
      PlaceOfPurchase: '',
      DateOfPurchase: '',
      desc: '',
      tag: '"["sport","game"]"',
    },
  });

  const returnOptions = ['Yes', 'No'];

  const [tags, setTags] = React.useState([
    {
      key: 'AerobicDance',
      src: 'https://www.stylecraze.com/wp-content/uploads/2015/01/04.jpg',
      title: 'Aerobic Dance',
      isSelected: false,
    },
    {
      key: 'Acting',
      src: 'https://theatre.ua.edu/wp-content/uploads/2019/10/17-18-Vinegar-Tom-JH-1024x684.jpg',
      title: 'Acting',
      isSelected: false,
    },
    {
      key: 'Anime',
      src: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
      title: 'Anime',
      isSelected: false,
    },
    {
      key: 'Badminton',
      src: 'https://ss-i.thgim.com/public/incoming/wf966c/article66364426.ece/alternates/FREE_1200/GettyImages-1409229566.jpg',
      title: 'Badminton',
      isSelected: false,
    },
    {
      key: 'Basketball',
      src: 'https://cdn.nba.com/manage/2023/04/GettyImages-1239701619-scaled.jpg',
      title: 'Basketball',
      isSelected: false,
    },
  ]);

  const interestList = () => {
    return tags.map((item, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => removeTag(item.key)}>
          <View key={index} style={styles.interestItem}>
            <View style={styles.itemImgFrame}>
              <Image
                source={{
                  uri: item.src,
                }}
                style={styles.itemImg}
              />
            </View>
            <Text style={styles.itemName}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  const removeTag = key => {
    setTags(tags => tags.filter(tag => tag.key !== key));
  };

  const [imageActive1, setImageActive1] = React.useState(false);
  const [imageActive2, setImageActive2] = React.useState(false);

  const conditionOptions = ['Brand New', 'Like New', 'Lightly Used', 'Well Used'];

  const onSubmit = async(data) => {
    console.log(data);
    await axios
    .post(`http://localhost:8080/api/posts/addItem`, data)
    .then(response => {
      navigation.navigate('Exchange');
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Exchange')} // TODO: reroute later
            style={styles.iconButton}>
            <Icon name="left" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.titleHeader}>New Item</Text>
          </View>
          <View style={{width: 25}} />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 400,
          }}>
          <View style={styles.scroll}>
            <View style={styles.itemCard}>
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
                  name="name"
                />
              </View>
              {errors.name && <Text>This is required.</Text>}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: '3%',
                }}>
                <Text style={styles.inputTitle}>Condition</Text>
                <Controller //TODO swap later
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
                        {conditionOptions.map((item, i) => {
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
                  name="condition"
                />
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
                        {returnOptions.map((item, i) => {
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
                  name="return"
                />
              </View>
              {(errors.condition || errors.return) && <Text>This is required.</Text>}
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.inputTitle}>Place of Purchase</Text>
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
                  name="PlaceOfPurchase"
                />
              </View>
              {errors.PlaceOfPurchase && <Text>This is required.</Text>}
              <View style={{flexDirection: 'row', marginTop: '3%'}}>
                <Text style={styles.inputTitle}>Date of Purchase</Text>
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
                  name="DateOfPurchase"
                />
              </View>
              {errors.DateOfPurchase && <Text>This is required.</Text>}
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text
                  style={[
                    styles.inputTitle,
                    {marginBottom: '1%', marginTop: '3%'},
                  ]}>
                  Tags
                </Text>
                <Text
                  style={[
                    styles.exception,
                    {marginBottom: '1%', marginTop: '3%'},
                  ]}>
                  *Tap to remove tag
                </Text>
              </View>
              <Controller //component later
                control={control}
                rules={{
                  required: false,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View
                    style={[
                      styles.textInput,
                      {height: '15%', borderRadius: 15, paddingHorizontal: 0, overflow: 'hidden', justifyContent: 'center'},
                    ]}
                    value={value}
                  >
                    <View style={styles.interestMap}>{interestList()}</View>
                  </View>
                )}
                name="tag"
              />
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
                          uri: 'https://ae01.alicdn.com/kf/Hc55cf4a8d3d14d0e8ffe178da4a39703N.jpg',
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
                          uri: 'https://ambidata.io/wp/wp-content/uploads/2018/03/M5Stack_BME280.jpg',
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
  interestMap: {
    flexDirection: 'row',
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
  itemCard: {
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
  exception: {
    color: '#ff3d00',
    fontSize: 10,
    fontWeight: 300,
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
