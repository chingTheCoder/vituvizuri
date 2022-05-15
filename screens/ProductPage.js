import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProductPage({ route , navigation }) {
  
  const { product } = route.params
  return (
    <View>
      <Text>{product}</Text>
      <Button title="update title"/>
    </View>
  );
}