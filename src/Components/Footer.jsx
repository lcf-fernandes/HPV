import React from "react";
import * as RN from "react-native-web";

export const Footer = () => {
  return (
    <RN.View style={stlMain}>
      <RN.Text>Footer</RN.Text>
    </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1
};
