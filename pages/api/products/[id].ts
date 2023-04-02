import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@/libs/server/withSession'

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	const { id } = req.query
	const product = await client.product.findUnique({
		where: {
			id: Number(id),
		},
		include: {
			user: {
				select: {
					id: true, // 모든정보 대신 필요한 정보만 가져옴 => 요청은 적을수록 좋다
					name: true,
					avatar: true,
				},
			},
		},
	})

	const terms = product?.name.split(' ').map((word) => ({
		name: {
			contains: word,
		},
	})) // 1. 배열로 변경 2. 배열의 각 word마다 객체를 리턴 *화살표함수에서 객체리턴 시 소괄호로 감싸고 난후 객체 넣을 것
	const relatedProducts = await client.product.findMany({
		where: {
			OR: terms,
			AND: {
				id: {
					not: product?.id,
				},
			},
		},
	})

	console.log(relatedProducts)
	res.json({
		ok: true,
		product,
		relatedProducts,
	})
}
export default withApiSession(
	withHandler({
		methods: ['GET'], //2개 이상의 인자를 받게 됨으로 객체로 변경
		handler,
		isPrivate: true,
	}),
) //withHandler의 return 함수로 대치됨
