// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import Cart from "./screens/Cart"
import { CartContextProvider } from './context/CartContext';
import Ionicons from 'react-native-vector-icons/Ionicons'
//import { CartContextProvider } from "./context/CartContext"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName
        
                    if (route.name === 'HomeScreen') {
                      iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'Cart') {
                      iconName = focused ? 'cart' : 'cart-outline'
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  tabBarActiveTintColor: 'rgb(255, 102, 102)',
                  tabBarInactiveTintColor: 'gray'
                })}
        >
          <Tab.Screen 
                  name="HomeScreen" 
                  component={HomeScreen} 
                  options= {{ 
                    headerShown : false,
                    title : "Nyumbani"
                  }}                
              />
          <Tab.Screen 
                  name="Cart" 
                  component={Cart}
                  options={{
                    title : "Kikapu" 
                  }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
}

export default App;