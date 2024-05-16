"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormData } from "../DadosUsuario/dadosUsuario";
// interface FormData {
// 	nomeUsuario: string;
// 	nome: string;
// 	email: string;
// 	idade: number;
// 	sexo: string;
// 	senha: string;
// 	confirmarSenha: string;
// 	cidade: string;
// 	estado: string;
// 	erroMensagem: string;
// }

// const errors = {
// 	nome: "",
// 	nomeUsuario: "",
// 	email: "",
// 	idade: "",
// 	sexo: "",
// 	senha: "",
// 	confirmarSenha: "",
// 	cidade: "",
// 	estado: "",
// };

const CadastroForm = () => {
	// const validarForm = (dados: FormData) => {
	// 	const errors: Partial<FormData> = {};

	// 	if (!dados.nome) {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (dados: FormData) => {
		console.log(JSON.stringify(FormData));
	};

	function Error({ message }: { message: string }) {
		return <p className="text-red-500 text-xs italic">{message}</p>;
	}

	return (
		<>
			<div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
				<h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 ">
					Crie Sua Conta
				</h1>
				<h2 className="text-lg font-bold text-center mb-8">ようこそ</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					action="#"
					className="form w-full flex flex-col gap-4">
					<div className="flex items-start flex-col justify-start">
						<label
							htmlFor="nome"
							className="text-sm text-gray-700 dark:text-gray-200 mr-2">
							Nome:
						</label>
						<input
							type="text"
							id="nome"
							name="nome"
							{...register("nome", {
								required: { value: true, message: "Nome obrigatorio" },
								minLength: {
									value: 3,
									message: "Nome deve ter pelo menos 3 caracteres",
								},
							})}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.nome && <Error message={errors.nome.message!} />}
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
							{...register("nomeUsuario", {
								required: {
									value: true,
									message: "Nome de usario obrigatorio",
								},
								minLength: {
									value: 3,
									message: "Nome de usuario deve ter pelo menos 3 caracteres",
								},
								maxLength: {
									value: 20,
									message: "Nome de usuario deve ter no maximo 20 caracteres",
								},
							})}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.nomeUsuario && (
							<Error message={errors.nomeUsuario.message!} />
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
							{...register("email", {
								required: { value: true, message: "Email obrigatorio" },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Email invalido",
								},
							})}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.email && <Error message={errors.email.message!} />}
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
							{...register("senha", {
								required: { value: true, message: "Senha obrigatorio" },
								minLength: {
									value: 6,
									message: "Senha deve ter pelo menos 6 caracteres",
								},
							})}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.senha && <Error message={errors.senha.message!} />}
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
							{...register("idade", {
								min: { value: 18, message: "Idade minima 18" },
							})}
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
						/>
						{errors.idade && <Error message={errors.idade.message!} />}
					</div>
					<div className="flex items-start flex-col justify-start">
						<label
							htmlFor="sexo"
							className="text-sm text-gray-700 dark:text-gray-200 mr-2">
							Sexo:
						</label>
						<select
							id="sexo"
							name="sexo"
							className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
							<option
								value="masculino"
								{...register("sexo", {
									required: { value: true, message: "Sexo obrigatorio" },
								})}>
								Masculino
							</option>
							<option
								value="feminino"
								{...register("sexo", {
									required: { value: true, message: "Sexo obrigatorio" },
								})}>
								Feminino
							</option>
							<option
								value="outro"
								{...register("sexo", {
									required: { value: true, message: "Sexo obrigatorio" },
								})}>
								Outro
							</option>
						</select>
						{errors.sexo && <Error message={errors.sexo.message!} />}
					</div>
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
						{errors.email && <Error message={errors.email.message!} />}
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
