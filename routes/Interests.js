import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function Interests({route, navigation}) {
  const [searchText, setSearchText] = React.useState('');

  const interests = [
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
      src: 'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg',
      title: 'Coding',
      isSelected: false,
    },
    {
      key: 'Coffee',
      src: 'https://vaya.in/recipes/wp-content/uploads/2018/05/Coffee.jpg',
      title: 'Coffee',
      isSelected: false,
    },
    {
      key: 'Cosplay',
      src: 'https://ae01.alicdn.com/kf/Hf430a3e9595c4c46a8f3e8b7544b2fb1J/Keqing-Genshin-Impact-Cosplay.jpg',
      title: 'Cosplay',
      isSelected: false,
    },
    {
      key: 'Crafting',
      src: 'https://media.timeout.com/images/103873538/750/422/image.jpg',
      title: 'Crafting',
      isSelected: false,
    },
    {
      key: 'Cycling',
      src: 'https://cdn.mos.cms.futurecdn.net/4qrW9mHjeDWK5hSFuTMkk3.jpg',
      title: 'Cycling',
      isSelected: false,
    },
    {
      key: 'Camping',
      src: 'https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/1:1/w_1636,h_1636,c_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg',
      title: 'Camping',
      isSelected: false,
    },
    {
      key: 'Drawing',
      src: 'https://i.pinimg.com/originals/a0/f8/87/a0f887e171ba2a0566f5045c4d84c7d0.jpg',
      title: 'Drawing',
      isSelected: false,
    },
    {
      key: 'Dancing',
      src: 'https://cdn.vox-cdn.com/thumbor/LSPYbV0vDNujEoAbzFaVZf_PPI0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24038406/165303_6322_3955ffea.jpeg',
      title: 'Dancing',
      isSelected: false,
    },
    {
      key: 'Dodgeball',
      src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg',
      title: 'Dodgeball',
      isSelected: false,
    },
    {
      key: 'Game',
      src: 'https://cdn.mos.cms.futurecdn.net/3UrmuKyTpK8TavGvEajuGP.jpg',
      title: 'E-Sports',
      isSelected: false,
    },
    {
      key: 'Shopping',
      src: 'https://www.hostbooks.com/in/wp-content/uploads/2017/07/eshopping-1.jpg',
      title: 'Shopping',
      isSelected: false,
    },
    {
      key: 'Eating',
      src: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg',
      title: 'Eating',
      isSelected: false,
    },
    {
      key: 'Sports',
      src: 'https://tsblogadmin.teamsnap.com/wp-content/uploads/2016/01/Multiple-Sports.jpg',
      title: 'Sports',
      isSelected: false,
    },
  ];
  const [filteredData, setFilteredData] = React.useState(interests);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = interests.filter(item =>
        item.key.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredData(filtered);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const handleInputChange = e => {
    console.log(e);
    setSearchText(e);
  };

  const PopupScreen = () => {
    return (
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Image
            style={styles.popupImage}
            source={require('../public/success.png')}
          />
          <Text style={styles.popupText}>Successful!</Text>
        </View>
      </View>
    );
  };

  const [showPopup, setShowPopup] = useState(false);

  const [selectedInterest, setSelectedInterest] = useState([]);

  const handleSelectPill = async (id, select) => {
    const temp = selectedInterest;
    if (select == true) setSelectedInterest({data: [...temp, id]});
    if (select == false)
      setSelectedInterest({
        data: temp.filter(item => JSON.stringify(item) != JSON.stringify(id)),
      });
      var tagsStr = '[' + selectedInterest.map(s => '"' + s + '"').join(',') + ']';
      var res =
        '{' + JSON.stringify(route.params.data).slice(0, -1).slice(1) + ',"tags":"' +
        tagsStr.replace(/"/g, '\\"') + '"}';
      console.log(res);
      await axios
        .post('http://10.0.2.2:8080/api/auth/registerGoogle', JSON.parse(res))
        .then(response => {
          console.log('response', response);
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            navigation.navigate('Match');
          }, 2000);
        })
        .catch(error => {
          console.log('error', error);
        });
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
    const dataToRender = filteredData.length > 0 ? filteredData : interests;

    return dataToRender.map((item, index) => {
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
      <View style={styles.inputContainer}>
        <Icon
          name="search"
          size={15}
          color="#155e6d"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#155e6d"
          value={searchText}
          onChangeText={handleInputChange}
        />
      </View>
      <ScrollView fadingEdgeLength={100}>
        <View style={styles.interestMap}>{interestList()}</View>
      </ScrollView>
      {selectedInterest.length > 1 ? (
        <TouchableOpacity onPress={handleSelectPill}>
          <Text style={styles.nextBtn}>Next {'>'}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={[styles.nextBtn, {color: '#8daeb5'}]}>Next {'>'}</Text>
      )}
      {showPopup && <PopupScreen />}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#155e6d',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginVertical: '5%',
  },
  searchIcon: {
    marginLeft: 3,
    marginRight: 6,
  },
  textInput: {
    height: 'auto',
    padding: 0,
    margin: 0,
  },
  nextBtn: {
    textAlign: 'right',
    paddingRight: 0.05 * Dimensions.get('window').width,
    color: '#155E6D',
    fontSize: 20,
    fontWeight: 600,
    marginTop: '5%',
  },
  popupContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    height: 250,
    width: 250,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupText: {
    marginTop: '5%',
    fontSize: 20,
    color: '#155E6D',
    textAlign: 'center',
    fontWeight: 600,
  },
  popupImage: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
});
