import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/BlogContext';
import Index from "./src/screens";
import Show from './src/screens/Show'
import Create from './src/screens/Create'
import Edit from './src/screens/Edit'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BlogIndex" component={Index} options={{ title: 'Home' }}/>
        <Stack.Screen name="Show" component={Show} options={{ title: 'Show' }}/>
        <Stack.Screen name="Create" component={Create} options={{ title: 'Create Blog' }}/>
        <Stack.Screen name="Edit" component={Edit} options={{ title: 'Edit Blog' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return(
    <Provider>  
      <App/>
    </Provider>
  )
};