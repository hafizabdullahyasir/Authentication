import { StyleSheet, View } from "react-native"
import { useState } from "react"
import Input from "./Input"
import Button from "../ui/Button"


export default function AuthForm({credentialsAreValid, onSubmit, isLogin}){
 const [enteredEmail, setEnteredEmail] = useState('');
 const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
 const [enteredPassword, setEnteredPassword] = useState('');
 const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
 
const {
    email: emailIsInavlaid,
    confirmEmail: emailISDontMatch,
    password: passwordIsInavlaid,
    confirmPassword: passwordISDontMatch,


} = credentialsAreValid;




    function updateInputValueHandler(inputType, enteredValue){
      switch (inputType){
        case 'email':
            setEnteredEmail(enteredValue);
            break;
        case 'confirmEmail':
            setEnteredConfirmEmail(enteredValue);
            break;
        case 'password':
            setEnteredPassword(enteredValue);
            break;
        case 'confirmPassword':
            setEnteredConfirmPassword(enteredValue);
            break;



      }    
 
    }

   function submitHandler(){
    onSubmit({
        email: enteredEmail,
        confirmEmail: enteredConfirmEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
    })
   }






     return (
         <View style={styles.form}>
            <View>
                <Input
                label="Email Address"
                onUpdateValue={updateInputValueHandler.bind(this, 'email')}
                value={enteredEmail}
                keyboardType="email-address"
                isInvalid={emailIsInavlaid}/>
                {
                    !isLogin && (
                        <Input
                        label="Confirm Email Address"
                        onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
                        value={enteredConfirmEmail}
                        keyboardType="email-address"
                        isInvalid={emailISDontMatch}
                         />
                        
               ) }
               <Input
               label="Password"
               onUpdateValue={updateInputValueHandler.bind(this, 'password')}
               value={enteredPassword}
               secureTextEntry
               isInvalid={passwordIsInavlaid}
               /> 
               {
                !isLogin && (
                    <Input
                    label="Confirm Password"
                    onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
                    secureTextEntry
                    value={enteredConfirmPassword}
                    isInvalid={passwordISDontMatch}
                    />
                )
               } 
               <View style={styles.buttons}>
                <Button onPress={submitHandler}>
                    {isLogin ? 'Login' : 'Create Account'}
                </Button>

                
                </View> 
            </View>
         </View>

     )


}

const styles = StyleSheet.create({
  
    buttons: {
        marginTop: 12,
    },
})