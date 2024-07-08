import React from "react";
import { Image, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  const nav = useNavigation();
  const onMoviePress = (movie: { id: string, poster: string }) => {
    // console.warn("movie is", movie);
    nav.navigate("MovieDetailsScreen", { id: movie.id }); // typescript error to be fixed
    // Will query the database to display the movie with this id.
  };

  return (
    // or perhaps use <React.Fragment>
    <>
      <Text style={styles.title}>{props.category.title}</Text>
      <FlatList
        data={props.category.movies}
        renderItem={({ item }) => (
          <Pressable onPress={() => onMoviePress(item)}>
            <Image style={styles.image} source={{ uri: item.poster }} />
          </Pressable>
        )}
        horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default HomeCategory;
