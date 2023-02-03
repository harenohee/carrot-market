import type { NextPage } from 'next'

const Upload: NextPage = () => {
	return (
		<div className="px-4 py-16">
			<div>
				{/* flex py 대신에 h 쓰기 */}
				<label className="w-full flex text-gray-400 items-center justify-center border-2 border-dashed border-gray-400 h-48 rounded-md hover:border-orange-400 hover:text-orange-400">
					<svg
						className="h-12 w-12"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 48 48"
						aria-hidden="true"
					>
						<path
							d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{/* 파일 아이콘만 남게 되고 인풋창은 숨김. 아이콘 클릭해도 기능 ok.  */}
					<input className="hidden" type="file" />
				</label>
			</div>
			<div className="mt-4 mb-6">
				<label
					htmlFor="price"
					className="text-sm font-medium text-[gray] mb-1 block"
				>
					Price
				</label>
				<div className="rounded-md relative flex items-center shadow-sm">
					<div className="absolute pointer-events-none left-0 pl-3 flex items-center">
						<span className="text-gray-500 text-sm">$</span>
					</div>
					<input
						id="price"
						className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-400 focus:border-orange-400"
						type="text"
						placeholder="0.00"
					/>
					<div className="absolute right-0 pr-3 flex justify-items-center pointer-events-none">
						<span className="text-gray-500 ">USD</span>
					</div>
				</div>
			</div>
			<div>
				<label
					htmlFor="description"
					className="text-sm font-medium text-[gray] mb-1 block"
				>
					Description
				</label>
				<div>
					<textarea
						className="mt-1 w-full shadow-sm focus:ring-orange-400 ring-offset-2 rounded-md border-gray-300 focus:border-orange-400"
						rows={4}
					/>
				</div>
			</div>
			<button className="mt-2 w-full bg-orange-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 ring-offset-2 ring-orange-400 font-medium hover:bg-orange-600">
				Upload product
			</button>
		</div>
	)
}

export default Upload
