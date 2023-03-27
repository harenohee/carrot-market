import client from '@/libs/server/client'
import withHandler, { ResponseType } from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@/libs/server/withSession'

async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseType>,
) {
	res.status(200).end()
}
export default withApiSession(withHandler('GET', handler, true)) //withHandler의 return 함수로 대치됨
