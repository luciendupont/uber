import { View, Text,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'
import tailwind from 'tailwind-react-native-classnames'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tailwind`text-red-500 p-10 `}>I am the HomeScreen</Text>
   </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    text:{
        color:"red"
    },
});