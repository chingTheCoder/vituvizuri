import  React , { useState , useEffect }  from 'react';
import { View, Text, FlatList } from 'react-native';
import { getFirestore, query, where , collection, getDocs} from 'firebase/firestore';
import { app } from '../src/config'
import ProductListItem from './components/Home/ProductListItem'

export default function Men({ navigation }) {

  const [ menProducts , updateMenProducts ] = useState([])
  const db = getFirestore(app)
  const q = query(collection(db, "products"), where("productCategory", "==", "men"))

  useEffect(() => {

      getMenProducts()
  }, [])


  async function getMenProducts () {

      let data = await getDocs(q)
      data.docs.map(doc => updateMenProducts( arr => [...arr, {id : doc.id , product : doc.data()}]))

  }

  const renderItem = ( item ) => (
    <ProductListItem  product = {item.item.product} navigation={navigation}/>  
  )

  return (
            <FlatList
                    style={{ }}
                    data={menProducts}
                    numColumns={2}
                    keyExtractor={ item => item.id }
                    renderItem={renderItem}
                    ListHeaderComponent={
                      <>
                        <View style={{ marginVertical : 10, marginLeft : 10 }}>
                            <Text style={{ fontSize : 20 }}>Bidhaa Za Kiume</Text>
                        </View>
                      </>
                    }
                />  
          )
}


// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });