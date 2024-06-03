import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "white",
  },
  image: {
    width: '100%',
    // height: 220,
    aspectRatio: 16/9, // height will increase with the image width, so it's adaptable to different screen sizes;
      // can check the image file itself for the aspect ratio;
    resizeMode: 'cover',
  },
});

export default styles;
