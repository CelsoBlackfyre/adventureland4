import React from "react";
import { StaticImageData } from "next/image";
import park from "../../src/imagens/park.png";
import park2 from "../../src/imagens/park2.png";
import park3 from "../../src/imagens/park3.png";
import park4 from "../../src/imagens/park4.png";
import park5 from "../../src/imagens/park5.png";
import park6 from "../../src/imagens/park6.png";
import park7 from "../../src/imagens/park7.png";
import park8 from "../../src/imagens/park8.png";
import Image from "next/image";

function Galeria() {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Image src={park4} width={500} height={500} alt="" />
					</div>
					<div className="col-md-3">
						<Image src={park6} width={500} height={500} alt={""} />
					</div>
					<div className="col-md-3">
						<Image src={park5} width={500} height={500} alt={""} />
					</div>
					<div className="col-md-3">
						<Image src={park7} width={500} height={500} alt={""} />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<Image src={park} width={500} height={500} alt={""} />
					</div>
					<div className="col-md-3">
						<Image src={park2} width={500} height={500} alt={""} />
					</div>
					<div className="col-md-3">
						<Image src={park3} width={500} height={500} alt={""} />
					</div>
					<div className="col-md-3">
						<Image src={park4} width={500} height={500} alt={""} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Galeria;
