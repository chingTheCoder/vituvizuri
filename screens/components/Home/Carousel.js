import React from 'react'
import { ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import images from '../../../images.js'

export default function Carousel () {
    return(
        <ScrollView style={{ paddingTop: 10, paddingBottom : 10 , paddingBottom : 25 , paddingLeft : 10 , backgroundColor : "white" }} horizontal={true}>
            <CarouselElement imageUrl={images.dress}/>
            <CarouselElement imageUrl={images.watch}/>
            <CarouselElement imageUrl={images.bags}/>
            <CarouselElement imageUrl={images.rtx}/>
        </ScrollView>
    )
}


function CarouselElement ({imageUrl}) {

    return(
        <TouchableOpacity style={styles.ce}>
           <Image
                style={{
                    height : 320,
                    width : 280,
                    borderRadius : 10
                }}
                source={imageUrl}
           />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    ce : {
        height : 320,
        width : 280,
        marginRight : 10,
        borderRadius : 10
    }
})




