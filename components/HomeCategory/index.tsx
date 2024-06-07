import React from "react";
import { Image, FlatList } from "react-native";

import { Text, View } from '@/components/Themed';
import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string,
    title: string,
    movies: {
      id: string,
      poster: string,
    }[];
  }
}

const HomeCategory = (props: HomeCategoryProps) => {
  return (
    // or perhaps use <React.Fragment>
    <>
      <Text style={styles.title}>{props.category.title}</Text>
      <FlatList
        data={props.category.movies}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item.poster }} />
        )}
        horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
