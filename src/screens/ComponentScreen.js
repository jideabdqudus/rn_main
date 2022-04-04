import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentsScreen = () =>{
  return <Text style={styles.text}>ComponentS Screen</Text>
}


const styles = StyleSheet.create({
  text:{
    fontSize: 21,
    color:'red'
  }
})

export default ComponentsScreen