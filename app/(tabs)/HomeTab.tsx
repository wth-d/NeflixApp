import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'expo-router';
import HomeScreen from "@/screens/HomeScreen";
import MovieDetailsScreen from "@/screens/MovieDetailsScreen";

const HomeTabStack = createStackNavigator();
// const HomeStack = createStackNavigator<HomeParamList>();

const HomeTab = () => {
  // return (
  //   <Stack>
  //     <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
  //     <Stack.Screen name="MovieDetailsScreen" options={{  }} />
  //   </Stack>
  // );

  return ( // Note: the Screen at the top (in this Stack) is rendered first.
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <HomeTabStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ title: 'some title', }}
        // options={{ headerShown: false }}
      />
      
    </HomeTabStack.Navigator>
  );
};

export default HomeTab;
