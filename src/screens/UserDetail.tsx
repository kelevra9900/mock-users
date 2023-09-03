import { useRoute } from '@react-navigation/native'
import { memo } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'

import colors from '@utils/colors'

import type { User } from '../types/user'

const UserDetail = memo(() => {
  const { params } = useRoute()
  const { user } = params as { user: User }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white
      }}
    >
      <StatusBar backgroundColor={colors.gray} />
      <View style={{ width: '100%' }}>
        <Image
          source={{ uri: user.avatar }}
          resizeMode="cover"
          style={{
            height: 228,
            width: '100%'
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={{ uri: user.avatar }}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: colors.primaryColor,
            borderWidth: 2,
            marginTop: -90
          }}
        />

        <Text
          style={{
            color: colors.primaryColor,
            marginVertical: 8
          }}
        >
          {user.first_name} {user.last_name}
        </Text>
        <Text
          style={{
            color: colors.black
          }}
        >
          {user.email}
        </Text>
      </View>
    </SafeAreaView>
  )
})

export default UserDetail
