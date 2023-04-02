import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Chip = (props) => {
  return (
    <View style={[{borderColor: props.borderColor, backgroundColor: props.backgroundColor}, styles.chipContainer]}>
      <Text style={{color: props.textColor}}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    height: 'auto',
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default Chip;
