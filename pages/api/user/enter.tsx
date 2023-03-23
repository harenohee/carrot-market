import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
// nextJS에서 api route를 할때는 그 function을 export default해야한다
// 그래야 사용자가 url 호출할 때 이 function을 실행하고
// nextJS가 req, res을 줄 수 있는 것이다
// 함수가 return 되어야 함!!

// create -> Promise를 반환 -> async await
async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	const { phone, email } = req.body
	const user = phone ? { phone: +phone } : email ? { email } : null // phone, email이 없는 경우 체크 확실
	if (!user) return res.status(400).json({ ok: false })
	const payload = Math.floor(10000 + Math.random() * 900000) + ''
	// where문: user가 있는 경우 token과 연결
	// create: 없으면 user 생성, token 연결
	const token = await client.token.create({
		data: {
			payload,
			user: {
				connectOrCreate: {
					where: {
						...user,
					},
					create: {
						name: 'Anonymous',
						...user,
					},
				},
			},
		},
	})
	return res.json({ ok: true })
}
// pages 경로에 api 폴더를 생성함으로써 api서버가 생성됨
// api 라우트에서 클라이언트로 정보를 보내줄 수 있다.
// 호스팅 중인 api 라우트를 통해 데이터베이스 수정이 가능

export default withHandler('POST', handler) //withHandler의 return 함수로 대치됨
