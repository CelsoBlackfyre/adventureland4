import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./form.css";

interface FormData {
	nome: string;
	email: string;
	idade: number;
	senha: string;
	confirmarSenha: string;
	cidade: string;
	estado: string;
}

const CadastroForm: React.FC = () => {
	// const validarForm = (dados: FormData) => {
	// 	const errors: Partial<FormData> = {};

	// 	if (!dados.nome) {
		const validarForm = Yup.object().shape ({
		nome: Yup.string().required("Nome de usuário é necessário"),
		email: Yup.string()
			.email("Email é inválido")
			.required("Email é necessário"),
		idade: Yup.number()
			.typeError("Idade deve ser um número")
			.integer("Idade deve ser um número inteiro")
			.positive("Idade deve ser um número positivo")
			.required("Idade é necessário"),
		senha: Yup.string()
			.min(8, "Senha deve ter pelo menos 8 caracteres")
			.required("Senha é necessário"),
		confirmarSenha: Yup.string()
		})

		const {register,handleSubmit,reset,formState: {errors}} = useForm<FormData>({
			resolver: yupResolver(validarForm)({
				resolver: yupResolver(validarForm)({})
			})
		})

		const onSubmit = (data: FormData) => {
			
		}
	}


		if (!dados.nome) {
			errors.nome = "Nome de usuário é necessário";
		}

		if (!dados.email) {
			errors.email = "Email é necessário";
		} else if (!/\S+@\S+\.\S+/.test(dados.email)) {
			errors.email = "Email é inválido";
		}

		if (!dados.idade) {
			errors.idade = "A idade é necessária";
		} else if (dados.idade > 100 && dados.idade << 0) {
			if (!dados.senha) {
				errors.senha = "Senha é necessária";
			} else if (dados.senha.length < 8) {
				errors.senha = "Senha deve ter pelo menos 8 caracteres";
			}
		}

		if (dados.confirmarSenha !== dados.senha) {
			errors.confirmarSenha = "Senhas não são iguais";
		}
		return errors;
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			nome: "",
			email: "",
			idade: 0,
			senha: "",
			confirmarSenha: "",
			cidade: "",
			estado: "",
		},
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	useEffect(() => {
		console.log("Use effect:", errors);
	}, [errors]);

	return (
		<>
			<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
				Cadastre-se
			</h1>
			<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
				サインアップ
			</h2>
			<div
				className="d-flex justify-content-center"
				style={{
					marginTop: "50px",
					alignContent: "center",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<form
					className="form"
					onSubmit={handleSubmit(onSubmit, validarForm)}
					noValidate
					method="POST"
					action="/">
					<div className="mb-3 fs-5">
						<label htmlFor="name" className="text-white">
							Nome
						</label>
						<input
							{...register("nome", { required: true })}
							type="text"
							name="nome"
							aria-invalid={errors ? "true" : "false"}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.nome && errors.nome.type === "required" && (
							<span role="alert">Isso é necessário</span>
						)}
						{errors.nome && errors.nome.type === "maxLength" && (
							<span>Nome muito grande</span>
						)}
					</div>
					<div className="mb-3 fs-5">
						<label htmlFor="email" className="text-white">
							E-mail
						</label>
						<input
							className="formS"
							name="email"
							{...register("email", {
								message: "Email obrigatório ou inválido",
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
							type="email"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.email && (
							<span className="error-message">
								Email obrigatório ou inválido
							</span>
						)}
					</div>
					<div className="mb-3 fs-5">
						<label htmlFor="idade" className="text-white">
							Idade
						</label>
						<input
							{...register("idade", { required: true })}
							type="number"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.idade && (
							<span className="error-message">Idade obrigatória</span>
						)}
					</div>
					{/* Add other input fields similarly */}
					<button
						className="mt-3"
						type="submit"
						style={{
							marginTop: "50px",
							width: "300px",
							alignContent: "center",
							marginBottom: "100px",
						}}>
						Cadastrar
					</button>
				</form>
			</div>
		</>
	);
};

export default CadastroForm;
