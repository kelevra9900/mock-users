import React,{useEffect,useRef} from "react";
import {View,StyleSheet,Button} from "react-native";
import LottieView from "lottie-react-native";

export default function SplashScreen() {
	const animation = useRef<LottieView>(null);

	useEffect(() => {
		animation.current?.play();
		animation.current?.play(30,120);
	},[]);

	return (
		<View style={styles.container}>
			<LottieView
				autoPlay
				ref={animation}
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				}}
				source={require('../assets/splash.json')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white', // Color de fondo del contenedor
	},
});