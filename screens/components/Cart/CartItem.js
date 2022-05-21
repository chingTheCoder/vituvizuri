import React, { useContext } from "react"
import { View , Pressable , Image, Text } from "react-native"
import { CartContext } from "../../../context/CartContext.js"

export default function CartItem (props) {

    let { item } = props.item

    const { items, totalCost , updateTotal} = useContext(CartContext)

    return (
        <View style={{ flexDirection : "row" , backgroundColor : "white", marginTop : 10 , borderRadius : 10 }}>
        <View style={{ width : "25%"}}>
          <Image
            source={{ uri : item.productImage }}
            style={{
                width : "100%",
                height : 100,
                borderRadius : 10
            }}
          />
        </View>
        <View style={{ width : "60%", paddingLeft : 5 , height : 100, paddingTop : 10 }}>
            <Text style={{ fontSize : 16 , fontWeight : "700",height : 40, overflow : "hidden" }}>{item.productName}</Text>
            <Text style={{ height : 20 , color : "rgb(255, 102, 102)"}}>{item.productPrice}</Text>
            <Text>Quantity : 1 </Text>
        </View>
        <View style={{ width : "15%", paddingHorizontal : 5}} >
            <Pressable 
              onPress={() => updateTotal( prevValue => prevValue + Number(item.productPrice))}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(255, 102, 102)' : 'white',
                },
                {
                  borderRadius : 10,
                  height : 40,
                  justifyContent : "center",
                  alignItems : "center",
                  borderColor : "rgba(255, 102, 102, 0.5)",
                  borderWidth : 1,
                  marginTop : 5
                },
              ]}
            ><Text style={{ fontSize : 20 }}>+</Text></Pressable>
            <Pressable
                  onPress={() => updateTotal( prevValue => prevValue - Number(item.productPrice))}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(255, 102, 102)' : 'white',
                    },
                    {
                      borderRadius : 10,
                      height : 40,
                      justifyContent : "center",
                      alignItems : "center",
                      borderColor : "rgba(255, 102, 102, 0.5)",
                      borderWidth : 1,
                      marginTop : 10
                    },
                  ]} 
            ><Text style={{ fontSize : 20 }}>-</Text></Pressable>
        </View>
      </View>
    )
}