import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormData {
	nomeUsuario: string;
	nome: string;
	email: string;
	idade: number;
	sexo: string;
	senha: string;
	confirmarSenha: string;
	cidade: string;
	estado: string;
	erroMensagem: string;
}


const CadastroForm = () => {	
	// const validarForm = (dados: FormData) => {
	// 	const errors: Partial<FormData> = {};

	// 	if (!dados.nome) {
		

		const { register, handleSubmit, formState: { errors }, } = useForm ({
			defaultValues: {
				nomeUsuario: "",
				nome: "",
				email: "",
				idade: 0,
				sexo: "",
				senha: "",
				confirmarSenha: "",
				cidade: "",
				estado: "",
			}
		})
	

		const onSubmit = (dados: FormData) => {
			console.log(JSON.stringify(dados,null,2));
		}

		// useForm<FormData>({
		// 	resolver:yupResolver<Yup.AnyObjectSchema>(validarForm),
		// })
		
	


	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// } = useForm<FormData>({
	// 	defaultValues: {
	// 		nome: "",
	// 		email: "",
	// 		idade: 0,
	// 		senha: "",
	// 		confirmarSenha: "",
	// 		cidade: "",
	// 		estado: "",
	// 	},
	// });

	// const onSubmit = (data: FormData) => {
	// 	console.log(data);
	// };

	// useEffect(() => {
	// 	console.log("Use effect:", errors);
	// }, [errors]);

	return (
		<>
		<div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
			<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 ">
				Crie Sua Conta
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
						id="nome"
						name="nome"
						{...register("nome")}
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>

				</div>
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
						{...register("nomeUsuario")}
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
						{...register("email", { required: true,message: "Email é obrigatorio", pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
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
						{...register("senha")}
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="idade"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Idade:
					</label>
					<input
						type="number"
						id="idade"
						name="idade"
						{...register("idade")}
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				{/*<div className="flex items-start flex-col justify-start">
					 <label
						htmlFor="sexo"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Sexo:
					</label>
					<select id="sexo" name="sexo" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">						</select>
						<option value="masculino">Masculino</option>
						<option value="feminino">Feminino</option>
						<option value="outro">Outro</option>
						{...register("sexo")}
				</div> */}
				<div className="flex items-start flex-col justify-start">
					<label
						htmlFor="cidade"
						className="text-sm text-gray-700 dark:text-gray-200 mr-2">
						Cidade:
					</label>
					<input
						type="cidade"
						id="cidade"
						name="cidade"
						{...register("cidade")}
						className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
					/>
				</div>
				<button
					type="submit"
					className="bg-red-950 hover:bg-red-950 text-white font-medium py-2 px-4 rounded-md shadow-sm">
					Cadastrar
				</button>
			</form>
		</div>
	</>
	);
};

export default CadastroForm;
