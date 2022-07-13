import React from 'react'
import profile from './screens/profile';
import { useColorScheme } from 'react-native';
import Home from './screens/Home';
//import Detail from './screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme, DarkTheme,  useTheme, } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

//const Stack = createNativeStackNavigator();
const App = () => {
   
  const scheme = useColorScheme();
  return (
   
  
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
     
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "profile" : "profile-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: 'black',
        },
         
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
   
  );
};

export default App;
