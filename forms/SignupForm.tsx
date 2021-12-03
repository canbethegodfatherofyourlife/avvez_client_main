import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, SafeAreaView,Picker} from 'react-native';
import { or } from 'react-native-reanimated';
import DatePicker from 'react-native-datepicker';
import MultiImageInput from 'react-multiple-image-input';
const SignupForm = ({ buttonText, onSubmit, children, onAuthentication }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [phoneno, onChangePhone]=useState('');
    const [firstname, onChangefirstname]=useState('');
    const [lastname, onChangelastname]=useState('');
    const [birthdate,onChangebirthdate]=useState(new Date());
    const [gender,onChangegender]=useState('');
    const [sorientation,onChangesorientation]=useState('');
    const [showme,onChangeShowme]=useState('');
    const [organization,onChangeOrganization]=useState('');
    const [passion, onChangePassion]=useState('');
    const [photo,setPhoto]=useState({});
    const [errorMessage, setErrorMessage] = useState('');
  
    const submit = () => {
      onSubmit(email, password,phoneno,firstname,lastname,birthdate,gender,sorientation,showme,organization,passion,photo)
        .then(async (res) => {
          onAuthentication();
        })
        .catch((res) => setErrorMessage(res.error));
    };
  
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView >
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry
        />
        <Text>Phone No</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePhone(text)}
          value={phoneno}
          keyboardType="numeric"
        />
        <Text>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangefirstname(text)}
          value={firstname}
        />
        <Text>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangelastname(text)}
          value={lastname}
        />
        <Text>Birth Date</Text>
       <DatePicker
          date={birthdate} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select birth date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(birthdate) => onChangebirthdate(birthdate)}
        />
        <Text>Gender</Text>
        <Button title='Male' onPress={
            (e)=>{
                onChangegender('Male')
            }
        } />
        <Button title='Female' onPress={
            (e)=>{
                onChangegender('Female')
            }
        } />
        <Button title='Others' onPress={
            (e)=>{
                onChangegender('Others')
            }
        } />
        <Text>Sexual Orientation</Text>
        <Button title='Straight' onPress={
            (e)=>{
                onChangesorientation('Straight')
            }
        } />
        <Button title='Bi' onPress={
            (e)=>{
                onChangesorientation('Bi')
            }
        } />
        <Button title='Pan' onPress={
            (e)=>{
                onChangesorientation('Pan')
            }
        } />

        <Text>Show me</Text>
        <Button title='Men' onPress={
            (e)=>{
                onChangeShowme('Men')
            }
        } />
        <Button title='Women' onPress={
            (e)=>{
                onChangeShowme('Women')
            }
        } />
        <Button title='Both' onPress={
            (e)=>{
                onChangeShowme('Both')
            }
        } />
        <Text>Organization</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeOrganization(text)}
          value={organization}
          secureTextEntry
        />
        <Text>Passion</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassion(text)}
          value={passion}
          secureTextEntry
        />
        <Text>Photo</Text>
        <MultiImageInput
        max={4}
        images={photo}
        setImages={setPhoto}
        />
        <Button title={buttonText} onPress={submit} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {children}
      </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 1,

    },
  });
  
  export default SignupForm;