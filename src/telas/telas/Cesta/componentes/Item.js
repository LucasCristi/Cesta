import React from "react"
import Texto from "../../../componentes/Texto"
import { Image, StyleSheet, View, FlatList } from "react-native"

export default function Item({ item: { nome, imagem } }) {

    return <View style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome}>{nome} </Texto>
    </View>

}

const styles = StyleSheet.create({
    
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 20,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    },
})