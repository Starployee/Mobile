import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from '../../views/About/About';
import Home from '../../views/Home/Home';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icones = {
    Home: { name: 'home' },
    About: { name: 'info' },
}

const RotasTab = () => {
    return (
    <Tab.Navigator 
      tabBarOptions={
        {    
        showIcon: true,
        showLabel: false,
        activeTintColor: '#F2C438',
        inactiveTintColor: 'black',
        style: {
          backgroundColor:'white',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0
        }}
      }
      screenOptions={ ({route}) =>({
        tabBarIcon: ({color, size}) => {
            const {name} = icones[route.name];
            return <FontAwesome5 name={name} size={size} color={color} />
          }
        }) }
    >
      
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  ); 
}
export default RotasTab;