import React  from "react";
import { View, Modal, Text, Dimensions } from "react-native"
let screenHeight = Dimensions.get("window").height

export default function NointernetConnection () {
    return (
        <Modal>
            <View style={{ height : screenHeight ,alignItems : "center" , justifyContent : "center"}}>
                    <View>
                        <Text style={{ color : "#777"}}>Ndugu Mteja Hakikisha Una Mtandao</Text>
                        <Text style={{ textAlign : "center" , color : "#777"}}>Au Kifurushi cha Internet</Text>
                    </View>    
            </View> 
        </Modal>
    )
}
