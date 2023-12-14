import { View, Text,StyleSheet,SafeAreaView,Image} from 'react-native'
import React from 'react'
import tailwind from 'tailwind-react-native-classnames'
import NavOptions from "moi/components/NavOptions.js"

const HomeScreen = () => {
  return (
    <SafeAreaView style={tailwind`bg-white h-full`}>
<View style={tailwind`p-5`}>
    <Image
    style={{
        width:100,
        height:100,
        resizeMode:"contain",
    }}
    source={{
        uri:"https://links.papareact.com/gzs"
    }}

    />
<NavOptions/>
</View>
   </SafeAreaView>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
    text:{
        color:"red"
    },
});