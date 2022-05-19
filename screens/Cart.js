import  React, { useContext } from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { CartContext } from '../context/CartContext'

export default function Cart({ route , navigation }) {

  const { items } = useContext(CartContext)
  
  console.log(items)
  if (items.length === 0) {
      return (
        <EmptyCart/>
      )
  }else {
      return (
        <CartItems items={items}/>
      )
  }
}


function EmptyCart () {
  return(
    <View style={{ height : "100%" , backgroundColor : "whitesmoke", justifyContent : "center", alignItems : "center"}}>
        <Text>Mfuko Hauna Bidhaa</Text>
    </View>
  )
}


function CartItems (props) {

  const product = props.items
  console.log(product)
  return (
    <ScrollView style={{ paddingHorizontal : 10 , paddingVertical : 10 }}>
        <View style={{ flexDirection : "row" , backgroundColor : "white"}}>
            <View style={{ width : "25%"}}>
              <Image
                source={{ uri : product[0].productImage }}
                style={{
                    width : "100%",
                    height : 100,
                    borderRadius : 10
                }}
              />
            </View>
            <View style={{ width : "60%", paddingLeft : 5 , height : 100, paddingTop : 10 }}>
                <Text style={{ fontSize : 16 , fontWeight : "700",height : 40, overflow : "hidden" }}>{product[0].productName}</Text>
                <Text style={{ height : 20 , color : "rgb(255, 102, 102)"}}>{product[0].productPrice}</Text>
                <Text>Quantity : 1 </Text>
            </View>
            <View style={{ width : "15%", paddingHorizontal : 5}} >
                <Pressable 
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
    </ScrollView>
  )
}