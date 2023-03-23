// 훅 (리액트 컴포넌트)

import { useState } from 'react'

export default function useMutation(
	url: string,
): [
	(data: any) => void,
	{ loading: boolean; data: undefined | any; error: undefined | any },
] {
	// function, state을 return
	// 타입스크립트: return 타입 명시 필수
	//return 타입: array (2개의 item; 함수,object)
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<undefined | any>(undefined)
	const [error, setError] = useState<undefined | any>(undefined)

	function mutation(data?: any) {
		setLoading(true)
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
			//response.json() return: Promise를 return
			//다시 then을 통해 json만 가져온다
		})
			.then((response) => response.json().catch(() => {})) // 때때로 동작안할수 있으므로 catch
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false))
	}
	return [mutation, { loading, data, error }]
}
