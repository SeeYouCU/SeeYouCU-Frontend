import * as React from 'react';
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Picker } from '@react-native-picker/picker';

export default function Setup({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Interests')
  }

  return (
    <View>
    <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Set Up Your Profile Page</Text>
      <Text>First Name</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Text>Last Name</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      <Text>Faculty</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        )}
        name="faculty"
      />

      <Text>Major</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        )}
        name="Major"
      />

      <Text>Graduated Year</Text>

      <Button title="Next" onPress={handleSubmit(onSubmit)} />
      {/* <Button
        title="Go to Setup again"
        onPress={() => navigation.push('Setup')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
}
