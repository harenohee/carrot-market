import { NextApiRequest, NextApiResponse } from 'next'

export interface ResponseType {
	ok: boolean
	[key: string]: any
}
// 2개의 인자로 method, 실행할 함수
export default function withHandler(
	method: 'GET' | 'POST' | 'DELETE',
	fn: (req: NextApiRequest, res: NextApiResponse) => void,
) {
	// nextJS가 실행해야 할 것을 return 해야함
	// 그 함수를 커스터마이징하는 것 뿐
	return async function (req: NextApiRequest, res: NextApiResponse) {
		if (req.method !== method) {
			return res.status(405).end()
		}
		try {
			await fn(req, res)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ error })
		}
	}
}
