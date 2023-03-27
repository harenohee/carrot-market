import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
	interface IronSessionData {
		user?: {
			id: number
		}
	}
}

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	console.log(req.session.user)
	res.status(200).end()
}
export default withIronSessionApiRoute(withHandler('GET', handler), {
	cookieName: 'carrotSession',
	password:
		'32893247377310702793948893898uuhuhhhuhuhuhuhuhuhhuhuhuhuhuhuhuhuhhuh4',
}) //withHandler의 return 함수로 대치됨
