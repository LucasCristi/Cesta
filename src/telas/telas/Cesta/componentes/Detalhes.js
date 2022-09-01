import React from "react";
import { View, Image, StyleSheet } from "react-native"

import Texto from "../../../componentes/Texto"
// import logo from "../../../../../assets/logo.png"

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
    return <>
        <Texto style={styles.nome}>{nome} </Texto>

        <View style={styles.fazenda}>
            <Image source={logoFazenda} style={styles.imagemFazenda} />
            <Texto style={styles.nomeFazenda}>{nomeFazenda} </Texto>
        </View>

        <Texto style={styles.descricao}>{descricao} </Texto>

        <Texto style={styles.preco}>{preco} </Texto>

    </>
}

const styles = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
})