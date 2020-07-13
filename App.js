import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const App =()=>{
  return(
    <View style ={styles.container}>
      <Text style={styles.text}> 
        Hello World!
        
      </Text>
      <Image source={{ uri: 'https://i.kym-cdn.com/photos/images/original/000/325/428/264.jpg' }} style={styles.img}/>
     
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  text:{
    color: 'magenta', 
    fontSize: 20

  },

  img:{
    width: 200,
    height: 200

  }
})

export default App