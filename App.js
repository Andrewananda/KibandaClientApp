import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/splash';
import Login from './src/login';

const Stack = createStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Screen'}
            component={Splash}
          />
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
