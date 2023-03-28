import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@/libs/server/withSession'

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	const { name, price, description } = req.body
	const { user } = req.session

	const product = await client.product.create({
		data: {
			name,
			price: +price,
			description,
			image: 'xx',
			user: {
				connect: {
					id: user?.id,
				},
			},
		},
	})
	res.json({
		ok: true,
		product,
	})
}
export default withApiSession(
	withHandler({
		method: 'POST', //2개 이상의 인자를 받게 됨으로 객체로 변경
		handler,
		isPrivate: true,
	}),
) //withHandler의 return 함수로 대치됨
