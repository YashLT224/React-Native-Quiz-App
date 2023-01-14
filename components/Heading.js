import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Heading({titletext}) {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>  {titletext}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'800',
        
    },
    container:{
      paddingVertical:16,
      justifyContent:'center',
      alignItems:'center'
    }
})