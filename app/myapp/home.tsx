import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const home = () => {
    const navigation = useNavigation();
    const handle = ()=>{
        navigation.navigate('myapp', 
            {
                screen: 'signup'
            }
        )
    }
  return (
    <View>
      <Text onPress={handle}>Welcome!</Text>
    </View>
  )
}

export default home