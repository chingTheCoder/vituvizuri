import  React, { useState , useEffect } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import Carousel from "./components/Home/Carousel"
import TopHeader from './components/Home/TopHeader';
import { app } from '../src/config'
// import { collection, getDocs } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ProductListItem from './components/Home/ProductListItem'
import Loading from "./components/Loading.js"

// Import the functions you need from the SDKs you need

export default function Content ({ route, navigation }) {

  const [ products , setProducts] = useState([])
  const db = getFirestore(app)
  let productsCollectionReference = collection(db, "products")

  useEffect(() => {
  
    fetchProducts()
    
  }, [])
  
  async function fetchProducts () {
      const data = await getDocs(productsCollectionReference)
      data.docs.map(doc => setProducts( arr => [...arr, {id : doc.id , product : doc.data()}]))
  }


  const renderItem = ( item ) => (
    <ProductListItem  product = {item.item.product} navigation={navigation}/>  
  )
  
  
return (
  <>
    {


products.length === 0 ? 
      <Loading/>
:
      //the content of the home page
      <>
          <SafeAreaView>
                <FlatList
                    style={{ marginHorizontal : 5 , marginTop : 30 }}
                    data={products}
                    numColumns={2}
                    keyExtractor={ item => item.id }
                    renderItem={renderItem}
                    ListHeaderComponent={
                      <>
                        <TopHeader route={ route } navigation={navigation}/>
                        <Carousel/>
                        {/* trending */}
                        <View style={{ marginVertical : 10, marginLeft : 10 }}>
                            <Text style={{ fontSize : 20 }}>Product List</Text>
                        </View>
                      </>
                    }
                 />  
          </SafeAreaView>
      </>
      //the content of the home page
  

}
    </>
  )
}


