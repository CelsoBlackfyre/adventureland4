export const Login = () => (
	<>
		<div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
			<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 ">
				Bem-Vindo
			</h1>
			<h2 className="text-lg font-bold text-center mb-8">ようこそ</h2>
			<form action="#" className="w-full flex flex-col gap-4">
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="nomeUsuario"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Nome de Usuario:
					</label>
					<input
						type="text"
						id="nomeUsuario"
						name="nomeUsuario"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="senha"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Senha:
					</label>
					<input
						type="password"
						id="senha"
						name="senha"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-red-950 hover:bg-red-950 text-white font-medium py-2 px-4 rounded-md shadow-sm">
					Entrar
				</button>
			</form>
		</div>
	</>
);
