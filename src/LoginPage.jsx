import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import styles from "./styling";

export default function LoginPage({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>This is our log-in page</Text>
        <StatusBar style="auto" />
        <Button
          title="Click here to log in"
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        />
      </View>
    </>
  );
}
