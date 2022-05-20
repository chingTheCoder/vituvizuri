import React from "react"
import { Pressable , View, Text } from "react-native"

export default function OrderButton (props) {
    return (
        <View style={{ backgroundColor : "white", padding : 10 }}>
            <View style={{ flexDirection : "row"}}>
                <View style={{ width : "50%"}}><Text style={{textAlign : "right", fontSize : 18 }}>Number of Products : </Text></View>
                <View style={{ width : "50%"}}><Text style={{ paddingLeft : 10 , fontSize : 18 }}>0</Text></View>
            </View>
            <View style={{ flexDirection : "row"}}>
                <View style={{ width : "50%"}}><Text style={{textAlign : "right", fontSize : 18 }}>Total : </Text></View>
                <View style={{ width : "50%"}}><Text style={{ paddingLeft : 10 , fontSize : 18 }}>0</Text></View>
            </View>
            <Pressable
                  onPress={() => props.setPopUp(true)}
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
                    },
                  ]}
            >
                <Text style={{ fontSize : 18 , fontWeight : "700" , color : "white"}}>Complete Your Order</Text>    
            </Pressable>            
        </View>
    )
}