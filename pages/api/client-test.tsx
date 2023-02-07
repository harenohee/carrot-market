import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../libs/client'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	await client.user.create({
		data: {
			email: 'nog',
			name: 'hi',
		},
	})
	res.json({
		ok: true,
	})
}
// 호스팅 중인 api 라우트를 통해 데이터베이스 수정이 가능
