import React from 'react'
import Header from './components/Header'
import {View, Text, StyleSheet} from 'react-native'

const App =()=>{
  return(
    <View style ={styles.container}>
      <Header/>
        <Text> 
          Hello world!
        </Text>  
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  }
})

export default App