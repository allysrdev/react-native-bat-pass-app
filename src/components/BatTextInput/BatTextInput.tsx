import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./BatTextInputStyles";

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput({ pass }: BatTextInputProps) {
  return <TextInput placeholder="pass" style={styles.inputer} value={pass} />;
}
