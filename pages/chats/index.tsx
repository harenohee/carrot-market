import type { NextPage } from 'next'

const Chats: NextPage = () => {
	return (
		// border-b 선이 마지막 요소까지 생긴다.
		// 해결방법: 1. last modifier 2. divider (tailwind css)
		// divide: 어떤 요소 옆에 형제 요소가 있으면 border를 넣어줘~
		<div className="py-10 divide-y-[1px]">
			{[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
				<div
					key={i}
					className="flex px-4 cursor-pointer py-3  items-center space-x-3"
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
