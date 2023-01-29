import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [content, setContent] = useState([]);
  const [input, setInput] = useState('');

  const addContent = () => {
    if (input.length == 0) {
      alert("Cannot be empty")
    }
    else{
    setContent([...content, {key: input}])
    setInput('');
    }
  }

  const deleteContent = () => {
    setContent([]);


  }
  return (
    <View style={styles.container}>
      <Text>Add items to shoppinglist</Text>
      <TextInput
      style={{width: "50%",height: 30, borderColor: 'gray', borderWidth: 1, margin:10}}
      onChangeText={input => setInput(input)}
      value={input}
      />
      <StatusBar style="auto" />
      <View style={{flex:0, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 0.2, margin: 10}}>
          <Button
            title='Add'
            onPress={addContent}
      
       />
      </View>
        <View style={{flex: 0.2, margin: 10}}>
          <Button
            title='Clear'
            onPress={deleteContent}
        />
        </View>
      </View>
      <View style={{flex: 1, margin: 10, justifyContent: 'center'}}>
        <FlatList
          data={content}
          renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "50%"
  },
});
