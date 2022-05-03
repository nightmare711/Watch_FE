import { toast } from 'react-toastify'

export const useCreateOrder = (callback) => {
	return async (info) => {
		return fetch(process.env.REACT_APP_API + 'orders', {
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(info),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					toast.success('Order successful')
					callback()
					window.location.href = '/'
				}
			})
	}
}
