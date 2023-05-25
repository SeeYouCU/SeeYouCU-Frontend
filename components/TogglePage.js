import * as React from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';
import {useState, useEffect, useRef} from 'react';

const TogglePage = props => {
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.active) {
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
  }, [props.active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 90],
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        position: 'relative'
      }}>
      <View style={styles.toggleFrame}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [
                {
                  translateX: rotationX,
                },
              ],
            },
          ]}
        />
        <TouchableOpacity
          style={styles.clickStyle}
          onPress={() => props.setActive(false)}>
          <Text style={styles.text}>{props.leftTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickStyle}
          onPress={() => props.setActive(true)}>
          <Text style={styles.text}>{props.rightTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleFrame: {
    flexDirection: 'row',
    height: 30,
    width: 179,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    position: 'relative'
  },
  clickStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#155E6D',
    fontWeight: 500,
  },
  animatedView: {
    position: 'absolute',
    height: 30,
    left: -3,
    borderRadius: 40,
    width: 90,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default TogglePage;
