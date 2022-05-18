import  React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-web';
import { CartContext } from '../context/CartContext'

export default function Cart({ route , navigation }) {

  const { items } = useContext(CartContext)
  
  console.log(items)
  return (
    <View>
      <Button title="go back" onPrerss={() => navigation.push("Home") }/>
      <Text>Cart owned by</Text>
    </View>
  );
}