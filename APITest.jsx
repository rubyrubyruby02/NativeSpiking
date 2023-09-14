import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, Text, View } from "react-native";
import styles from "./styling";
import { useEffect, useState } from "react";
import axios from "axios"

export default function APITest() {
const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(({data})=>{
            setPokemon(data)
            console.log(data)
        })
    }, [])

    return (
      <>
      <View style={styles.container}>
        <Text>This is the API Test Page</Text>
        <StatusBar style="auto" />
        <View>
           <Text>{pokemon.name}</Text> 
        </View>
      </View>
      </>
    );
  }
  
