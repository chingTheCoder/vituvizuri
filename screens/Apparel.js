import  React , { useState , useEffect }  from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFirestore, query, where , collection, getDocs} from 'firebase/firestore';
import { app } from '../src/config'
import ProductListItem from './components/Home/ProductListItem'

export default function Apparel({ navigation }) {

  const [ apparelProducts , updateApparelProducts ] = useState([])
  const db = getFirestore(app)
  const q = query(collection(db, "products"), where("productCategory", "==", "apparel"))

  useEffect(() => {

      getApparelProducts()
  }, [])


  async function getApparelProducts () {

      let data = await getDocs(q)
      data.docs.map(doc => updateApparelProducts( arr => [...arr, {id : doc.id , product : doc.data()}]))

  }

  const renderItem = ( item ) => (
    <ProductListItem  product = {item.item.product} navigation={navigation}/>  
  )

  return (
            <FlatList
                    style={{ }}
                    data={apparelProducts}
                    numColumns={2}
                    keyExtractor={ item => item.id }
                    renderItem={renderItem}
                    ListHeaderComponent={
                      <>
                        <View style={{ marginVertical : 10, marginLeft : 10 }}>
                            <Text style={{ fontSize : 20 }}>Vidokezo</Text>
                        </View>
                      </>
                    }
                />  
          )
}
