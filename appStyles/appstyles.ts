import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000', // Ensure status bar background matches screen
      },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }, 
        blurContainer: {
            width: "90%",
            height:'auto' ,
            paddingTop: 15,
            paddingBottom : 15,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      leftContainer: {
        width: '100%',
        paddingLeft : 20
    
      },
      rowContainer: {
        width: '100%',
        paddingLeft : 20,
        flexDirection: 'row',
        alignItems: 'center',    
      },
      rowContainer1: {
        width: '100%',
        paddingLeft : 20,
        paddingRight : 20,
        flexDirection: 'row',
        alignItems: 'center',    
        justifyContent: "space-between", 
      },
      fullBGImage :{
        position:"absolute",
        width: '100%',
        height:'100%',
        resizeMode: 'cover',
      },
      appLogo :{
        width: 120,
        height:120,
        alignItems: 'center'
      },
      smallAppLogo :{
        width: 50,
        height:50
      },
      ToolbarAppLogo :{
        width: 30,
        height:30
      },
      iconStyle: {
        width: 24,
        height: 24,
        tintColor: "#fff", // Adjust color as needed
      },
      iconStyleNoTint: {
        width: 35,
        height: 35
      },
      largeWhiteTxt: {
        justifyContent: 'center',
        color :'#c00d0d',
        alignItems :'center',
        fontSize : 28,
        fontWeight :'bold'
      },

      mediumWTxt: {
        justifyContent: 'flex-start',
        color :'#fff',
        alignItems :'flex-start',
        fontSize : 15,
        fontWeight :'bold'
      },
      mediumWhiteTxt: {
        justifyContent: 'center',
        color :'#c00d0d',
        alignItems :'center',
        fontSize : 15,
        fontWeight :'bold'
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      largeThemeButton: {
        marginTop :12,
        height: 45,
        width: '90%',
        borderRadius :12,
        justifyContent : 'center',
        alignItems :'center',
        backgroundColor :"#c00d0d"
      },
      largeThemeButtonTxt: {
        color: '#fff',
     },

     AppMediumWTxt: {
        justifyContent: 'flex-start',
        color :'#fff',
        alignItems :'flex-start',
        fontSize : 18,
        fontWeight :'bold'
      },
      AppTextInputiled: {
        width: "90%",
        height: 50,
        backgroundColor: "rgba(192, 13, 13, 0.5)",
        color: "#fff",
        borderRadius: 20,
        paddingHorizontal: 15
      },
      AppSmallWTxt: {
        color :'#fff',
        fontSize : 15,
        fontWeight :'bold'
      },
      AppSmallRTxt: {
        color :'#c00d0d',
        fontSize : 15,
        fontWeight :'bold'
      },
      VerticalSapcing: {
        marginBottom: 10,
      },
      HorizontalSapcing: {
        marginRight: 10,
      },
      MediumHorizontalSapcing: {
        marginRight: 5,
      },
      VerticalStatusBArSapcing: {
        marginBottom: 50,
      },
      
})