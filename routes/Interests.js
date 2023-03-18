import * as React from 'react';
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Interests({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      interests: ''
    }
  });

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Match')
  }

  return (
    <View>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Pick Your Top 5 Interests</Text>
      <Text>Your Interests</Text>
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
        name="interests"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Button title="Done" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
