import React from "react";
import * as RN from "react-native-web";
import {
  Navbar,
  Main,
  AboutUs,
  Services,
  Extras,
  Advantages,
  Testimonials,
  Partners,
  Contact,
  Footer
} from "./Components";

export default function App() {
  return (
    <RN.View style={stlMain}>
      <Navbar />
      <Main />
      <AboutUs />
      <Services />
      <Extras />
      <Advantages />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </RN.View>
  );
}

// ---------- set Styles
export const stlMain = {
  flex: 1
};
