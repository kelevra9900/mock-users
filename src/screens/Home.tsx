import {View, Text, FlatList} from "react-native";
import {useUserInfinityQuery} from "../data/users";
import {useCallback, useState} from "react";
import LoaderComponent from "@components/ui/loader";
import UserItem from "@components/home/userItem";


const HomeScreen = () => {
	const { users, loading, error, handleLoadMore } = useUserInfinityQuery({
		page: 1,
		per_page: 10,
	});
	

	if(loading) {
		return <LoaderComponent text="Loading users, please wait..." />
	}
	
	if(error){
		return <Text>Error</Text>
	}

	const fetchMoreData = () => {
		handleLoadMore();
	}

	return(
		<View style={{ flex: 1, margin: 10 }}>
			<FlatList
				contentContainerStyle={{ flexGrow: 1 }}
				data={users}
				renderItem={({ item, index }) => (
					<UserItem key={`user-${index}`} user={item} />
				)}
				onEndReached={fetchMoreData}
				onEndReachedThreshold={0.3}
			/>
		</View>
	);
}


export default HomeScreen;