import * as React from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity, Image , Dimensions} from 'react-native';


let WIDTH = Dimensions.get("window").width / 2

export default function ProductListItem ( props) {

    // console.log(props.product)
    let { productName, productDescription, productPrice , productImage, productColor , productSize } = props.product
    let  { navigation } = props
    
    return (
        <TouchableOpacity style={{  width : "50%", padding: 5 }} onPress={() => navigation.navigate("ProductPage", {
            productName ,
            productDescription ,
            productPrice,
            productImage,
            productColor,
            productSize
        })}>
                <View style={
                        {
                            height : 280,
                            width : "100%",
                            borderRadius : 10
                        }
                }>
                    <Image

                        source={{
                            uri : productImage 
                        }}

                        style={
                            {
                                borderTopRightRadius : 10,
                                borderTopLeftRadius : 10,
                                height : 200,
                                width: "100%"
                            }
                        }
                    />
                    <View style={{ height: 80 , padding : 10 , borderBottomRightRadius : 10 , borderBottomLeftRadius : 10 , shadowColor: '#000',
                     borderBottomWidth : 1 , borderColor : "whitesmoke" , borderLeftWidth : 1 , borderRightWidth : 1 }}>
                        <View style={{ height : 38 , overflow : "hidden"}}>
                            <Text>{productName}</Text>
                        </View>
                        <Text style={{ color : "rgb(255, 102, 102)" , fontWeight : "700" }}>{productPrice}</Text>
                    </View>
                </View>
        </TouchableOpacity>
    )
}