import {useQuery, useInfiniteQuery} from "@tanstack/react-query"
import {API_ENDPOINTS} from "./client/api-endpoints"
import {userClient} from "./client/users"
import {QueryOptions, Users} from "../types/user";

export const useUsersQuery = (query: QueryOptions ) => {
	const { data, error, isLoading } = useQuery<Users, Error>(
		[API_ENDPOINTS.USERS, query],
		({queryKey,pageParam}) => userClient.paginated(Object.assign({}, queryKey[1], pageParam)),
		{
			keepPreviousData: true,
		}
	);
	return {
		users: data?.data ?? [],
		error,
		loading: isLoading,
		total_pages: data?.total_pages,
		total: data?.total,
	}
}


export const useUserInfinityQuery = (query: QueryOptions) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery<Users, Error>(
		[API_ENDPOINTS.USERS, query],
		({ queryKey, pageParam}) => userClient.paginated(
			Object.assign({}, queryKey[1], pageParam)
		),
		{
			getNextPageParam: ({ page, total_pages }) =>
			page < total_pages && { page: page + 1 }
		}
	)

	function handleLoadMore() {
		if (Boolean(hasNextPage)) {
		  fetchNextPage();
		}
	}

	return {
		users: data?.pages?.flatMap((page) => page.data) ?? [],
		loading: isLoading,
		error,
		hasNextPage,
		handleLoadMore,
	}
}