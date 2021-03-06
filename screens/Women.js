import  React , { useState , useEffect }  from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFirestore, query, where , collection, getDocs} from 'firebase/firestore';
import { app } from '../src/config'
import ProductListItem from './components/Home/ProductListItem'

export default function Men({ navigation }) {

  const [ womenProducts , updateWomenProducts ] = useState([])
  const db = getFirestore(app)
  const q = query(collection(db, "products"), where("productCategory", "==", "women"))

  useEffect(() => {

      getWomenProducts()
  }, [])


  async function getWomenProducts () {

      let data = await getDocs(q)
      data.docs.map(doc => updateWomenProducts( arr => [...arr, {id : doc.id , product : doc.data()}]))

  }

  const renderItem = ( item ) => (
    <ProductListItem  product = {item.item.product} navigation={navigation}/>  
  )

  return (
            <FlatList
                    style={{ }}
                    data={womenProducts}
                    numColumns={2}
                    keyExtractor={ item => item.id }
                    renderItem={renderItem}
                    ListHeaderComponent={
                      <>
                        <View style={{ marginVertical : 10, marginLeft : 10 }}>
                            <Text style={{ fontSize : 20 }}>Bidhaa Za Kike</Text>
                        </View>
                      </>
                    }
                />  
          )
}
