import React from 'react';
import { Image, FlatList } from 'react-native';

import { Text, View } from '@/components/Themed';
import HomeCategory from '@/components/HomeCategory';
import styles from './styles';
import categories from '@/assets/data/categories';

// const firstCategory = categories.items[0];

// const HomeStack = createStackNavigator<HomeParamList>();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => (
          <HomeCategory category={item} />
        )}
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;


