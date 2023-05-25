import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationFooter from '../components/NavigationFooter';
import TogglePage from '../components/TogglePage';

export default function Match({navigation}) {
  React.useEffect(() => {
    isSignedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn == false) navigation.navigate('Setup');
    };
  }, []);
  
  const [active, setActive] = useState(false);

  const [cards, setCards] = useState([
    {
      id: 1,
      src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102281844004761731/4877415126921268548.9540010e62a7ceefefcd3d60c7ef651a.23043014.jpg',
      nickname: 'Tem',
      name: 'Natchuda Somboonviboon',
      event: 'Finding a Friend',
      age: '20',
      faculty: 'ISE',
      major: 'ICE',
      batch: 'Chula 104',
      bio: 'See you!',
      interests: ['Debate', 'Cafe', 'Makeup', 'Skincare', 'Music'],
    },
    {
      id: 2,
      src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102284453746843759/image.png',
      nickname: 'Chaba',
      name: 'Chaba Jumsai Na Ayudhya',
      event: 'Finding a Friend',
      age: '20',
      faculty: 'ISE',
      major: 'ICE',
      batch: 'Chula 104',
      bio: 'See you!',
      interests: ['Skincare', 'Exercise', 'Makeup', 'Math', 'Music'],
    },
    {
      id: 3,
      src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102281945234280499/4877415126921268548.3e09fdbb5bdf7601f73464551641cb81.23043015.jpg',
      nickname: 'Ploy',
      name: 'Bantarawan Chinchai',
      event: 'Finding a Friend',
      age: '20',
      faculty: 'ISE',
      major: 'ICE',
      batch: 'Chula 104',
      bio: 'See you!',
      interests: ['Basketball', 'Singing', 'Makeup', 'Skincare', 'Music'],
    },
  ]);
  
  const [myCards, setMyCards] = useState([
    {
      id: 11,
      src: 'https://cdn.discordapp.com/attachments/1102280430293618789/1102285756959043614/4877415126921268548.10b459bb1c82dca52b66ec869088c848.23043014.JPG',
      nickname: 'Franc',
      name: 'Franc Witsathon',
      event: 'Finding a Friend',
      age: '20',
      faculty: 'ISE',
      major: 'ICE',
      batch: 'Chula 104',
      bio: 'See you!',
      interests: ['Football', 'Business', 'Makeup', 'Skincare', 'Music'],
    },
  ]);

  const removeCard = id => {
    setCards(cards.filter(card => card.id !== id));
  };

  const removeMyCard = id => {
    setMyCards(myCards.filter(card => card.id !== id));
  };

  return (
    <ImageBackground
      source={require('../public/bg.png')}
      style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            marginVertical: '4%',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={styles.iconButton}>
            <Icon name="notifications-outline" size={25} color="#155e6d" />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <TogglePage rightTitle="Added You" leftTitle="Discover" 
            active={active}
            setActive={setActive} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friends')}
            style={styles.iconButton2}>
            <Icon name="people" size={20} color="#155e6d" />
          </TouchableOpacity>
        </View>
          {active ? (myCards.length !== 0 ?
            <ProfileCard
              key={myCards[0].id}
              src={myCards[0].src}
              nickname={myCards[0].nickname}
              name={myCards[0].name}
              event={myCards[0].event}
              age={myCards[0].age}
              faculty={myCards[0].faculty}
              major={myCards[0].major}
              class={myCards[0].batch}
              isMatch="true"
              bio={myCards[0].bio}
              interests={myCards[0].interests}
              onRemove={() => removeMyCard(myCards[0].id)}
            /> :
            
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={styles.popupImage} source={require('../public/success.png')} />
          <Text style={styles.noMatches}>Out of matches!</Text>
        </View>
          ) : (cards.length !== 0 ?
            <ProfileCard
              key={cards[0].id}
              src={cards[0].src}
              nickname={cards[0].nickname}
              name={cards[0].name}
              event={cards[0].event}
              age={cards[0].age}
              faculty={cards[0].faculty}
              major={cards[0].major}
              class={cards[0].batch}
              isMatch="true"
              bio={cards[0].bio}
              interests={cards[0].interests}
              onRemove={() => removeCard(cards[0].id)}
            /> :
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.popupImage} source={require('../public/success.png')} />
              <Text style={styles.noMatches}>Out of matches!</Text>
            </View>
          )}
      </View>
      <NavigationFooter currentPage="0" style={{position: 'relative'}} />
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '0%',
  },
  iconButton: {
    height: 'auto',
    padding: 0,
    margin: '1%',
  },
  iconButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderRadius: 40,
    width: 30,
    height: 30,
    backgroundColor: '#c3eaeb',
  },
  noMatches: {
    color: '#155e6d',
    fontSize: 20,
    fontWeight: 700,
    marginBottom: '2%',
    textAlign: 'center'
  },  
  popupImage: {
    height: '25%',
    width: '40%',
    resizeMode: 'contain',
  }
});
