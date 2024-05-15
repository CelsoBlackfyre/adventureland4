import React from "react";
import sakurahouse from "../../src/imagens/sakurahouse.jpg";
import park3 from "../../src/imagens/japanesevillage.jpg";
import park4 from "../../src/imagens/brinquedo6.png";
import { Carousel } from "react-bootstrap";
import "./carrossel.css";

function CarouselB() {
	return (
		<Carousel className="carousel-container font-loader" data-bs-theme="dark">
			<div className="carousel-item carousel-image">
				<img className="d-block w-100" src={sakurahouse} alt="First slide" />
				<div className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span> SEJA BEM-VINDO AO NOSSO PARQUE</span>
					</h5>
					<p className="text-white fs-3">
						<span>私たちの公園へようこそ</span>
					</p>
				</div>
			</div>
			<div className="carousel-item carousel-image">
				<img className="d-block w-100" src={park3} alt="Second slide" />
				<div className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span> O MUNDO FANTASTICO DA CULTURA JAPONESA</span>
					</h5>
					<p className="text-white fs-3">
						<span>幻想的な日本文化の世界</span>
					</p>
				</div>
			</div>
			<div className="carousel-item carousel-image">
				<img className="d-block w-100" src={park4} alt="Third slide" />
				<div className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span>VENHA CONHECER NOSSAS ATRACOES</span>
					</h5>
					<p className="text-white fs-3">
						<span>私たちのアトラクションを見に来てください</span>
					</p>
				</div>
			</div>
		</Carousel>
	);
}

export default CarouselB;
