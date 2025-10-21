import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./BatLogoStyles";
import { IMAGES } from "../../Images";

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={IMAGES.logo}
        style={{
          resizeMode: "contain",
          height: 180,
        }}
      />
    </>
  );
}
