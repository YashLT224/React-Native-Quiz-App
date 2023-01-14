import React from 'react'
import { Image,View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import Heading from '../components/Heading'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
           <Heading titletext='Quizzler' />
           
            <View style={styles.bannerContainer}>
            <Image  style = {styles.banner} resizeMode='contain' source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        paddingHorizontal:16,
        height:'100%'
    },
    banner:{
        height:300,
        width:300,
        justifyContent:'center',
        alignItems:'center'

    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
        
    },
    button:{
        width:'100%',
        backgroundColor:'#1A759F',
        padding:16,
        borderRadius:16,
    alignItems:'center',
    marginBottom:46
    },
    buttonText:{
        color:'white',
        fontSize:18
    }
    
})