import React from "react";
import { Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from "@/components/Themed";
import styles from "./styles";

import movie from "@/assets/data/movie";

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>MovieDetailsScreen is here</Text> */}
      <Image style={styles.image}
        source={{ uri: firstEpisode.poster }}
      />
      <Text>{movie.title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.match}>98% match</Text>
        <Text style={styles.year}>{movie.year}</Text>
        <View style={styles.ageContainer}>
          <Text style={styles.age}>12+</Text>
        </View>
        <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="white" />
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
