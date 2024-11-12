import React from 'react';
import { Text, View, TextInput, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

// Firebase
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../../firebase";

//Components
import AppStyles from '../../styles/AppStyles';
import InlineTextButton from '../../components/InlineTextButton';
import Background from "../../components/Background"
import Button from "../../components/Button"

export default function ResetPassword({ navigation }) {
 

  let [email, setEmail] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    
    <Background>

      <Text style={[AppStyles.lightText, AppStyles.header]}>Reset Password</Text>
      <Text style={AppStyles.errorText}>{errorMessage}</Text>
      <TextInput 
        style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]} 
        placeholder='Email' 
        placeholderTextColor="#BEBEBE"
        value={email}
        onChangeText={setEmail} />

      <Button
        mode="contained"
        onPress={resetPassword} 
        style={{ marginTop: 24 }}
      >
        Login
      </Button>

        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
        
    </Background>
    
  );
}


