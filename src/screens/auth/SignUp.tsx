import React from 'react';
import { Text, View, ImageBackground, TextInput,
  KeyboardAvoidingView, Platform } from 'react-native';

// Firebase
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../firebase";

// Styles
import AppStyles from '../../styles/AppStyles';

// Components 
import Background from "../../components/Background"
import Button from "../../components/Button"
import InlineTextButton from '../../components/InlineTextButton';

export default function SignUp({ navigation }) {
  
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate("ManageAccount", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <Background>
      <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>
      <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
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
        onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
      <TextInput 
        style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
        placeholder='Confirm Password' 
        placeholderTextColor="#BEBEBE" 
        secureTextEntry={true} 
        value={confirmPassword} 
        onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />
      
    
      <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>

        <Button
          mode="contained"
          onPress={signUp}
          style={{ marginTop: 24 }}
        >
        Sign Up
        
        </Button>

        {/*<Button title="Sign Up" onPress={signUp} color="#f7b267" /> */}
      </View>
      <Text style={AppStyles.lightText}>{'\n'}Already have an account? </Text>
      <InlineTextButton text="Login" onPress={() => navigation.popToTop()} />
    </Background>
  );
}


