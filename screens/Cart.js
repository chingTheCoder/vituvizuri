import  React, { useContext, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList, Pressable, Modal } from 'react-native';
import { CartContext } from '../context/CartContext'
import  CartItem from "./components/Cart/CartItem.js"
import OrderButton from "./components/Cart/OrderButton.js"
import Checkout from "./Checkout.js"

export default function Cart({ route , navigation }) {

  const { items, totalCost } = useContext(CartContext)
  const [ popUp, setPopUp ]  = useState(false)
  
  const totalProducts = items.length

  if (items.length === 0) {
      return (
        <EmptyCart/>
      )
  }else {
      return (
        <>
          <Modal visible={popUp}>
              <Checkout setPopUp={setPopUp}/>
          </Modal>
          <CartItems items={items}/>
          <OrderButton setPopUp={setPopUp}  totalProducts={totalProducts} totalCost={totalCost} />
        </>
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



const renderItem =  item  => (<CartItem item={item}/>) 

function CartItems (props) {

  const products = props.items
  //console.log(products) 
  return (
    <FlatList
        style={{ paddingHorizontal : 10 }}
        keyExtractor={ (item) => item.productImage }
        data={products}
        renderItem={renderItem}
    />
  )
}