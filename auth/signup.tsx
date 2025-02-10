import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View , Image, TouchableOpacity, SafeAreaView, StatusBar, TextInput} from "react-native";
import { RootStackParamList } from "../RootStackParamList";
import { AppStyles } from "../appStyles/appstyles";
import { useState } from "react";

 
 type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen = ({navigation} : Props) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");


    const navtoLoginScreen = () =>{
        navigation.navigate('Login');
      }


    return(
         <SafeAreaView style={AppStyles.safeArea}>
              <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <Image  source = {require('../assets/arr.jpg')} style = {AppStyles.fullBGImage}></Image>
        <View  style = {AppStyles.container}>
        <View  style = {AppStyles.leftContainer}>
        <Image  source = {require('../assets/playmusic.png')} style = {AppStyles.smallAppLogo}></Image>
        <Text style = {AppStyles.AppMediumWTxt}>Create an New Account</Text>
        </View>
    
       <View style = {AppStyles.VerticalSapcing} />
       <View style = {AppStyles.blurContainer} >
        <TextInput
        style={AppStyles.AppTextInputiled}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
  <View style = {AppStyles.VerticalSapcing} />
      <TextInput
        style={AppStyles.AppTextInputiled}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
        <View style = {AppStyles.VerticalSapcing} />
      <TextInput
        style={AppStyles.AppTextInputiled}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        value={cPassword}
        onChangeText={setCPassword}
        secureTextEntry
      />
   

    
          <TouchableOpacity style ={AppStyles.largeThemeButton}  >
          <Text style ={AppStyles.largeThemeButtonTxt}>Sign Up</Text>
          </TouchableOpacity>
          </View>
          <View style = {AppStyles.VerticalSapcing} />
          <View style = {AppStyles.rowContainer} >
          <Text style = {AppStyles.AppSmallWTxt}>Having Existing Account?</Text>
          <View style = {AppStyles.HorizontalSapcing} />
          <Text style = {AppStyles.AppSmallRTxt} onPress={navtoLoginScreen}>Log in</Text>
          </View>
          </View>
      

          </SafeAreaView>
    );
}