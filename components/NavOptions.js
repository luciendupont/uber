import { View, Text, FlatList, Touchable, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import tailwind from 'tailwind-react-native-classnames';

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
        <TouchableOpacity style={tailwind`p-2 pl-6 pb-8 pt-4bg-red-200 m-2 w-40`}>
      
        <View>
            <Image 
            style={{width:120,height:120, resizeMode:"contain"}}
                source={{ uri: item.image }}/>
          <Text>{item.title}</Text>
          </View>
            
        </TouchableOpacity>

    )}
   />
  );
};

export default NavOptions
