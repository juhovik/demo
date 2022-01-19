import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0);
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  function calculate() {
    const lowerLimit = (220-age) * 0.65
    setLower(lowerLimit);

    const upperLimit = (220-age) * 0.95
    setUpper(upperLimit);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      keyboardType='numeric'
      value={age}
      onChangeText={setAge}
      >
      </TextInput>
      <Text>Limitis</Text>
      <Text>{lower.toFixed(0)} - {upper.toFixed(0)}</Text>
      <Button onPress={calculate} title='Calculate' />
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
