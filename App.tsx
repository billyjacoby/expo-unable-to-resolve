import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { IndexerGrpcDerivativesApi } from '@injectivelabs/sdk-ts';
import { getEndpointsFromChainId } from '@injectivelabs/wallet-ts';
import { ChainId } from '@injectivelabs/ts-types';

export default function App() {
  const endpoints = getEndpointsFromChainId(ChainId.Mainnet);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
