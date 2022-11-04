import React from "react";
import * as RN from "react-native-web";

import BigVan from '../assets/images/BigVan.png'


export const Main = () => {
  return (
    <RN.View style={stlMain}>
      <RN.View style={stlTextBox}>
        <RN.View style={stlTitle}>
          <RN.Text>Locadora de Vans em São Paulo</RN.Text>
        </RN.View>
        <RN.View style={stlTxt}>
          <RN.Text>
            A Help Vans é especializada no transporte de passageiros. 

            Com veículos confortáveis e sofisticados, buscamos sempre a excelência em nosso atendimento, se adequando a necessidade de nossos clientes fazendo assim um atendimento único e personalizado para cada situação. 

            Além de contar com uma equipe treinada e veículos em ótimo estado, prezamos sempre pela qualidade de nossos serviços, além do conforto e segurança de nossos clientes!
          </RN.Text>
        </RN.View>
      </RN.View>
      <RN.View style={stlImgView}>
        <RN.Image style={stlImg} source={BigVan} />
      </RN.View>
    </RN.View>
  );
};

// ---------- set Styles
const stlMain = {
  flex: 1,
  flexDirection: 'row',
  padding: 10
};

const stlTextBox = {
width: '50%'
}

const stlImgView = {
  width: '50%',
}

const stlImg = {
  width: 400,
  height: 400,
  // width: 400,
  // height: 300,
  // opacity: "100%",
  // border: "solid",
  // borderColor: "#0E0"
};

const stlTitle = {
  // flexDirection: 'column',
  // width: "50%",
}

const stlTxt = {}
