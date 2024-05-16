"use client";
import Image from "next/image";
import { Login } from "../../components/conta/Login";
import { Modal } from "../../components/alimentacao/modal";
import Galeria from "../../components/galeria/galeria";
import CadastroForm from "../../components/conta/Registrar";
import Loja from "../../components/loja/loja";
import AppHeader from "../../components/header/navbar";
import Footer from "../../components/footer/footer";
import CarouselB from "../../components/carrossel/carrossel";
export default function Home() {
	return (
		<>
			{/* <MeuFormulario /> */}
			<CarouselB />
			<AppHeader />
			<Loja />
			<CadastroForm />
			<Login />
			<Footer />
			{/* <CadastroForm /> */}
		</>
	);
}
