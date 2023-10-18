import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import * as Location from "expo-location";

import * as OpenWeather from "./api/OpenWeather";

import WeatherIcon from "./src/components/WeatherIcon";

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [city, setCity] = useState("Mountain View");
  const [temperature, setTemperature] = useState(288.71);
  const [description, setDescription] = useState("overcast clouds");
  const [icon, setIcon] = useState("01d");

  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    Location.getCurrentPositionAsync().then((position) => {
      setCurrentPosition(position);
    });
  };

  const getWeatherByPosition = () => {
    OpenWeather.getWeatherByLocation(
      currentPosition.coords.latitude,
      currentPosition.coords.longitude
    ).then((weather) => {
      setCity(weather.city);
      setTemperature((weather.temperature - 273.15).toFixed(0));
      setDescription(weather.description);
      setIcon(weather.icon);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getCurrentPosition().then(() => {
      getWeatherByPosition();
    });

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  useEffect(() => {
    /* getCurrentPosition();

    setInterval(() => {
      getCurrentPosition();
    }, 1 * 60 * 1000); */
  }, []);

  useEffect(() => {
    if (currentPosition) {
      getWeatherByPosition();
    }
  }, [currentPosition]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: Dimensions.get("window").height,
          }}
        >
          <WeatherIcon icon={icon} />
          <Text>{city}</Text>
          <Text>{temperature}&deg;C</Text>
          <Text>Pull down to refresh</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    width: "100%",
    contentContainerStyle: {
      height: "100%",
    },
  },
});
