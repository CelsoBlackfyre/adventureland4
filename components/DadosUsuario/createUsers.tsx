function createUsers(user: FormData): Promise<void> {
	const headers: Headers = new Headers();
	headers.set("Content-Type", "application/json");
	headers.set("Accept", "application/json");

	const request: RequestInfo = new Request("/users", {
		method: "POST",
		headers: headers,
		body: JSON.stringify(user),
	});

	return fetch(request).then((res) => {
		console.log("Usuario criado");
	});
}

createUsers({
	nomeUsuario: "teste",
	nome: "teste",
	email: "teste",
	idade: 0,
	sexo: "teste",
	senha: "teste",
	confirmarSenha: "teste",
	cidade: "teste",
	estado: "teste",
	erroMensagem: "teste",
}).then(() => {
	console.log("Usuário criado");
});
