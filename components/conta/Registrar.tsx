import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { UserProps } from "../usuario/usuario";

	interface DadosForm {
		email: string;
		nome: string;
		sobrenome: string;
		nomeUsuario: string;
		senha: string;
		confirmarSenha: string;
	}

	// const validarForm = (dados: any) => {
	// 	const errors = {
	// 		email: "",
	// 		nome: "",
	// 		sobrenome: "",
	// 		nomeUsuario: "",
	// 		senha: "",
	// 		confirmarSenha: "",
	// 	};

	const MeuFormulario: React.FC = () => {
		const { register, handleSubmit, formState: {errors }} = useForm<DadosForm>();,
	 
	const onSubmit = (data: DadosForm) => {
		console.log(data);
	};


	return (
		<>
			<div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
				<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 ">
					Crie Sua Conta
				</h1>
				<h2 className="text-lg font-bold text-center mb-8">アカウントを作成</h2>
				<form
					action="/"
					className="form w-full flex flex-col gap-4"
					onSubmit={handleSubmit(onSubmit)}>
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
							{...register("nome", { required: true })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.nome && errors.nome.type === "required" && (
							<p>{errors.nome}</p>
						)}
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
							{...register("sobrenome", { required: true })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.sobrenome && errors.sobrenome.type === "required" && (
							<p>{errors.sobrenome}</p>
						)}
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
							{...register("nomeUsuario", { required: true })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.nomeUsuario && errors.nomeUsuario.type === "required" && (
							<p>{errors.nomeUsuario}</p>
						)}
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
							{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.email && errors.email.type === "required" && (
							<p>{errors.email}</p>
						)}
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
							{...register("password", { required: true })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.senha && errors.senha.type === "required" && (
							<p>{errors.senha}</p>
						)}
					</div>
					<div className="flex items-start flex-col justify-start">
						<label
							htmlFor="confirmPassword"
							className="text-sm text-gray-700 dark:text-gray-200 mr-2">
							Confirmar Senha:
						</label>
						<input
							type="password"
							id="confirmarSenha"
							name="confirmarSenha"
							{...register("confirmarSenha", { required: true })}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.confirmarSenha &&
							errors.confirmarSenha.type === "required" && (
								<p>{errors.confirmarSenha}</p>
							)}
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
};
export default MeuFormulario;
