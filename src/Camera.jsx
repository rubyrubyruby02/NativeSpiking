import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "./styling";

export default function TestCamera() {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  // const [preview, setPreview] = useState(false);

  const cameraRef = useRef(null);

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
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      const source = data.uri;
      if (source) {
        setCapturedImage(source);
      }
    }
  };

  return (
    <View style={styles.cameraContainer}>
      {!capturedImage ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={toggleCameraType}
              title="Flip camera"
              color="white"
            ></Button>
          </View>
          <View>
            <Button
              style={styles.button}
              onPress={takePicture}
              title="Take Pic"
              color="white"
            ></Button>
          </View>
        </Camera>
      ) : (
        <View style={styles.previewImage}>
          <Image
            source={{ uri: capturedImage }}
            style={{ width: 300, height: 400 }}
          ></Image>
          <Text>hELLO</Text>
        </View>
      )}
    </View>
  );
}
