import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/mock';
import SignupForm from '../forms/SignupForm';

const SignUpScreen = ({ navigation }) => {
  return (
    <SignupForm
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </SignupForm>
  );
};


export default SignUpScreen;