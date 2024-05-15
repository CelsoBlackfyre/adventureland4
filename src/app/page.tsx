import Image from "next/image";
import { CadastroForm } from "../../components/conta/Registrar";
import { Login } from "../../components/conta/Login";
import { Modal } from "../../components/alimentacao/modal";

export default function Home() {
	return (
		<>
			<Modal />
			<Login />
			<CadastroForm />
		</>
	);
}
