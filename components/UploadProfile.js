import * as React from 'react';
import {StyleSheet, View, Image, Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadProfile = props => {
  const [photo, setPhoto] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, (response) => {
      if (response) {
        setClicked(true);
        setPhoto(response);
        console.log(response);
      }
    });
  };
  //TODO: take image, upload image
  return (
    <TouchableHighlight onPress={handleChoosePhoto}>
    <LinearGradient
      colors={['#2ba0ad', '#f0f7f8', '#2ba0ad']}
      start={{x: 3, y: 0}}
      end={{x: 0, y: 3}}
      style={styles.linearGradient}
    >
      <View style={styles.frame}>
          { !photo
           ? <TouchableHighlight>
              <View>
                <Icon
                  name="camera"
                  size={40}
                  color="#155E6D"
                />
              </View>
            </TouchableHighlight>
          : <TouchableHighlight>
              <View>
              <Image
                source={{
                  uri: photo.uri,
                }}
                style={{resizeMode: 'cover', width: '100%', height: '100%'}}
              />
              </View>
            </TouchableHighlight>
          }
      </View>
    </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  frame: {
    height: 200,
    width: 200,
    backgroundColor: 'rgba(192, 224, 225, 0.9)',
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    width: 210,
    height: 210,
    borderRadius: 500,
    padding: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadProfile;
