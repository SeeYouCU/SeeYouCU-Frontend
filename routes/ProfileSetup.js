import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { useForm, Controller } from "react-hook-form";

export default function ProfileSetup({navigation}) {
  const option = {
  }
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      faculty: '',
      major: '',
      graduationYear: ''
    }
  });

  return (
    <View>
      <Text>Setup your profile page</Text>

      <Text>First name</Text>
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

      <Text>Last name</Text>
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
      {errors.lastName && <Text>This is required.</Text>}

      <Text>Faculty</Text>

      <Text>Major</Text>

      <Text>Graduation year</Text>

      <Button title="Next"/>
    </View>
  );
}