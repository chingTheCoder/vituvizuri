import  React , { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Men({ route , navigation }) {

  let [a, setA] = useState(0)

  console.log(a)

  function updateA () {
      setA(56)
  }

  return (
    <View>
      <Text>Men page {a}</Text>
      <Button title="update title" onPress={updateA}/>
    </View>
  );
}