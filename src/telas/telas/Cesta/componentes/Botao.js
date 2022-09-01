import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import Texto from "../../../componentes/Texto"

export default function Botao({ botao }) {
    return <>
        <TouchableOpacity style={styles.botao} >
            <Texto style={styles.textoBotao} >
                {botao}
            </Texto>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 6,

    },
    textoBotao: {
        color: "#fff",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})