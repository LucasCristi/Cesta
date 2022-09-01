import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import Topo from "./Cesta/componentes/Topo"
import Detalhes from "./Cesta/componentes/Detalhes"
import Botao from "./Cesta/componentes/Botao"
import Item from "./Cesta/componentes/Item"
import Texto from "../componentes/Texto"

export default function Cesta({ topo, detalhes, botao, itens }) {
    return (<>

        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={styles.cesta}>

                        <Detalhes {...detalhes} />
                        <Botao {...botao} />
                        <Texto style={styles.titulo} >{itens.titulo} </Texto>

                    </View>
                </>
            }}
        />
    </>
    )
}

const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 26,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginBottom: 8,
        marginTop: 32,
        fontSize: 20,
        lineHeight: 32
    },
})