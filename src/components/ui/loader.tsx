import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

type LoaderType = {
  text?: string
}

const LoaderComponent = ({ text = 'Loading...' }: LoaderType) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#333'
  }
})

export default LoaderComponent
