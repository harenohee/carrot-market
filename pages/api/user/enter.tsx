import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../../libs/client'

// create -> Promise를 반환 -> async await
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== 'POST') {
		res.status(401).end()
	}
	console.log(req.body.email)
	res.status(200).end()

	// await client.user.create({
	// 	data: {
	// 		email: 'nog',
	// 		name: 'hi',
	// 	},
	// })
	// res.json({
	// 	ok: true,
	// })
}
// pages 경로에 api 폴더를 생성함으로써 api서버가 생성됨
// api 라우트에서 클라이언트로 정보를 보내줄 수 있다.
// 호스팅 중인 api 라우트를 통해 데이터베이스 수정이 가능
