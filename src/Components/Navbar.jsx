import React from "react";
import * as RN from "react-native-web";

export const Navbar = () => {
  return (
    <RN.View style={stlMain}>
      <RN.Text>Navbar</RN.Text>
    </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1
};
