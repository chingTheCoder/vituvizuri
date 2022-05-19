import  React , {useContext } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableHighlight } from 'react-native';
import { CartContext } from '../context/CartContext'

export default function ProductPage({ route , navigation }) {
  
  const { productName, productDescription ,productPrice , productImage, productColor , productSize } = route.params


  const { addToCart } = useContext(CartContext)
  return (
    <ScrollView style={{ backgroundColor : "white"}}>
      <Image
        source={{ uri : productImage}}
        style={{
          height : 350,
          width : "100%"
        }}
      />
      <View style={{ paddingHorizontal : 10 , paddingVertical : 10 , backgroundColor : "white"}}>
          <Text style={{ fontSize : 20 , color : "rgb(255, 102, 102)"}}>{productPrice}</Text>
          <Text style={{fontSize : 16 ,  marginTop : 10 , fontWeight : "700" }}>{productName}</Text>
          <Text style={{ fontSize : 16 , marginTop : 10 , color : "gray" }}>{productDescription}</Text>
      </View>
      <View style={{ paddingHorizontal : 10 , backgroundColor : "white" }}>
            <Text style={{ fontWeight : "700" , color : "gray"}}>Product Details</Text>
            <Text>Color : { productColor }</Text>
            <Text>Size : { productSize }</Text>
      </View>
      {/* buttons are down here */}
      <View style={{ paddingHorizontal : 10 , marginTop : 10 }}>
        <TouchableHighlight onPress={() => {
          addToCart( productName , productPrice, productImage )
          navigation.navigate("Cart")
          }} style={{ backgroundColor : "rgb(255, 102, 102)", height : 50 , borderRadius : 10 , justifyContent : "center" , alignItems : "center"}}>
              <Text style={{ fontWeight : "700" , color : "white"}}>NUNUA</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}