import Image from "next/image";
import MeuFormulario, { CadastroForm } from "../../components/conta/Registrar";
import { Login } from "../../components/conta/Login";
import { Modal } from "../../components/alimentacao/modal";
import Galeria from "../../components/galeria/galeria";

export default function Home() {
	return (
		<>
			{/* <MeuFormulario /> */}
			<Galeria />
			{/* <CadastroForm /> */}
		</>
	);
}
