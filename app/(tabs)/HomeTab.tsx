import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "@/screens/HomeScreen";
import MovieDetailsScreen from "@/screens/MovieDetailsScreen";

const HomeTabStack = createStackNavigator();
// const HomeStack = createStackNavigator<HomeParamList>();

const HomeTab = () => {
  return (
    <HomeTabStack.Navigator>
      
      <HomeTabStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ title: 'some title', }}
        // options={{ headerShown: false }}
      />
      <HomeTabStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeTabStack.Navigator>
  );
};

export default HomeTab;
