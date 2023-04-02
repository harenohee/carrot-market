// 훅 (리액트 컴포넌트)

import { useState } from 'react'
interface UseMutationState<T> {
	loading: boolean
	data?: T
	error?: object
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>]

export default function useMutation<T = any>(
	url: string,
): UseMutationResult<T> {
	const [state, setState] = useState<UseMutationState<T>>({
		loading: false,
		data: undefined,
		error: undefined,
	})
	// function, state을 return
	// 타입스크립트: return 타입 명시 필수
	//return 타입: array (2개의 item; 함수,object)
	// const [loading, setLoading] = useState(false)
	// const [data, setData] = useState<undefined | any>(undefined)
	// const [error, setError] = useState<undefined | any>(undefined)

	function mutation(data?: any) {
		// 화살표 함수에서 () => () 처럼 소괄호로 감싸면 return문을 작성하지 않아도 리턴된다.
		// 반면 () => {}처럼 중괄호로 감쌌다면 return문이 있어야만 리턴 값을 반환한다.
		setState((prev) => ({ ...prev, loading: true }))
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
			.then((data) => setState((prev) => ({ ...prev, data: data })))
			.catch((error) => setState((prev) => ({ ...prev, error })))
			.finally(() => setState((prev) => ({ ...prev, loading: false })))
	}
	return [mutation, { ...state }]
}
