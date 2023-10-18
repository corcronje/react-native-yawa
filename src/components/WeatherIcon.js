import { Image, StyleSheet } from "react-native";

export default function WeatherIcon({ icon }) {
  const images = {
    "01d": {
      uri: require("../../assets/weather/01d.png"),
    },
    "01n": {
      uri: require("../../assets/weather/01d.png"),
    },
    "02d": {
      uri: require("../../assets/weather/02d.png"),
    },
    "02n": {
      uri: require("../../assets/weather/02d.png"),
    },
    "03d": {
      uri: require("../../assets/weather/03d.png"),
    },
    "03n": {
      uri: require("../../assets/weather/03d.png"),
    },
    "04d": {
      uri: require("../../assets/weather/04d.png"),
    },
    "04n": {
      uri: require("../../assets/weather/04d.png"),
    },
    "09d": {
      uri: require("../../assets/weather/09d.png"),
    },
    "09n": {
      uri: require("../../assets/weather/09d.png"),
    },
    "10d": {
      uri: require("../../assets/weather/10d.png"),
    },
    "10n": {
      uri: require("../../assets/weather/10d.png"),
    },
    "11d": {
      uri: require("../../assets/weather/11d.png"),
    },
    "11n": {
      uri: require("../../assets/weather/11d.png"),
    },
    "13d": {
      uri: require("../../assets/weather/13d.png"),
    },
    "13n": {
      uri: require("../../assets/weather/13d.png"),
    },
    "50d": {
      uri: require("../../assets/weather/50d.png"),
    },
    "50n": {
      uri: require("../../assets/weather/50d.png"),
    },
  };

  return <Image source={images[icon].uri} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
