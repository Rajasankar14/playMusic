import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View , Image, TouchableOpacity, SafeAreaView, StatusBar, TextInput} from "react-native";
import { RootStackParamList } from "../RootStackParamList";
import { AppStyles } from "../appStyles/appstyles";
import { useState } from "react";

 
 type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({navigation} : Props) =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navtoSignUpScreen = () =>{
        navigation.navigate('SignUp');
      }

      const navtoHomeScreen = () =>{
        navigation.navigate('bottomTabs');
      }

      
    return(
         <SafeAreaView style={AppStyles.safeArea}>
              <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
          <Image  source = {require('../assets/aniruth.jpg')} style = {AppStyles.fullBGImage}></Image>
        <View  style = {AppStyles.container}>
        <View  style = {AppStyles.leftContainer}>
        <Image  source = {require('../assets/playmusic.png')} style = {AppStyles.smallAppLogo}></Image>
        <Text style = {AppStyles.AppMediumWTxt}>Login to your Account</Text>
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
   

    
          <TouchableOpacity style ={AppStyles.largeThemeButton}  onPress={navtoHomeScreen}  >
          <Text style ={AppStyles.largeThemeButtonTxt}>Log in</Text>
          </TouchableOpacity>
          </View>
          <View style = {AppStyles.VerticalSapcing} />
          <View style = {AppStyles.rowContainer} >
          <Text style = {AppStyles.AppSmallWTxt}>Don't have an account?</Text>
          <View style = {AppStyles.HorizontalSapcing} />
          <Text style = {AppStyles.AppSmallRTxt} onPress={navtoSignUpScreen}>Sign up</Text>
          </View>
          </View>

          </SafeAreaView>
    );
}