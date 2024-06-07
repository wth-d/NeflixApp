import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // put donwload icon to center
    marginBottom: 5,
  },
  image: {
    width: '35%',
    aspectRatio: 16/9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1, // change horizontal space occupied by this container
    padding: 5,
    justifyContent: 'center',

  },
  title: {

  },
  duration: {
    color: 'darkgrey',
    fontSize: 12,
  },
  plot: {
    color: 'darkgrey',
  },
});

export default styles;
