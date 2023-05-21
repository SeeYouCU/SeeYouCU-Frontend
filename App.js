import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
import Friends from './routes/Friends';
import Notification from './routes/Notification';
import Settings from './routes/Settings';
import Account from './routes/Account';
import Home from './routes/Home';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

function App() {
  const [signedIn, getSignedIn] = React.useState(false);

  getIsSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('sign in?', isSignedIn);
    getSignedIn(isSignedIn);
    return isSignedIn;
    //this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  const isSignedIn = getIsSignedIn();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen
          name="Event"
          component={Event}
          initialParams={(isOwner = false)}
        />
        <Stack.Screen name="NewEvent" component={NewEvent} />
        <Stack.Screen name="Tags" component={Tags} />
        <Stack.Screen name="Exchange" component={Exchange} />
        <Stack.Screen
          name="Item"
          component={Item}
          initialParams={(isOwner = false)}
        />
        <Stack.Screen name="NewItem" component={NewItem} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
