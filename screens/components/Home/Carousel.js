import React from 'react'
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
export default function Carousel () {
    return(
        <ScrollView style={{ marginTop: 10, marginBottom : 10 , marginLeft : 10 }} horizontal={true}>
            <CarouselElement/>
            <CarouselElement/>
            <CarouselElement/>
            <CarouselElement/>
            <CarouselElement/>
        </ScrollView>
    )
}


function CarouselElement () {
    return(
        <TouchableOpacity style={styles.ce}>
            <View>
                <Text>d</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    ce : {
        height : 320,
        width : 280,
        backgroundColor : "gold",
        marginRight : 10,
        borderRadius : 10
    }
})




