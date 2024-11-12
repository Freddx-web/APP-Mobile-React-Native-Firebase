import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import { LinearGradient } from 'expo-linear-gradient';

export default function Background({ children }) {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#000','#130e33','#0e1c33','#0e3b1dad', ]}
        style={styles.background}
      >

        <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
