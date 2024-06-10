import React, { useState } from "react";
import { Image, Pressable, FlatList } from "react-native";
import { MaterialIcons, Entypo, Octicons, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { Text, View } from "@/components/Themed";
import EpisodeItem from "@/components/EpisodeItem";
// import { Picker } from '@react-native-picker/picker';
import ModalSelector from 'react-native-modal-selector';
import styles from "./styles";

import movie from "@/assets/data/movie";
import VideoPlayer from "@/components/VideoPlayer";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  const [selectedSeason, setSelectedSeason] = useState(firstSeason.name);
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode);

  // const seasonNames = movie.seasons.items.map((season) => season.name);

  const seasons = movie.seasons.items;
  // const seasonsData = seasons.map((season, index) => ({ key: index, label: season.name }));

  return (
    <View style={styles.container}>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={
          seasons.find((season) => season.name === selectedSeason)?.episodes.items
        }
        // "?." is a special syntax; (it means that if the season is undefined, then return an empty array;)
        // firstSeason.episodes.items
        renderItem={({ item }) => (
          <EpisodeItem episode={item} onPressItem={setCurrentEpisode} />
        )}
        style={{ marginBottom: 250 }} // need this margin so that can scroll to the bottom;
        ListHeaderComponent={
          // {/* this View with padding should wrap everything below inside it so that the left&right are vertically aligned */}
          <View
            style={{ padding: 12 }} // padding for Episode items is set in EpisodeItem component's styles;
          >
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play button */}
            <Pressable
              onPress={() => {
                console.warn("play");
              }}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" /> Play
              </Text>
            </Pressable>

            {/* Download button */}
            <Pressable
              onPress={() => {
                console.warn("download");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <Octicons name="download" size={16} color="white" />
                {"  "}
                Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/* Row with 3 icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            {/* react-native-modal-selector */}
            <ModalSelector
              data={seasons.map((season, index) => ({
                key: index,
                label: season.name,
              }))}
              initValue={selectedSeason} // should NOT be firstSeason.name
              onChange={(option) => {
                // console.log("option:", option);
                setSelectedSeason(option.label);
              }}

              // // selectedItemTextStyle={{ color: "white" }} // in modal
              // The following 3 are only for 'default mode'.
              // initValueTextStyle={{ color: "white" }}
              // selectTextStyle={{ color: "white" }}
              // selectStyle={{ flex: 1, alignItems: 'flex-start', borderWidth: 0, marginTop: 10 }} // alignt to left; remove border;
              // // style={{ width: '80%' }} // add down arrow
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ color: "white", marginTop: 15 }}>
                  {selectedSeason}{"   "}
                </Text>
                <AntDesign name="down" size={16} color="white" />
              </View>
            </ModalSelector>

            {/* @react-native-picker/picker */}
            {/* <Picker
              style={{ backgroundColor: 'white',  }}
              // style={{ color: "white" }}
              itemStyle={{ height: 100, }}
              numberOfLines={1}
              selectedValue={selectedSeason}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSeason(itemValue);
                console.log(itemValue, itemIndex);
              }}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item label={seasonName} value={seasonName} key={seasonName} style={{  }} /> // unique 'key' is needed; if you remove it you'll get an error;
              ))}
              { <Picker.Item label="Java" value="java" /> }
              { <Picker.Item label="JavaScript" value="js" /> }
            </Picker> */}
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
