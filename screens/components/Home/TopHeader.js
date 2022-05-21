import * as React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TopHeader ({ route, navigation }) {
 return (
  <View style={{
    backgroundColor : "white"
  }}>
      <ScrollView horizontal={true} > 
            <TouchableOpacity style={styles.ic} onPress={() => navigation.navigate("Men")}>
                <Icon name="man" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic} onPress={() => navigation.navigate("Women")}>
                <Icon name="woman" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}>
                <Icon name="watch" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}>
                <Icon name="briefcase" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}>
                <Icon name="md-phone-portrait" color="white" size={32}></Icon>
            </TouchableOpacity>
      </ScrollView>
  </View>)
}


const styles = StyleSheet.create({
    ic : {
        height : 100,
        width : 100,
        borderWidth: 10,
        borderColor : "white",
        display : "flex",
        alignItems : 'center',
        justifyContent : "center",
        borderRadius : 100,
        backgroundColor : "#f66"
    }
})


