import React from "react";
import * as RN from "react-native-web";

export const Main = () => {
  return (
    <RN.View style={stlMain}>
      <RN.Text>Main</RN.Text>
    </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1
};
