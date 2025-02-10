import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar, TextInput } from "react-native";
import { RootStackParamList } from "../RootStackParamList";
import { AppStyles } from "../appStyles/appstyles";
import { useState } from "react";


//type Props = NativeStackScreenProps<RootStackParamList, 'MusicDashboard'>;

export const SearchScreen = () => {




    // const navtoLoginScreen = () => {
    //     navigation.navigate('Login');
    // }


    return (
        <SafeAreaView style={AppStyles.safeArea}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <View style={AppStyles.VerticalStatusBArSapcing} />
            <View style={AppStyles.rowContainer1} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require('../assets/playmusic.png')} style={AppStyles.ToolbarAppLogo}></Image>
                <View style={AppStyles.MediumHorizontalSapcing} />
                <Text style={AppStyles.AppSmallWTxt}>Search</Text>
             </View>

            
            </View>
            
            <View style={AppStyles.container}>
            </View>
        </SafeAreaView>
    );
}