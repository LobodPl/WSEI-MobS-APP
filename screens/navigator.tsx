import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import Home from './index';
import About from './about';
import Gallery from './gallery';

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      barStyle={{ backgroundColor: '#1B1B1B'}}   
      activeColor="#ff9c1e"
      inactiveColor="#ababab"
    >
      <Tab.Screen name="Strona główna"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Galeria" 
      component={Gallery}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="image-area" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="O nas" 
      component={About}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="information-variant" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}