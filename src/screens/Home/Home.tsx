import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./Style";
import { Menu } from "../Menu/Menu";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

const Home = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <BatButton />
      </View>
    </View>
  );
};

export default Home;
