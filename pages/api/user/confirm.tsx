import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@/libs/server/withSession'

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	const { token } = req.body
	const foundToken = await client.token.findUnique({
		where: {
			payload: token,
		},
		// include: {
		// 	user: true,
		// },
	})
	if (!foundToken) return res.status(404).end()
	// foundToken이 있다면
	req.session.user = {
		id: foundToken.userId,
	}
	await req.session.save()
	await client.token.deleteMany({
		where: {
			userId: foundToken.userId,
		},
	})
	res.json({ ok: true })
}
export default withApiSession(
	withHandler({
		methods: ['POST'],
		handler,
	}),
) //withHandler의 return 함수로 대치됨
