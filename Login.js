import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Text, Button } from "react-native";
import { async } from 'react-native';
export default function Login(props){

const [phoneNumber, setPhoneNumber] = useState("");
const [oneTimePassword, setOneTimePassword] = useState("");
  return (
    <View>
      <Text style={styles.login}>Log in to continue</Text>
      <TextInput
        style={styles.login}
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="numeric"
      />
      <Button title="Send SMS" onPress={()=>{

        fetch("https://dev.stedi.me/twofactorlogin/"+phoneNumber,{
          method:'POST',
          headers:{
            Accept:"application/text",
            "Content-Type":"application/text"
          }
        });
      }}></Button>
       
      <TextInput
        style={styles.login}
        placeholder="One-Time Password"
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        keyboardType="numeric"
      />

      <Button title="Verify OTP" onPress={()=>{
         fetch("https://dev.stedi.me"+phoneNumber,{
        method: 'POST',
        headers:{
          Accept:"application/text",
          "Content-Type":"application/text"
        },
        body:JSON.stringify({
          phoneNumber:phoneNumber,
          oneTimePassword:oneTimePassword
        })
      })
      return props.setUserLoggedIn(true);
    }}>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  login: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "green",
    height: "18%",
    alignItems: "flex-end",
    paddingTop: 50,
    paddingLeft: 95,
    paddingRight: 10,
    fontSize: 30,
  },
  input: {
    //flexDirection: "column",
    backgroundColor: "red",
    height: "15%",
    fontSize: 23,
  },
});