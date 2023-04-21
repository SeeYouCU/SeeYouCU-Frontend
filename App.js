import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './routes/Home';
import Interests from './routes/Interests';
import Match from './routes/Match';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Setup from './routes/Setup';
import Tags from './routes/Tags';
import Event from './routes/Event';
import Item from './routes/Item';
import Exchange from './routes/Exchange';
import Events from './routes/Events';
import NewItem from './routes/NewItem';
import NewEvent from './routes/NewEvent';

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
        <Stack.Screen name="Tags" component={Tags} />
        <Stack.Screen
          name="Event"
          component={Event}
          initialParams={(isOwner = false)}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          initialParams={(isOwner = false)}
        />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="NewEvent" component={NewEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
