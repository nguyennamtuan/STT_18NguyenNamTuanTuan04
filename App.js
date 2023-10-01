import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#fafeff', '#56ddfb','#a3ecfd','#17d0f9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}
        style={styles.background}>
          <View style={styles.one}/>
          <View style={styles.two}>
            <Text style={{fontSize:25,lineHeight:27,textAlign:'center'}}>GROW YOUR BUSINESS</Text>
          </View>
          <View style={styles.three}>
            <Text style={{fontSize:15,lineHeight:17.58,textAlign:'center'}}>We will help you to grow your business using online server</Text>
          </View>
          <View style={styles.four}>
            <View style={styles.five}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>LOGIN</Text>
            </View>
            <View style={styles.six}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>SIGN UP</Text>
            </View>
          </View>
          
        </LinearGradient>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#00CCF9',
  },
  one:{
    height:140,
    width:140,
    borderWidth:1,
    marginTop:155,
    borderRadius:100,borderWidth:15
  },
  two: {
    height:58,
    width:192,
    marginTop:62
  },
  three: {
    height:36,
    width:302,
    marginTop:70
  },
  four: {
    marginTop: 60, 
    height:48,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  five: {
    backgroundColor:'yellow',
    height:'100%',
    width:119,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  six: {
    backgroundColor:'yellow',
    height:'100%',
    width:119,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    flex: 1,
    alignItems: 'center',

  },

 
});
