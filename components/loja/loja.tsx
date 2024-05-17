import React from "react";
import kitpalito from "../../src/imagens/kitpalito.jpg";
import neko from "../../src/imagens/maneki.jpg";
import katana from "../../src/imagens/sword-katana.jpg";
import sake from "../../src/imagens/sake.jpg";
import vasodragao from "../../src/imagens/vasodragao.jpg";
import camisadragao from "../../src/imagens/camisa.jpg";
import hashi from "../../src/imagens/hashi3.jpg";
import Image from "next/image";

function Loja() {
	return (
		<>
			<div>
				<h1 className="text-white text-center text-4xl" style={{ marginTop: "50px" }}>
					Loja
				</h1>
				<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
					店
				</h2>
				<div className="container">
					<div className="grid grid-cols-3 ">
						{[
							{
								src: hashi,
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
							<div className="block rounded-lg shadow-secondary-1 " key={index}>
								<div className="bg-#191919 rounded-lg py-4 flex flex-1 flex-col justify-between px-3">
									<Image
										src={item.src}
										width={500}
										height={500}
										className="rounded-t-lg object-contain "
										alt=""
									/>
									<div className="p-6 object-contain   text-surface bg-white">
										<h5 className="mb-2 text-xl font-medium leading-tight">
											{item.title}
										</h5>
										<p className="mb-4 text-base text">{item.text}</p>
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
