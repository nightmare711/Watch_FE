import { useQuery } from 'react-query'

export const useGetProduct = () => {
	return useQuery(['useGetProduct.name'], async () => {
		return fetch(process.env.REACT_APP_API + 'products')
			.then((res) => res.json())
			.then((result) => result.data)
	})
}

export const useGetProductById = (id) => {
	return useQuery(['useGetProductById.name'], () => {
		return fetch(process.env.REACT_APP_API + 'products/' + id)
			.then((res) => res.json())
			.then((result) => result.data)
	})
}
