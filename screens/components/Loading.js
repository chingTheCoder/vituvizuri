import React from "react";
import { View, Modal, Image, Dimensions } from "react-native"

let screenHeight = Dimensions.get("window").height

export default function Loading () {
    return(
        <Modal>
                <View style={{ height : screenHeight ,alignItems : "center" , justifyContent : "center"}}>
                <Image 
                    source={require("../../assets/loading_triple.gif")}
                    style={{
                    height : 300,
                    width : "100%"
                    }}
                />
                </View>
        </Modal> 
    )
} 