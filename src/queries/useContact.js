import { toast } from 'react-toastify'

export const usePostEmail = (callback) => {
	return (info) => {
		return fetch(process.env.REACT_APP_API + 'contact', {
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(info),
			method: 'POST',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.success) {
					callback()
					toast.success('Sent email')
				}
			})
	}
}
