import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Text, Button } from 'react-native'

/*const Login = () => {
  const [text, onChangeText] = React.useState("Phone Number");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
*/
export default function Login(props){
  return(
    <View>
      <Text>Login Screen</Text>
      <Button title="Log In" onPress={console.log("Logged In")}></Button>
    </View>
  );
}