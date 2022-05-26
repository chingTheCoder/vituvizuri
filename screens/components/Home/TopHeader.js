import * as React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TopHeader ({ route, navigation }) {
 return (
  <View style={{
      marginTop : 50,
      backgroundColor : "rgb(255, 102, 102)",
      marginHorizontal : 10,
      borderBottomLeftRadius : 10,
      borderBottomRightRadius : 10
  }}>
      <View style={{ flexDirection : "row" }}> 
            <TouchableOpacity style={styles.ic} onPress={() => navigation.navigate("Men")}>
                <Icon name="man" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic} onPress={() => navigation.navigate("Women")}>
                <Icon name="woman" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}  onPress={() => navigation.navigate("Apparel")}>
                <Icon name="watch" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}>
                <Icon name="briefcase" color="white" size={32}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ic}>
                <Icon name="md-phone-portrait" color="white" size={32}></Icon>
            </TouchableOpacity>
      </View>
  </View>)
}


const styles = StyleSheet.create({
    ic : {
        width : "20%",
        height : 85,
        borderWidth: 0,
        borderColor :  "rgb(255, 102, 102)",
        display : "flex",
        alignItems : 'center',
        justifyContent : "center",
        borderRadius : 20,
        backgroundColor : "rgba(0, 0, 0, 0)"
    }
})


