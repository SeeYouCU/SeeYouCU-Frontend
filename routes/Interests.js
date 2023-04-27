import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Interests({navigation}) {
  const [getInterests, setInterests] = React.useState([]);

  const onSubmit = () => {
    console.log(getInterests);
  };

  const interests = [
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
    {
      key: 'Baking',
      src: 'https://static.toiimg.com/photo/75536288.cms',
      title: 'Baking',
      isSelected: false,
    },
    {
      key: 'Coding',
      src: 'https://www.stylecraze.com/wp-content/uploads/2015/01/04.jpg',
      title: 'Coding',
      isSelected: false,
    },
    {
      key: 'Coffee',
      src: 'https://theatre.ua.edu/wp-content/uploads/2019/10/17-18-Vinegar-Tom-JH-1024x684.jpg',
      title: 'Coffee',
      isSelected: false,
    },
    {
      key: 'Cosplay',
      src: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
      title: 'Cosplay',
      isSelected: false,
    },
    {
      key: 'Crafting',
      src: 'https://ss-i.thgim.com/public/incoming/wf966c/article66364426.ece/alternates/FREE_1200/GettyImages-1409229566.jpg',
      title: 'Crafting',
      isSelected: false,
    },
    {
      key: 'Cycling',
      src: 'https://cdn.nba.com/manage/2023/04/GettyImages-1239701619-scaled.jpg',
      title: 'Cycling',
      isSelected: false,
    },
    {
      key: 'Camping',
      src: 'https://static.toiimg.com/photo/75536288.cms',
      title: 'Camping',
      isSelected: false,
    },
    {
      key: 'Drawing',
      src: 'https://www.stylecraze.com/wp-content/uploads/2015/01/04.jpg',
      title: 'Drawing',
      isSelected: false,
    },
    {
      key: 'Dancing',
      src: 'https://theatre.ua.edu/wp-content/uploads/2019/10/17-18-Vinegar-Tom-JH-1024x684.jpg',
      title: 'Dancing',
      isSelected: false,
    },
    {
      key: 'Dodgeball',
      src: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
      title: 'Dodgeball',
      isSelected: false,
    },
    {
      key: 'Esports',
      src: 'https://ss-i.thgim.com/public/incoming/wf966c/article66364426.ece/alternates/FREE_1200/GettyImages-1409229566.jpg',
      title: 'E-Sports',
      isSelected: false,
    },
    {
      key: 'Eshopping',
      src: 'https://cdn.nba.com/manage/2023/04/GettyImages-1239701619-scaled.jpg',
      title: 'E-Shopping',
      isSelected: false,
    },
    {
      key: 'Eating',
      src: 'https://static.toiimg.com/photo/75536288.cms',
      title: 'Eating',
      isSelected: false,
    },
  ];

  const [selectedInterest, setSelectedInterest] = useState([]);

  const handleSelectPill = (id, select) => {
    const temp = selectedInterest;
    if (select == true) setSelectedInterest({data: [...temp, id]});
    if (select == false)
      setSelectedInterest({
        data: temp.filter(item => JSON.stringify(item) != JSON.stringify(id)),
      });
    console.log('Selected', selectedInterest);
    navigation.navigate('Match');
  };

  const toggleSelection = key => {
    const currInterests = selectedInterest;
    if (selectedInterest.length < 5 && !selectedInterest.includes(key)) {
      setSelectedInterest([...currInterests, key]);
    } else if (selectedInterest.includes(key)) {
      setSelectedInterest(
        selectedInterest.filter(
          item => JSON.stringify(item) != JSON.stringify(key),
        ),
      );
    }
  };

  const interestList = () => {
    return interests.map((item, index) => {
      const imageBlur = selectedInterest.includes(item.key) ? 30 : 0;
      return (
        <TouchableOpacity key={index} onPress={() => toggleSelection(item.key)}>
          <View style={styles.interestItem}>
            <View style={styles.itemImgFrame}>
              <Image
                source={{
                  uri: item.src,
                }}
                blurRadius={imageBlur}
                style={styles.itemImg}
              />
              {selectedInterest.includes(item.key) ? (
                <Icon
                  name="checkmark"
                  size={32}
                  color="white"
                  style={{position: 'absolute', zIndex: 0}}
                />
              ) : null}
            </View>
            <Text style={styles.itemName}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <Text style={styles.title}>Pick Your Top 5 Interests</Text>
      <Input
        isSearch="true"
        placeholder="Search"
        style={{marginTop: '5%', marginBottom: '5%'}}
      />
      <ScrollView fadingEdgeLength={100}>
        <View style={styles.interestMap}>{interestList()}</View>
      </ScrollView>
      {selectedInterest.length == 5 ? (
        <TouchableOpacity onPress={handleSelectPill}>
          <Text style={styles.nextBtn}>Next {'>'}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={[styles.nextBtn, {color: '#8daeb5'}]}>Next {'>'}</Text>
      )}
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 0.08 * Dimensions.get('window').width,
    fontSize: 24,
    color: '#155E6D',
    textAlign: 'center',
    fontWeight: 700,
  },
  search: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 0.03 * Dimensions.get('window').width,
    paddingLeft: 0.04 * Dimensions.get('window').width,
    padding: 0.01 * Dimensions.get('window').width,
  },
  itemName: {
    color: '#155E6D',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    paddingTop: 0.01 * Dimensions.get('window').width,
  },
  interestItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 0.3 * Dimensions.get('window').width,
    marginBottom: '20%',
  },
  nextBtn: {
    textAlign: 'right',
    paddingRight: 0.05 * Dimensions.get('window').width,
    color: '#155E6D',
    fontSize: 20,
    fontWeight: 600,
    marginTop: '5%',
  },
});
