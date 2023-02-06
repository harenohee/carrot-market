import type { NextPage } from 'next'

const ChatDetail: NextPage = () => {
	return (
		<div className="py-10 px-4">
			<div className="flex items-start space-x-2">
				<div className="w-8 h-8 rounded-full bg-slate-500" />
				<div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
					<p>Hi how much are you selling them for?</p>
				</div>
			</div>
			<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
				<div className="w-8 h-8 rounded-full bg-slate-500" />
				<div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
					<p>I want ￦20,000</p>
				</div>
			</div>
			<div>
				<div />
				<div>미쳤어</div>
			</div>
			<div>
				<div>
					<input type="text" />
					<div>
						<span>&rarr;</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatDetail
