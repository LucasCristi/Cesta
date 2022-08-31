import React from "react"
import { StyleSheet, Text } from "react-native"

export default function Texto({ children, style }) { //style refere-se ao estilo da página CESTA referente a descrição
    let estilo = styles.texto

    if(style?.fontWeight === "bold"){
        estilo = styles.textoNegrito
    }

    return <Text style={[style, estilo]} >{children} </Text>
}                         //array de estilos, style é parametro da CESTA

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",  
        fontWeight: "normal",
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})