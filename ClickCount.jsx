import { Button, StatusBar, Text, View } from "react-native";
import styles from "./styling";
import { useEffect, useState } from "react";

export default function ClickCount({navigation}) {
    const [clickAmount, setClickAmount] = useState(0)

    return (
      <>
      <View style={styles.container}>
      <Text>Click the button!</Text>
      <Button  onPress= {()=>{setClickAmount(clickAmount + 1)}} title="Click to add"/>
      <Text> You have clicked the button {clickAmount} times!</Text>
      <Button title="Click here to test APIs" onPress={()=>{navigation.navigate("APITest")}}/>
      </View>
      </>
    );
  }
  