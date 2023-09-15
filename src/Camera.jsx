import React, { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./styling";

export default function TestCamera() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState("")

  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then(({ status }) => {
        setHasPermission(status === "granted");
      })
      .catch((error) => {
        console.error("Error requesting camera permissions:", error);
      });
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (!Camera) return
    const photo = await Camera.takePictureAsync()
    console.log(photo)
    setCapturedImage(photo)
  }
  

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Button style={styles.button} title="Flip camera"  color="white">
            </Button>
          </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Button style={styles.button} title="Take Pic"  color="white">
          </Button>
        </TouchableOpacity>

      </Camera>
    </View>
  );
}
