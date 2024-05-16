import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="bg-gray-900 text-white bottom-0 text-lg">
			<section className="flex justify-center lg:justify-between p-2 border-b border-white">
				{/* Content for this section */}
			</section>

			<section className="py-8">
				<div className="container mx-auto text-center md:text-left">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
						<div className="mb-4 md:mb-0">
							<h6 className="text-lg font-semibold mb-4">Adventure Land</h6>
							<p className="text-sm">
								Adventure Land é o maior parque temático do país, venha conhecer
								essa maravilha.
							</p>
							<button className="Btn mt-4">{/* Button content */}</button>
						</div>

						<div className="mb-4">
							<h6 className="text-lg font-semibold mb-4">O que temos</h6>
							<p>
								<a href="#!" className="text-white">
									Parque de Diversao
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Restaurantes
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Lojas
								</a>
							</p>
						</div>

						<div className="mb-4">
							<h6 className="text-lg font-semibold mb-4">Links Uteis</h6>
							<p>
								<a href="#!" className="text-white">
									Planos
								</a>
							</p>
							<p>
								<a href="#!" className="text-white">
									Ajuda
								</a>
							</p>
						</div>

						<div>
							<h6 className="text-lg font-semibold mb-4">Contact</h6>
							<p className="text-sm">Belo Horizonte, MG, Brasil</p>
							<p className="text-sm">celsomartinscarvalho@gmail.com</p>
							<p className="text-sm">31 98497-7467</p>
						</div>
					</div>
				</div>
			</section>

			<div className="text-center py-4 bg-gray-800">
				© 2024 Copyright:
				<a
					className="font-bold text-white"
					href="https://github.com/CelsoBlackfyre">
					Celso Blackfyre
				</a>
			</div>
		</footer>
	);
};

export default Footer;
