import React from "react";
import kitpalito from "../src/imagens/kitpalito.jpg";
import neko from "../src/imagens/maneki.jpg";
import katana from "../src/imagens/sword-katana.jpg";
import sake from "../src/imagens/sake.jpg";
import vasodragao from "../src/imagens/vasodragao.jpg";
import camisadragao from "../src/imagens/camisa.jpg";
import Image from "next/image";

function Loja() {
	return (
		<>
			<div>
				<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
					Loja
				</h1>
				<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
					店
				</h2>
				<div className="container">
					<div className="row">
						{[
							{
								src: kitpalito,
								title: "Kit Hashi",
								text: "Hashi se trata dos famosos palitos que são utilizados para alimentação no Japão. Se trata de uma ferramenta resistente e você adorar usá-la para comer seu sushi.",
								price: "R$ 30,00",
							},
							{
								src: neko,
								title: "Maneki Neko",
								text: "Maneki Neko é uma figura comum no Japão pois acredita-se que els trazem boa sorte aos seus donos. Geralmente são feitos de cerâmica ou plástico.",
								price: "R$ 50,00",
							},
							{
								src: katana,
								title: "Katana",
								text: "Katana se trata de uma espada comum no Japão. Foi utilizada pelos guerreiros samurais e faz parte da tradição do país.",
								price: "R$ 450,00",
							},
							{
								src: sake,
								title: "Sake",
								text: "Sake é uma bebida alcoolica no Japão. Se trata de uma bebida tradicional feita através da fermentação do arroz.",
								price: "R$ 35,00",
							},
							{
								src: vasodragao,
								title: "Vaso do Dragão",
								text: "Vaso com temática de dragão que é perfeito para decoração, se trata de um item bem produzido e resistente.",
								price: "R$ 250,00",
							},
							{
								src: camisadragao,
								title: "Camisa do Dragão",
								text: "Vaso com temática de dragão que é perfeito para decoração, se trata de um item bem produzido e resistente.",
								price: "R$ 30,00",
							},
						].map((item, index) => (
							<div className="col-md-4" key={index}>
								<div className="card h-100">
									<Image src={item.src} width={500} height={500} alt="" />
									<div className="card-body">
										<h5 className="card-title text-center fs-2">
											{item.title}
										</h5>
										<p className="card-text">{item.text}</p>
									</div>
									<div
										className="card-footer fs-3 text-center"
										style={{ backgroundColor: "#191919", color: "red" }}>
										{item.price}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Loja;
