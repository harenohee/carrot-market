import { useRouter } from 'next/router'
import useSWR from 'swr'
export default function useUser() {
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	//useSWR의 첫 번째 인자:
	// 1. fetcher가 url로 사용하기도 하고
	// 2. fetcher함수가 캐시에서 데이터를 가져올 떄 사용하는 id로 사용됨
	// 따라서 유저가 어떤 컴포넌트에서든지 캐시 데이터를 확인할 수 있다.
	const { data, error } = useSWR('/api/user/me', fetcher)
	const router = useRouter()
	return data
}
