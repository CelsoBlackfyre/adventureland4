import React from "react";
import Image from "next/image";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import sakurahouse from "../../src/imagens/sakurahouse.jpg";
import park3 from "../../src/imagens/japanesevillage.jpg";
import park4 from "../../src/imagens/brinquedo6.png";

function CarouselB() {
	return (



		<>
		<TECarousel showControls showIndicators crossfade ride="carousel">
		  <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
			<TECarouselItem
			  itemID={1}
			  className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
			>
			  <img
				src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
				className="block w-full"
				alt="..."
			  />
			</TECarouselItem>
			<TECarouselItem
			  itemID={2}
			  className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
			>
			  <img
				src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
				className="block w-full"
				alt="..."
			  />
			</TECarouselItem>
			<TECarouselItem
			  itemID={3}
			  className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
			>
			  <img
				src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
				className="block w-full"
				alt="..."
			  />
			</TECarouselItem>
		  </div>
		</TECarousel>
	  </>
	);
  }








		// <Carousel className="carousel-container font-loader" data-bs-theme="dark">
		// 	<div className="carousel-item carousel-image">
		// 		<Image className="d-block w-100" src={sakurahouse} alt="First slide" />
		// 		<div className="carousel-caption">
		// 			<h5 className="text-white display-5 fw-bold">
		// 				<span> SEJA BEM-VINDO AO NOSSO PARQUE</span>
		// 			</h5>
		// 			<p className="text-white fs-3">
		// 				<span>私たちの公園へようこそ</span>
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<div className="carousel-item carousel-image">
		// 		<Image className="d-block w-100" src={park3} alt="Second slide" />
		// 		<div className="carousel-caption">
		// 			<h5 className="text-white display-5 fw-bold">
		// 				<span> O MUNDO FANTASTICO DA CULTURA JAPONESA</span>
		// 			</h5>
		// 			<p className="text-white fs-3">
		// 				<span>幻想的な日本文化の世界</span>
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<div className="carousel-item carousel-image">
		// 		<Image className="d-block w-100" src={park4} alt="Third slide" />
		// 		<div className="carousel-caption">
		// 			<h5 className="text-white display-5 fw-bold">
		// 				<span>VENHA CONHECER NOSSAS ATRACOES</span>
		// 			</h5>
		// 			<p className="text-white fs-3">
		// 				<span>私たちのアトラクションを見に来てください</span>
		// 			</p>
		// 		</div>
		// 	</div>
		// </Carousel>
	);
}

export default CarouselB;
