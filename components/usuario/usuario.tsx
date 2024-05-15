export interface UserProps {
	name: string;
	sobrenome: string;
	nomeUsuario: string;
	email: string;
}

const Usuario = ({ name, sobrenome, nomeUsuario, email }: UserProps) => {
	return (
		<>
			<p>{name}</p>
			<p>{sobrenome}</p>
			<p>{nomeUsuario}</p>
			<p>{email}</p>
		</>
	);
};

export default Usuario;
