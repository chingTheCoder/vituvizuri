// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import Cart from "./screens/Cart"
import { CartContextProvider } from './context/CartContext';
//import { CartContextProvider } from "./context/CartContext"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
              name="HomeScreen" 
              component={HomeScreen} 
              options= {
                  { headerShown : false }}
              />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  );
}

export default App;