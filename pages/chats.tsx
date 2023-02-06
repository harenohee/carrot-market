import type { NextPage } from 'next'

const Chats: NextPage = () => {
	return (
		// border-b 선이 마지막 요소까지 생긴다.
		// 해결방법: 1. last modifier
		<div className="py-10">
			{[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
				// last:border-b-0
				<div
					key={i}
					className="flex px-4 last:border-b-0  cursor-pointer py-3 border-b items-center space-x-3"
				>
					<div className="w-12 h-12 rounded-full bg-slate-300" />
					<div>
						<p className="text-gray-700">Steve Jebs</p>
						<p className="text-sm  text-gray-500">
							See you tomorrow in the corner at 2pm!
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Chats
