import React from "react";
import * as RN from "react-native-web";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import HpLogo3 from '../assets/images/HpLogo3.png'


export const Navbar = () => {
  const fnHome = () => { };
  const fnAboutUs = () => { };
  const fnServices = () => { };
  const fnContact = () => { };

  return (
    <RN.View style={stlMain}>
      <RN.View style={stlBackground}>
      <RN.Image style={stlImg} source={HpLogo3} />
      <RN.View style={stlButtonsBox}>
        <RN.TouchableOpacity style={stlButtons} onPress={fnHome}>
          <RN.Text style={stlBtnTxt}>Home</RN.Text>
          </RN.TouchableOpacity>
        
        <RN.TouchableOpacity style={stlButtons} onPress={fnAboutUs}>
          <RN.Text style={stlBtnTxt}>Empresa</RN.Text>
          </RN.TouchableOpacity>
        
        <RN.TouchableOpacity style={stlButtons} onPress={fnServices}>
          <RN.Text style={stlBtnTxt}>Serviços</RN.Text>
          </RN.TouchableOpacity>
          
        <RN.TouchableOpacity style={stlButtons} onPress={fnContact}>
          <RN.Text style={stlBtnTxt}>Contato</RN.Text>
          </RN.TouchableOpacity>
      </RN.View>
      </RN.View>
    </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1,
  width: '100%',
};

const stlBackground = {
  width: '100%',
  backgroundColor: '#000',
  padding: 20,
  flexDirection: 'row',
};



const stlImg = {
      width: 341,
      height: 156,
      // width: 400,
      // height: 300,
      // opacity: "100%",
      // border: "solid",
      // borderColor: "#0E0"
    };

    const stlButtonsBox = {
      flexDirection: 'row',
      width: '100%',
      height: '100%'
    }

    const stlButtons = {
      backgroundColor: '#ccc',
      padding: 4,
      margin: 2,
      borderRadius: '6px',

    }

    const stlBtnTxt = {
      fontFamily: 'Roboto',
      fontSize: 20,
      fontStyle: 'normal',
      // color: '#FFF'
    }
