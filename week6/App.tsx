import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import RefreshControl1 from './components/Refreshcontrol1';
import ImageBackground1 from './components/ImageBackground1';
import FlatListExample from './components/FlatListExample';
import Modal1 from './components/Modal1';

const App = ()=>{
  const[displayText, setDisplayText]= useState('');
  function longPressButton(){
    setDisplayText('Long Pressed');
  }
  return(
    <View style= {styles.container}>
     <Text>{displayText}</Text>
     <Pressable onLongPress={longPressButton} delayLongPress={3000}>
        <Text>Button Text</Text>
     </Pressable>
     <RefreshControl1/>
     <ImageBackground1/>
     <FlatListExample/>
     <Modal1/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;