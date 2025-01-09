import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const flatlist = () => {

    // const data = [
    //     {id:1, name: 'Harshvardhan'},
    //     {id:2, name: 'Harshit'},
    //     {id:3, name: 'Solanki'},
    // ]

    interface productProps {
      name:String,
      price:String,
      image:String,
      crossPrice:String,
    }

    let data : productProps[] = [
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
    ]
    let array : productProps[] = [
      {
        name:'Addidas',
        price:'40,000',
        image: 'https://images-cdn.ubuy.co.in/65427730834ae624600b94a7-adidas-originals-women-39-s-superstar.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Addidas',
        price:'10,000',
        image: 'https://m.media-amazon.com/images/I/610k7umwL6L._AC_UY1000_.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      {
        name:'Bata',
        price:'25,000',
        image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
        crossPrice:'30,000'
      },
      
    ]

  return (
    <View style={styles.container}>
    <View style={{width:'90%', alignSelf:'center', marginTop:20}}>
    {/* <FlatList
      data={data}
      contentContainerStyle={{gap:10}}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item, index })=>(
        <View style={styles.ItemView}>
            <Image resizeMode='contain' style={{width:300,height:200,aspectRatio:1.2, marginTop:20}} source={{uri:item.image}}/>
          <View style={{ width:'100%', paddingLeft:20, paddingBottom:20}}>
          <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>{item.name}</Text>
            <Text style={{fontSize:25, color:'crimson', textDecorationLine:'line-through'}}>{item.crossPrice}</Text>
            <Text style={{fontSize:25,fontWeight:'bold', color:'green'}}>{item.price}</Text>
          </View>
            </View>
      )} /> */}
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}>
        {
          
          array.map((item,index)=>{
            return(
              <View style={styles.ItemView} >
                <Image resizeMode='contain' style={{width:280,height:200,aspectRatio:1.2, marginTop:20}} source={{uri:item.image}}/>
                <View style={{ width:'100%', paddingLeft:20, paddingBottom:20}}>
                <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>{item.name}</Text>
            <Text style={{fontSize:25, color:'crimson', textDecorationLine:'line-through'}}>{item.crossPrice}</Text>
            <Text style={{fontSize:25,fontWeight:'bold', color:'green'}}>{item.price}</Text>                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
    <FlatList
      data={array}
      style={{alignSelf:'center'}}
      numColumns={2}
      contentContainerStyle={{gap:10}}
      columnWrapperStyle={{gap:10}}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index })=>(
        <View style={styles.ItemView2}>
            <Image resizeMode='contain' style={{width:510,height:350,aspectRatio:1.2, marginTop:20}} source={{uri:item.image}}/>
          <View style={{ width:'100%', paddingLeft:20, paddingBottom:20}}>
          <Text style={{fontSize:40,fontWeight:'bold', color:'black'}}>{item.name}</Text>
            <Text style={{fontSize:30, color:'crimson', textDecorationLine:'line-through'}}>{item.crossPrice}</Text>
            <Text style={{fontSize:35,fontWeight:'bold', color:'green'}}>{item.price}</Text>
          </View>
            </View>
      )} />
    </View>
  )
}

export default flatlist

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  ItemView:{
    alignSelf:'center',
    width:300,
    height:310,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    elevation:1,
    borderRadius:10,
    boxShadow: 'black',
    shadowColor:'black',
    shadowOffset:{width:100,height:100},
    shadowOpacity:5,
    marginBottom:10,
  },
  ItemView2:{
    width:850,
    height:500,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    elevation:1,
    borderRadius:10,
    boxShadow: 'black',
    shadowColor:'black',
    shadowOffset:{width:100,height:100},
    shadowOpacity:5,
    marginBottom:10,
  }
})