import * as React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Router } from '@router'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Router />
    </SafeAreaView>
  )
}

export default App
