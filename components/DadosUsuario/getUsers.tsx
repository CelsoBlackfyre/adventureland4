export interface FormData {
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

function getUsers(): Promise<FormData> {
	const headers: Headers = new Headers();
	headers.set("Content-Type", "application/json");
	headers.set("Accept", "application/json");
	headers.set("X-Custom-Header", "CustomValue");

	const request: RequestInfo = new Request(".users.json", {
		method: "GET",
		headers: headers,
	});
	return fetch(request)
		.then((res) => res.json())
		.then((res) => {
			return res as FormData;
		});
}

const result = document.getElementById("result");
if (!result) {
	throw new Error("Elemento com id 'result' não encontrado");
}

getUsers().then((users) => {
	result.innerHTML = JSON.stringify(users, null, 2);
});
