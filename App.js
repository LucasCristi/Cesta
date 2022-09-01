import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native'

import Cesta from './src/telas/telas/index'
import mock from './src/telas/mocks/cesta'
import AppLoading from 'expo-app-loading';


import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>

      <StatusBar />
      <Cesta {...mock} />

    </SafeAreaView>

  );
}

