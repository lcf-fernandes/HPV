import React from "react";
import * as RN from "react-native-web";
import BigVan from '../assets/images/BigVan.png'


export const AboutUs = () => {
  return (
      <RN.View style={stlMain}>
        <RN.View style={stlContainer}>
          <RN.View style={stTextBox}>
            <RN.View>
              <RN.Text style={stlTitle}>Experência</RN.Text>
            </RN.View>
            <RN.View>
              <RN.Text style={stlTxt}>
                Com mais de duas décadas no mercado, a Help Vans Locadora oferece um serviço experiente e com qualidade. Atendendo diversos eventos e empresas. 
                Buscamos anualmente nos qualificar para estarmos sempre oferecendo um serviço com excelência
              </RN.Text>
            </RN.View>
          </RN.View>
          <RN.View style={stlImgView}>
            <RN.Image style={stlImg} source={BigVan} />
          </RN.View>
        </RN.View>
      </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1,
  backgroundColor: '#000',
  padding: 10,
};

const stlContainer = {
  flexDirection: 'row'
};

const stTextBox = {
  width:'50%',
};

const stlTitle = {
  color: 'white',
};

const stlTxt = {
  color: 'white',
};

const stlImgView = {
  width: '50%'
};

const stlImg = {
  width: 150,
  height: 150
};
