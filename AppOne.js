import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={
        {
            //flex: 1,
            padding: 50, 
            flexDirection: 'row', 
            backgroundColor:'#bbb',
            width: "80%",
            height: 300,
            justifyContent: 'space-around',
            alignItems: 'stretch'

        }
        }>
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            //width: 100,
            //height: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
         <Text>1</Text>   
        </View> 
        <View style={{
            //flex: 1,
            backgroundColor: 'blue',
            //width: 100,
            //height: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
         <Text>2</Text>   
        </View> 
        <View style={{
            //flex: 1,
            backgroundColor: 'green',
            //width: 100,
            //height: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
         <Text>3</Text>   
        </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    //alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#bbb",
    width: "100%"
  }
});
