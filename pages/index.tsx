export default function Home() {
	return (
		<div className="bg-slate-400  xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
			{/*  sm:bg-red-400만 있을때, 가장 최근의 설정이 적용되기 때문에 큰화면일 때 흰색이 아니게됨 */}
			<div className="bg-white dark:bg-black flex flex-col justify-between sm:bg-red-400 md:bg-teal-500 xl:bg-yellow-500 p-6 rounded-3xl shadow-xl">
				<span className="font-semibold dark:text-white text-3xl">
					Select Item
				</span>
				<ul>
					{[1, 2, 3, 4, 5].map((i) => (
						<div
							key={i}
							className="flex justify-between my-2 odd:bg-blue-50 even: bg-yellow-50"
						>
							<span className="text-gray-500">Grey Chair</span>
							<span className="font-semibold">$19</span>
						</div>
					))}
					{/* {['a', 'b', 'c', ''].map((c, i) => (
						<li key={i} className="bg-red-50 py-2 empty:hidden">
							{c}
						</li>
					))} */}
				</ul>
				<div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
					<span>Total</span>
					<span className="font-semibold">$38</span>
				</div>
				<div className="flex justify-center items-center">
					<button
						className="mt-5 bg-blue-500  text-white p-3 text-center rounded-xl w-1/2 mx-auto
          hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-gray-500"
					>
						Checkout
					</button>
				</div>
			</div>
			<div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
				<div className="bg-blue-500 portrait:bg-indigo-400 landscape:bg-teal-500 p-6 pb-14 xl:pb-52">
					<span className="text-white text-2xl">Profile</span>
				</div>
				<div className="rounded-3xl p-6 bg-white relative -top-5">
					<div className="flex relative -top-16 items-end justify-between">
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">Orders</span>
							<span className="font-medium">340</span>
						</div>
						<div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-gray-400 transition-colors" />
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">Spent</span>
							<span className="font-medium">$2,310</span>
						</div>
					</div>
					<div className="relative flex flex-col items-center -mt-10 -mb-6">
						<span className="text-lg font-medium">Tony Molloy</span>
						<span className="text-sm text-gray-500">New York, USA</span>
					</div>
				</div>
			</div>
			<div className="bg-white p-10 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
				<div className="flex mb-5 justify-between items-center">
					<span>⬅️</span>
					<div className="space-x-3">
						<span>⭐️ 4.9</span>
						<span className="shadow-xl p-2 rounded-md">❤️</span>
					</div>
				</div>
				<div className="bg-zinc-400 h-72 mb-5" />
				<div className="flex flex-col">
					<span className="font-medium text-xl">Swoon Lounge</span>
					<span className="text-xs text-gray-500">Chair</span>
					<div className="mt-3 mb-5 flex justify-between items-center">
						<div className=" space-x-2">
							<button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
							<button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
							<button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
						</div>
						<div className="flex items-center space-x-5">
							<button className=" rounded-lg bg-blue-200 flex justify-center items-center  aspect-square w-8 font-medium  text-xl text-gray-500">
								-
							</button>
							<button>1</button>
							<button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium  text-xl text-gray-500">
								+
							</button>
						</div>
					</div>
					<div className="flex justify-between items-center ">
						<span className="font-medium text-[800px]">$460</span>
						<button className="bg-blue-500 py-2 px-8 text-center text-white rounded-lg">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
