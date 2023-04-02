import { PrismaClient } from '@prisma/client'
declare global {
	var client: PrismaClient | undefined
}

// 파일을 처음 실행 시 global.client에 아무것도 들어있지 않음
// new PrismaClient 생성
const client = global.client || new PrismaClient()
if (process.env.NODE_ENV === 'development') global.client = client

export default client
