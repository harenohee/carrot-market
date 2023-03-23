import withHandler from '@/libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
// nextJS에서 api route를 할때는 그 function을 export default해야한다
// 그래야 사용자가 url 호출할 때 이 function을 실행하고
// nextJS가 req, res을 줄 수 있는 것이다
// 함수가 return 되어야 함!!

// create -> Promise를 반환 -> async await
async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.body)
	return res.status(200).end()
}
// pages 경로에 api 폴더를 생성함으로써 api서버가 생성됨
// api 라우트에서 클라이언트로 정보를 보내줄 수 있다.
// 호스팅 중인 api 라우트를 통해 데이터베이스 수정이 가능

export default withHandler('POST', handler) //withHandler의 return 함수로 대치됨
