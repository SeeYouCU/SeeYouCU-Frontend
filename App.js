import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './routes/Home';
import Interests from './routes/Interests';
import Match from './routes/Match';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Setup from './routes/Setup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
