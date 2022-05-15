import  React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { CartContext } from '../context/CartContext'

export default function Cart() {

  const { name } = useContext(CartContext)
  return (
    <View>
      <Text>Cart owned by {name}</Text>
    </View>
  );
}