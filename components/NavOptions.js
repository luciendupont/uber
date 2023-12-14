import { View, Text, FlatList, Touchable, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const data =[
    {
        id:"123",
        title:"get a ride ",
        image: "https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen",

    },

];

const NavOptions = () => {
  return (
   <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    horizontal
    renderItem={({item})=>(
        <TouchableOpacity>
        <Text>{item.title}</Text>
        <View>
            <Image 
            style={{width:120,height:120, resizeMode:"contain"}}
                source={{ uri: item.image }}/>
        </View>
            
        </TouchableOpacity>

    )}
   />
  );
};

export default NavOptions
