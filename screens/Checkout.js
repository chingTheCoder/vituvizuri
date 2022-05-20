import * as React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

export default function Order (props) {
  return (
  <View style={{ padding : 10}}>
        <View style={{ paddingVertical : 10 ,flexDirection : "row", borderBottomWidth : 1, borderBottomColor : "whitesmoke"}}>
              <Pressable 
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'whitesmoke' : 'whitesmoke',
                  },
                  {
                    borderRadius : 10,
                    height : 40,
                    justifyContent : "center",
                    alignItems : "center",
                    borderColor : "rgba(255, 102, 102, 0.5)",
                    borderWidth : 1,
                    marginTop : 5,
                    fontWeight : "700",
                    padding : 8,
                    width : "15%"
                  },
                ]}
              onPress={() => props.setPopUp(false)}>
                    <Text style={{ color : "red", fontSize : 16 , fontWeight : "700"}}>X</Text>
              </Pressable>
              <View style={{ width : "85%" , paddingLeft : 10}}>
                  <Text style={{paddingLeft : 20, fontSize : 20, marginTop : 10, fontWeight : "700", color : "#777"}}>Jaza ukamilishe oda</Text>
              </View>
        </View>
        <View style={{ paddingTop : 30 }}>
            <TextInput
              style={styles.input}
              placeholder="Jina lako Kamili"
            />
            <TextInput
              style={styles.input}
              placeholder="Namba yako ya simu"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Mahali pakupokea mzigo"
            />
            <Pressable
               style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(255, 102, 102)' : 'rgb(255, 102, 102)',
                },
                {
                  borderRadius : 10,
                  height : 40,
                  justifyContent : "center",
                  alignItems : "center",
                  borderColor : "rgba(255, 102, 102, 0.5)",
                  borderWidth : 1,
                  marginTop : 5,
                  fontWeight : "700"
                },
              ]}
            >
                <Text style={{ color : "white", fontWeight : "700", fontSize : 18}}>Weka Oda</Text>
            </Pressable>
        </View>
  </View>)
}


const styles = StyleSheet.create({
      input : {
          height : 50,
          borderWidth : 2,
          borderColor : "whitesmoke",
          fontSize : 18,
          marginBottom : 10,
          borderRadius : 10,
          paddingHorizontal : 10,
          paddingVertical : 10
      }
})