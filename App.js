import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ESO Characters">
        <Stack.Screen name="ESO Characters" component={ListScreen} />
        <Stack.Screen
          name="Profile"
          component={DetailScreen}
          options={({route}) => {
            return {
              title: 'Profile: ' + route.params.item.name,
            };
          }}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [`item.${item.id}.photo`, `item.${item.id}.name`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
