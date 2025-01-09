import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


  const data= [
    {
      name:'America'
    },
    {
      name:'America'
    },
    {
      name:'America'
    },
    {
      name:'America'
    },
    {
      name:'America'
    },
    {
      name:'America'
    },
    {
      name:'America'
    },
  ]

const gemini = () => {
  return (
    <View style={styles.container}>
    <FlatList
    data={data}
    numColumns={2}
    keyExtractor={(item,idx)=>item.name+idx}
    columnWrapperStyle={{gap:10, paddingHorizontal:12}}
    contentContainerStyle={{gap:10, paddingBottom:20}}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>{
      return (
        <TouchableOpacity
        style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row',
          backgroundColor:'pink',
          flex:2,
          height:200,
          borderRadius:20
        }}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
      )
    }}
    ListHeaderComponentStyle={{marginVertical:20}}
    ListHeaderComponent={()=>(
      <View>
        <FlatList
        horizontal={true}
        style={{paddingVertical:5}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:10, paddingHorizontal:12}}
        data={data}
        keyExtractor={(item, idx)=>item.name+idx}
        renderItem={({item})=>(
          <TouchableOpacity
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            backgroundColor:'pink',
            flex:2,
            height:240,
            width:350,
            borderRadius:20
            }}
          >
           <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        />
       <View>
         <View  style={[{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            marginTop:10,
            backgroundColor:'#fff',
            paddingLeft:20,
            paddingRight:20
            }]}>
          <Text style={{fontSize:20}}>Popular</Text>
          <Text style={{fontSize:20}}>See All</Text>
        </View>
       </View>
      </View>
    )}
    />
    </View>
  )
}

export default gemini

const styles = StyleSheet.create({
     container:{
        flex:1,
        marginTop:2,
        backgroundColor:'#fff'
     }
})