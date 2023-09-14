import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styling";
import { useEffect, useState } from "react";
import axios from "axios";

export default function APITest() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>This is the API Test Page</Text>
        <View key={pokemon.id} style={styles.item}>
          <Text>{pokemon.name}</Text>
        </View>
      </View>
    </>
  );
}
