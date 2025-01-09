import { View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground, Dimensions, PixelRatio } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import AppDimension, { getHeight } from '@/components/constant/dimesnons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const { width, height } = Dimensions.get('window');
const fontSize = PixelRatio.get() * 10;


const array = [
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://faujimart.com/cdn/shop/files/4_2086cbdf-84a5-45a1-9b3b-1b2ab5c83f51.png?v=1703860079&width=1445',
    title: 'Pro SELLER',
    name: 'Bata Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.aishcart.in/1523-home_default/bata-disney-red-casual-shoes-for-boys.jpg',
    title: 'Commendable Shoes',
    name: 'Adidas Bidan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://cdn.moglix.com/p/r3U7p078caENn.jpg',
    title: 'First come first server!',
    name: 'Spark',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  },
  {
    image: 'https://www.jiomart.com/images/product/original/rvl9cvytva/bruton-trendy-sports-shoes-for-men-blue-product-images-rvl9cvytva-0-202209021254.jpg?im=Resize=(500,630)',
    title: 'BEST SELLER',
    name: 'Nike Jordan',
    crossPrice: '₹21,193.00',
    price:'₹21,193.00'
  }
]
const page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
    <FlatList
      data={array}
      numColumns={2} 
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{gap:10, justifyContent:'space-between'}}
      columnWrapperStyle={{gap:10}}
      showsVerticalScrollIndicator={false}

      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{ uri: item.image }}
            resizeMode="contain"
          />

          <View style={styles.textContainer}>
            <Text style={[styles.title,{fontSize:responsiveFontSize(2)}]}>{item.title}</Text>
            <Text style={[styles.name,{fontSize:responsiveFontSize(1.5)}]}>{item.name}</Text>
            <Text style={[{fontSize:responsiveFontSize(1.5), color:'red', textDecorationLine:'line-through'}]}>{item.crossPrice}</Text>
            <Text style={[styles.price,{fontSize:responsiveFontSize(1.5)}]}>{item.price}</Text>
          </View>
        </View>
      )}
    />
      </View>
  
  </View>

  )
}

export default page

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    // height: AppDimension.height50,
  },
  box:{
    height: responsiveHeight(150),
    backgroundColor:'#fff',
    padding:10
  },
  card: {
    flex: 1,
    borderBlockColor:'black',
    borderWidth:1,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  textContainer:{
    width:'100%',
     justifyContent:'flex-start',
     alignItems:'flex-start',
     padding:20
  },
  image: {
    width: '100%', 
    aspectRatio: 1.5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  name: {
    color: 'gray',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

