import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async ()=>{
   try{
    const response = await fetch('https://fakestoreapi.com/products')
    const json = await response.json();
    setData(json);
   } catch(err) {
    console.log(err);
  }finally{
    setLoading(false);
  }
  }
 

  useEffect(()=>{
    getApi();
  }, [])

  return (
    <View>
      <Text>api</Text>
      {

      }
     <FlatList 
     data={data}
     keyExtractor={({id})=>id}
     renderItem={({item})=>(
        <View>
           <Text> {item.title},</Text>  
          <Text>  {item.description}</Text> 
          <Image style={{width:100, height:100}} source={{uri:item.image}} />
        </View>
     )}/>

    </View>
  )
}

export default api