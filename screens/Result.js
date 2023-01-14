import React from 'react'
import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import Heading from '../components/Heading'
export default function Result({navigation,route}) {
    const score=route.params.score
    const resultBanner=score>50?'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png':'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'
    return (
        <View style={styles.container}>
        <Heading titletext='Result'/>
        <Text style={styles.scoretext}>{score}</Text>
         <View style={styles.bannerContainer}>
         <Image  style = {styles.banner} resizeMode='contain' source={{uri:resultBanner}}/>
         </View>
         <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
             <Text style={styles.buttonText}>Home</Text>
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
        height:500,
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
    },
    scoretext:{
        fontSize:24,
        fontWeight:'800',
        alignSelf:'center'
    }
    
})