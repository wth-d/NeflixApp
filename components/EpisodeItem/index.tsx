import React from "react";
import { Image, Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Text, View } from '@/components/Themed';

import styles from "./styles";
import { Episode } from "@/types";

interface EpisodeItemProps {
  episode: Episode,
  onPressItem: (episode: Episode) => {},
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPressItem } = props;

  return (
    <Pressable onPress={() => onPressItem(episode)} style={{ marginVertical: 10, marginHorizontal: 12 }}>
      <View style={styles.row}>
        <Image style={styles.image} source={{ uri: episode.poster }} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <Octicons name="download" size={24} color="white" />
      </View>

      <Text style={styles.plot}>{episode.plot}</Text>
    </Pressable>
  );
};

export default EpisodeItem;
