import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, FlatList, StyleSheet } from 'react-native'

import UserItem from '@components/home/userItem'
import LoaderComponent from '@components/ui/loader'
import colors from '@utils/colors'

import { useUserInfinityQuery } from '../data/users'
import { RootStackParamList } from '../types/routes'

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'MyStack'>
const HomeScreen = ({ navigation }: Props) => {
  const { users, loading, error, handleLoadMore } = useUserInfinityQuery({
    page: 1,
    per_page: 10
  })

  if (loading) {
    return <LoaderComponent text="Loading users, please wait..." />
  }

  if (error) {
    return <Text>Error</Text>
  }

  const fetchMoreData = () => {
    handleLoadMore()
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.top}>
        <Text style={styles.title}>Users</Text>
      </View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={users}
        renderItem={({ item, index }) => (
          <UserItem key={`user-${index}`} user={item} navigation={navigation} />
        )}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    margin: 10
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 32
  }
})

export default HomeScreen
