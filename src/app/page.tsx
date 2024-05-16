import Image from "next/image";
import { Login } from "../../components/conta/Login";
import { Modal } from "../../components/alimentacao/modal";
import Galeria from "../../components/galeria/galeria";
import CadastroForm from "../../components/conta/Registrar";
import Loja from "../../components/loja/loja";

export default function Home() {
	return (
		<>
			{/* <MeuFormulario /> */}
			<CadastroForm/>
			<Login/>
			{/* <CadastroForm /> */}
		</>
	);
}
