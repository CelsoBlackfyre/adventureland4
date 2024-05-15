import Image from "next/image";
import { CadastroForm } from "../../components/conta/Registrar";
import { Login } from "../../components/conta/Login";

export default function Home() {
	return (
		<>
			<Login />
			<CadastroForm />
		</>
	);
}
