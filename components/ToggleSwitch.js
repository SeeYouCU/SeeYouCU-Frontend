import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useState, useEffect, useRef} from 'react';

const ToggleSwitch = props => {
  const [active, setActive] = useState(false);
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 90],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          height: 30,
          width: 179,
          borderRadius: 40,
          borderWidth: 2,
          borderColor: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: 30,
            left: -3,
            bottom: -2,
            borderRadius: 40,
            width: 90,
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 1)',
            transform: [
              {
                translateX: rotationX,
              },
            ],
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
          }}></Animated.View>
        <TouchableOpacity
          style={styles.clickStyle}
          onPress={() => setActive(false)}>
          <Text style={styles.text}>{props.leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickStyle}
          onPress={() => setActive(true)}>
          <Text style={styles.text}>{props.rightTitle}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clickStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#155E6D',
    fontWeight: 'bold',
  },
  insideRect: {},
});

export default ToggleSwitch;
