export default function Form() {
	return (
		<form className="flex flex-col space-y-2 p-5">
			<input
				type="text"
				required
				placeholder="UserName"
				className="peer border p-1 border-gray-400"
			/>
			<span className="hidden peer-invalid:block text-red-500">
				입력란을 작성해주세요.
			</span>
			<button>로그인</button>
		</form>
	)
}
