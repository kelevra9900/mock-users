import {memo} from "react";
import {useRoute} from "@react-navigation/native";
import {View,StyleSheet,Text,SafeAreaView, StatusBar, Image} from "react-native";

import type {User} from "../types/user";
import colors from "@utils/colors";
import {FONTS, SIZES} from "@utils/theme";


const UserDetail = memo(() => {
	const {params} = useRoute();
	const {user} = params as {user: User};
	
	return (
		<SafeAreaView
		style={{
		  flex: 1,
		  backgroundColor: colors.white,
		}}
	  >
		<StatusBar backgroundColor={colors.gray} />
		<View style={{ width: "100%" }}>
		  <Image
			source={{uri: user.avatar }}
			resizeMode="cover"
			style={{
			  height: 228,
			  width: "100%",
			}}
		  />
		</View>
  
		<View style={{ flex: 1, alignItems: "center" }}>
		  <Image
			source={{uri: user.avatar }}
			resizeMode="contain"
			style={{
			  height: 155,
			  width: 155,
			  borderRadius: 999,
			  borderColor: colors.primaryColor,
			  borderWidth: 2,
			  marginTop: -90,
			}}
		  />
  
		  <Text
			style={{
			  color: colors.primaryColor,
			  marginVertical: 8,
			}}
		  >
			{user.first_name} {user.last_name}
		  </Text>
		  <Text
			style={{
			  color: colors.black,
			}}
		  >
			{user.email}
		  </Text>
  

		</View>
	  </SafeAreaView>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: colors.pageBackGround,
	},
	contentContainerStyle: {
		// paddingBottom: getBottomSpace() + 90,
	},
	header: {
		// paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
		paddingBottom: 26,
		backgroundColor: colors.primaryColor,
		borderBottomLeftRadius: 24,
		borderBottomRightRadius: 24,
	},
	username: {
		fontWeight: "600",
		fontSize: 26,
		lineHeight: 32,
		color: colors.white,
		marginLeft: 32,
		marginTop: 31,
	},
	email: {
		// fontFamily: FONTS.RALEWAY.SemiBold,
		fontWeight: "600",
		fontSize: 16,
		lineHeight: 16,
		color: colors.white,
		marginTop: 4,
		marginLeft: 32,
	},
	avatar: {
		borderRadius: 16,
		marginHorizontal: 16,
		marginTop: 16,
		paddingTop: 16,
		flexWrap: "wrap",
		flexDirection: "row",
		height: 120,
		marginBottom: 16,
	},
	lineVertical: {
		width: 1,
		height: 170,
		right: "50%",
		top: 24,
		bottom: 24,
		backgroundColor: colors.pageBackGround,
		alignSelf: "center",
		position: "absolute",
	},
	lineHorizontal: {
		right: 24,
		left: 24,
		height: 1,
		backgroundColor: colors.pageBackGround,
		alignSelf: "center",
		position: "absolute",
	},
	lineSeaparator: {
		height: 1,
		backgroundColor: colors.darkBlue,
		alignSelf: "center",
		width: "80%",
		marginBottom: 16,
	},
});


export default UserDetail;