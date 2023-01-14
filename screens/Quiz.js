import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';

const shuffleArray=(array)=>{
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]]
    }
}
export default function Quiz({navigation}) {
  const [questions, setquestions] = useState();
  const [qno, setqno] = useState(0);
  const[options,setOptions]=useState([])
  const [score,setScore]=useState(0)
  const [loading, setLoading]=useState(false)
  const getquiz = async () => {
    setLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false)
    setquestions(data.results);
    setOptions( generateoptionsandShuffle( data.results[0])) 
  };
  const HandlenextPress=()=>{
    setqno(qno+1)
    setOptions( generateoptionsandShuffle( questions[qno+1])) 
   
  }
  const generateoptionsandShuffle=(_question)=>{
      console.log(_question)
       const options=[..._question.incorrect_answers]
       options.push(_question.correct_answer)
       shuffleArray(options)
       return options
  }

  const handleSelectedOption =(_option)=>{
      console.log('----',_option)
      console.log(questions[qno].correct_answer)
     console.log(_option===questions[qno].correct_answer) 
     if(_option===questions[qno].correct_answer){
         setScore(score+10)
     }
     if(qno!==9){
        setqno(qno+1)
        setOptions( generateoptionsandShuffle( questions[qno+1])) 
     }
     if(qno===9){
        navigation.navigate('Result',{score:score})
     }
   
  }
 
  useEffect(() => {
    getquiz();
  },[]);
  return (
    <View style={styles.container}>
        {loading&&  <ActivityIndicator size="large" color='#34A0A4' />}
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.ques}>
              Q: {decodeURI (questions[qno].question)}
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
              <Text style={styles.option}>{decodeURI (options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
              <Text style={styles.option}>{decodeURI (options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
              <Text style={styles.option}>{decodeURI (options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
              <Text style={styles.option}>{decodeURI (options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button} onPress={()=>HandlenextPress()}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
{/* {qno!==9&&<TouchableOpacity style={styles.button} onPress={()=>HandlenextPress()}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>} */}
            {qno===9&&<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Result',{score:score})}>
              <Text style={styles.buttonText}>Show Result</Text>
            </TouchableOpacity>}
          </View>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 16,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  ques: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent:{
      height:'100%'
  }
});
