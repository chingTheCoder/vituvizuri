import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from  "./ProductPage"
import Profile from "./Profile"
import Content from './Content'
import Men from './Men';
import Women from './Women';
const Stack  = createNativeStackNavigator()

export default function HomeScreen() {
  return(
     <Stack.Navigator>
        <Stack.Screen
          name="Content"
          component={Content}
          options={
              {
                  headerShown : false
              }
          }
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Men"
          component={Men}
        />
        <Stack.Screen
          name="Women"
          component={Women}
        />
    </Stack.Navigator>
  )
}