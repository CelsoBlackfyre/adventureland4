export const CadastroForm = () => (
	<>
		<div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
			<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 ">
				Crie Sua Conta
			</h1>
			<h2 className="text-lg font-bold text-center mb-8">アカウントを作成</h2>
			<form action="#" className="w-full flex flex-col gap-4">
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="firstName"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Nome:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="lastName"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Sobrenome:
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="username"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Nome de Usuario:
					</label>
					<input
						type="text"
						id="username"
						name="username"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="email"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="password"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Senha
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="confirmPassword"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Confirmar Senha:
					</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-red-950 hover:bg-red-950 text-white font-medium py-2 px-4 rounded-md shadow-sm">
					Enviar
				</button>
			</form>
			<div className="mt-4 text-center">
				<span className="text-sm text-gray-500 dark:text-gray-300">
					Ja possui uma conta ?{" "}
				</span>
				<a href="#" className="text-red-950 hover:text-red-950">
					Fazer Login
				</a>
			</div>
		</div>
	</>
);
