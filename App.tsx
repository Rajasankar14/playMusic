
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

import {

  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { RootStackParamList } from './RootStackParamList';
import { LoginScreen } from './auth/login';
import { SignUpScreen } from './auth/signup';
import { MusicDashboard } from './homeMusic/musicDashboard';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from './homeMusic/Search';
import { CreatePlaylist } from './homeMusic/createplaylist';
import { FavouriteScreen } from './homeMusic/favouriteScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const Tabs = createBottomTabNavigator();


  function bottomTabs() {
    return (
      <Tabs.Navigator

        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible : false,
          tabBarStyle: { backgroundColor: "#000",  height: 60, paddingTop : 10,  elevation: 0, 
            shadowOpacity: 0,
            borderTopWidth: 0, 
               },

        }}
      >
        <Tabs.Screen
          name='home'
          component={MusicDashboard}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={{ alignItems: "center", justifyContent: "center", width : 100 }}>
                <Image
                  source={require("./assets/home_music.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "#c00d0d" : "gray",
                     paddingTop :5
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#c00d0d" : "gray",
                    fontSize: 12, paddingTop :5
                  
                  }}>Home</Text>
              </View>
            ),

            tabBarShowLabel : false
          }}>

        </Tabs.Screen>



        <Tabs.Screen
          name='search'
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={{ alignItems: "center" , width : 100 }}>
                <Image
                  source={require("./assets/search_music.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#c00d0d" : "gray",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#c00d0d" : "gray",
                    fontSize: 12,
                    marginTop: 2,
                  }}>Search</Text>
              </View>
            ),

            tabBarShowLabel: false
          }}>

        </Tabs.Screen>



        <Tabs.Screen
          name='favourite'
          component={FavouriteScreen}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={{ alignItems: "center", width : 100 }}>
                <Image
                  source={require("./assets/fav_music.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#c00d0d" : "gray",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#c00d0d" : "gray",
                    fontSize: 12,
                    marginTop: 2,
                  }}>Fav</Text>
              </View>
            ),

            tabBarShowLabel: false
          }}>

        </Tabs.Screen>

        <Tabs.Screen
          name='Create'
          component={CreatePlaylist}
          options={{
            tabBarIcon: ({ focused }) => (

              <View style={{ alignItems: "center", width : 100 }}>
                <Image
                  source={require("./assets/create_music.png")}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#c00d0d" : "gray",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#c00d0d" : "gray",
                    fontSize: 12,
                    marginTop: 2,
                  }}>Create</Text>
              </View>
            ),

            tabBarShowLabel: false
          }}>

        </Tabs.Screen>



      </Tabs.Navigator>

    )
  };



  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashScreen}></Stack.Screen>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
        <Stack.Screen name='SignUp' component={SignUpScreen}></Stack.Screen>
        {/* <Stack.Screen name='MusicDashboard' component={MusicDashboard}></Stack.Screen> */}
        <Stack.Screen name='bottomTabs' component={bottomTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;
//const nav = useNavigation();

const SplashScreen = ({ navigation }: Props) => {

  // const navigation = useNavigation();


  const navtoLoginScreen = () => {
    navigation.navigate('Login');
  }

  const navtoSignUpScreen = () => {
    navigation.navigate('SignUp');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Image source={require('./assets/ilayaraja.jpg')} style={styles.fullBGImage}></Image>
      <View style={styles.Container}>
        <Image source={require('./assets/playmusic.png')} style={styles.appLogo}></Image>
        <Text style={styles.largeWhiteTxt}>Play Music</Text>
        <Text style={styles.mediumWhiteTxt}>The Rhythm of Life</Text>
        <TouchableOpacity style={styles.largeThemeButton} onPress={navtoLoginScreen}>
          <Text style={styles.largeThemeButtonTxt}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.largeThemeButton} onPress={navtoSignUpScreen}>
          <Text style={styles.largeThemeButtonTxt}>Sign up</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000', // Ensure status bar background matches screen
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullBGImage: {
    position: "absolute",
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  appLogo: {
    width: 120,
    height: 120,
    alignItems: 'center'
  },
  largeWhiteTxt: {
    justifyContent: 'center',
    color: '#c00d0d',
    alignItems: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  mediumWhiteTxt: {
    justifyContent: 'center',
    color: '#c00d0d',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold'
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
    marginTop: 12,
    height: 45,
    width: '90%',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#c00d0d"
  },
  largeThemeButtonTxt: {
    color: '#fff',
  },
});

export default App;
