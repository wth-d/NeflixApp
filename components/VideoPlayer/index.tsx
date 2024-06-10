import React, { useRef, useEffect } from "react";
import { Text, View } from '@/components/Themed';
import styles from "./styles";
import { Episode } from "@/types";
import { Video, ResizeMode } from "expo-av";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  episode: Episode, // 'Episode' is defined in types.tsx
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = React.useState({});
  const video = useRef<Video>(null); // ts: video becomes Video or Playback type?
  
  useEffect(() => {
    if (!video || !video.current) {
      return;
    }
    (async () => {
      await video.current?.unloadAsync(); // unloads the previous video
      await video.current?.loadAsync( // loads the next one
        { uri: episode.video },
        {},
        false
      );
      // The video will start from the beginning when user clicks on an episode.
    })(); // calls immediately
  }, [episode]);

  // const handleVideoRef = (component: Playback) => {
  //   const playbackObject = component;
  //   console.log("playbackObject is null:", playbackObject === null);

  //   const source = { uri: episode.video };
  //   const initialStatus = {};
  //   playbackObject.loadAsync(source, initialStatus, false);
  // };

  return (
    <View>
      <Video
        // ref={handleVideoRef}
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        // posterSource={{ uri: episode.poster }}
        posterStyle={{
          // width: '100%',
          // height: 100,
          resizeMode: 'cover',
        }}
        // usePoster={true} // may need to set this based on the load status of video
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        // isLooping
        onPlaybackStatusUpdate={(statusArg) => setStatus(() => statusArg)}
      />
    </View>
  );
};

export default VideoPlayer;
