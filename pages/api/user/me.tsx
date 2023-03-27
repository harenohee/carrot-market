import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@/libs/server/withSession'

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	const profile = await client.user.findUnique({
		where: { id: req.session.user?.id },
	})
	res.json({
		ok: true,
		profile,
	})
}
export default withApiSession(
	withHandler({
		method: 'GET', //2개 이상의 인자를 받게 됨으로 객체로 변경
		handler,
		isPrivate: true,
	}),
) //withHandler의 return 함수로 대치됨
