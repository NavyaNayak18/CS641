import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View , ActivityIndicator, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>text 1</Text>
      <Text>text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image source= {{uri: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=1024x1024&w=is&k=20&c=m5cYGPJsDS6nTsxYucy6jlCj7flGliYw6Lf4Ftg0jQs="}}
      style={styles.tinyLogo}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  tinyLogo: {
      width: 500,
      height: 500,
    }
});
