import { View, Text, FlatList } from 'react-native'
import React from 'react'

const task = () => {

  const array = [
   
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    {
      name:'Vivo',
    },
    
  ]

  return (
    <View>
      <Text>task</Text>
      <FlatList
      data={array}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{gap:20, paddingHorizontal:20}}
      numColumns={2}
      keyExtractor={(item, idx)=> item.name+1 }
      renderItem={({item})=>(
        <View style={{width:500,height:200, backgroundColor:'lightblue'}}>
          <Text>{item.name}</Text>
        </View>
        )}
        
        ListHeaderComponentStyle={{marginVertical:20}}
        ListHeaderComponent={()=>(
          <View>
            <FlatList data={array}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{gap:20, paddingHorizontal:20}}
      numColumns={2}
      keyExtractor={(item, idx)=> item.name+1 }
      renderItem={({item})=>(
        <View style={{width:500,height:200, backgroundColor:'lightblue'}}>
          <Text>{item.name}</Text>
        </View>
        )}/>
          </View>
        )}
      />
      
    </View>
  )
}

export default task