import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
//import ImagePicker from 'react-native-image-picker';

const Vinze = () => {
  const [resourcePath, setResourcePath] = useState('');
  var ImagePicker = require('react-native-image-picker');
  const selectFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};
        const source = {uri: response.assets[0].uri};
        //this.setState({imageSource: source});
        setResourcePath(source.uri);
      }
    });
  };

  return (
    <View>
      {resourcePath ? (
        <View>
          <Image
            source={{uri: resourcePath.uri}}
            style={{width: 20, height: 20}}
          />
          <Text style={{alignItems: 'center'}}>{resourcePath.uri}</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={selectFile} style={styles.button}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
});

export default Vinze;
