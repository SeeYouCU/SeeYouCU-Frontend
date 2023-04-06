import React, {useState, useRef} from 'react';
import {
  TouchableNativeFeedback,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

const MatchButton = () => {
  const [isHeld, setIsHeld] = useState(false);
  const timeoutRef = useRef(null);

  const handlePressIn = () => {
    timeoutRef.current = setTimeout(() => setIsHeld(true), 2000);
  };

  const handlePressOut = () => {
    clearTimeout(timeoutRef.current);
    if (isHeld) {
      setIsHeld(false);
      console.log('rejected');
    } else {
      console.log('accepted');
    }
    setIsHeld(false);
  };

  return (
    <View style={[{position: 'absolute', zIndex: 1, right: 0, bottom: 0}, styles.buttonArea]}>
      <TouchableNativeFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} background={
        Platform.OS === 'android'
          ? TouchableNativeFeedback.Ripple('rgba(140, 140, 140, 0.2)', false)
          : undefined
      }>
        <View
          style={[
            {backgroundColor: isHeld ? '#ff3d00' : '#06bac0'},
            styles.buttonArea,
          ]}>
          <Image
            source={require('../public/seeyou.png')}
            style={{height: '60%', width: '60%'}}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.3,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',    
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 10,
  },
});

export default MatchButton;
