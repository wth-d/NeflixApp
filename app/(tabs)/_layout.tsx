import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome'; // Ionicons -> FontAwesome
import { AntDesign, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue'; // new

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;    // this is typescript
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen redirect name="index" />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />, // style={{ marginBottom: 8 }}
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
