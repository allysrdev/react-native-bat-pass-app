import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerate() {
    let generatedToken = generatePass();
    setPass(generatedToken);
  }

  function copyToClipboard() {
    Clipboard.setStringAsync(pass);
  }
  return (
    <>
      <BatTextInput pass={pass} />

      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <Text style={styles.text}>GENERATE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
        <Text style={styles.text}>COPY</Text>
      </TouchableOpacity>
    </>
  );
}
