import { useRoute } from '@react-navigation/native'
import { memo } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native'

import colors from '@utils/colors'

import type { User } from '../types/user'

const UserDetail = memo(() => {
  const { params } = useRoute()
  const { user } = params as { user: User }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.gray} />
      <View style={{ width: '100%' }}>
        <Image
          testID="user-background"
          source={{ uri: user.avatar }}
          resizeMode="cover"
          style={styles.backgroundAvatar}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          testID="user-avatar"
          source={{ uri: user.avatar }}
          resizeMode="contain"
          style={styles.avatar}
        />

        <Text style={styles.name}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  backgroundAvatar: {
    height: 228,
    width: '100%'
  },
  avatar: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: colors.primaryColor,
    borderWidth: 2,
    marginTop: -90
  },
  name: {
    color: colors.primaryColor,
    marginVertical: 8
  },
  email: {
    color: colors.black
  }
})

export default UserDetail
