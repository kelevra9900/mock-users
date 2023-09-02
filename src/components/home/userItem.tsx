import {View,StyleSheet,Image,Text,TouchableOpacity} from "react-native";

import {User} from "../../types/user";

const UserItem = ({user}: {user: User}) => {
	return (
		<TouchableOpacity
			onPress={() => {
				// Navega a la pantalla de detalles del usuario
			}}>
			<View style={styles.container}>
				<Image source={{uri: user.avatar}} style={styles.avatar} />
				<View style={styles.userInfo}>
					<Text style={styles.userName}>{`${user.first_name} ${user.last_name}`}</Text>
					<Text style={styles.email}>{user.email}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 16,
	},
	userInfo: {
		flex: 1,
	},
	userName: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	email: {
		fontSize: 16,
		color: '#777',
	},
})

export default UserItem;