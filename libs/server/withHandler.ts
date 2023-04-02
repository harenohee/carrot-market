import { NextApiRequest, NextApiResponse } from 'next'

export interface ResponseType {
	ok: boolean
	[key: string]: any
}

// GET, POST를 한번에 수행시켜주기 위해 method를 string->배열 형태로 변경
type method = 'GET' | 'POST' | 'DELETE'
// 2개 이상의 인자- 객체로 설정 값을 보내주는 방식으로 코드를 정리할 수 있음
interface ConfigType {
	methods: method[]
	handler: (req: NextApiRequest, res: NextApiResponse) => void
	isPrivate?: boolean
}
// 2개의 인자로 method, 실행할 함수
export default function withHandler({
	methods,
	isPrivate = false,
	handler,
}: ConfigType) {
	// nextJS가 실행해야 할 것을 return 해야함
	// 그 함수를 커스터마이징하는 것 뿐
	return async function (req: NextApiRequest, res: NextApiResponse) {
		if (req.method && !methods.includes(req.method as any)) {
			return res.status(405).end()
		}
		if (isPrivate && !req.session.user) {
			return res.status(401).json({
				ok: false,
				error: 'plz login',
			})
		}
		try {
			await handler(req, res)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error })
		}
	}
}
