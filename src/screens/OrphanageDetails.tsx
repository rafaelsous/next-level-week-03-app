import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orphanage Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121214',
  },
  title: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  }
});