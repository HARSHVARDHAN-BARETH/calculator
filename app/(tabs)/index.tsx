import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

const index = () => {
  const navigation = useNavigation();
  const handle = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'calculator'
          }
        )
  }
  const handleFlat = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'flatlist'
          }
        )
  }
  const handlechat = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'chat'
          }
        )
  }
  const handleAPi = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'api'
          }
        )
  }
  const handletask = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'task'
          }
        )
  }
  const handleGemini = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'gemini'
          }
        )
  }
  const handlepage = ()=>{
        navigation.navigate('(Screen)',
          {
            screen: 'page'
          }
        )
  }

  return (
    <View>
      <Button title='move' onPress={handle}/>
      <Button title='flat' onPress={handleFlat}/>
      <Button title='chat' onPress={handlechat}/>
      <Button title='api' onPress={handleAPi}/>
      <Button title='task' onPress={handletask}/>
      <Button title='page' onPress={handlepage}/>
      <Button title='gemini' onPress={handleGemini}/>
      <Text>index</Text>
    </View>
  )
}

export default index