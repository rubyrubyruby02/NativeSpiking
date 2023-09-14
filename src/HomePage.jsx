import { Button, StatusBar, Text, View } from "react-native";
import styles from "./styling";
import { useState } from "react";

export default function HomePage({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text>This is our Home page</Text>
        <StatusBar style="auto" />
        <Button
          onPress={() => {
            setIsClicked(true);
          }}
          disabled={isClicked}
          title={!isClicked ? "Click this button" : "Thanks for clicking me"}
        />
        <Button
          title="Click here for Counter"
          onPress={() => {
            navigation.navigate("ClickCount");
          }}
        />
        <Button
          title="Click her for a photo"
          onPress={() => {
            navigation.navigate("TestCamera");
          }}
        />
      </View>
    </>
  );
}
