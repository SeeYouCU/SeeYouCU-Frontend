import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './routes/Home';
import Setup from './routes/Setup';
import Interests from './routes/Interests';
import Match from './routes/Match';
import Login from './routes/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
