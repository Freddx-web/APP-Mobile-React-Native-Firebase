/**
*
*  Auth.js
*
*/
import React from 'react';
import { Text, View, TextInput, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

// Firebase
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";

// Styles
import AppStyles from '../../styles/AppStyles';

//Components
import InlineTextButton from '../../components/InlineTextButton';
import Background from "../../components/Background"
import Button from "../../components/Button"


export default function Login({ navigation }) {
  
  if (auth.currentUser) {
    navigation.navigate("Dashboard");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("ManageAccount");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("ManageAccount", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }
  return (
    <Background>
      <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
      <Text style={AppStyles.errorText}>{errorMessage}</Text>
      <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Email' 
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
      <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
          placeholder='Password' 
          placeholderTextColor="#BEBEBE" 
          secureTextEntry={true} 
          value={password} 
          onChangeText={setPassword} />
      
      <Button
        mode="contained"
        onPress={login}
        style={{ marginTop: 24 }}
      >
        Login
      </Button>

      <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>{'\n'}Don't have an account? {'\n'}</Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
      <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
        <Text style={AppStyles.lightText}>Forgotten your password? </Text>
        <InlineTextButton text="Reset" onPress={() => navigation.navigate("ResetPassword")} />
      </View>
      
    </Background>
  );
}


