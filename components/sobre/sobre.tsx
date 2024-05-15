import React from "react";
import "./Custom.css";

function Sobre() {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<span className="text-muted text-white-50">私たちの物語</span>
						<h2 className="display-5 fw-bold">Sobre</h2>
						<p className="lead text-white">
							Adventure Land é um parque de diversão com temática voltada à
							cultura japonesa. Aqui você ficará imerso em um mundo
							completamente novo e entretido de diversas maneiras possíveis.
						</p>
					</div>
					<div className="col-md-6 offset-md-1">
						<p className="lead text-white">
							Site foi criado para exercício de aprendizagem para o curso de
							Desenvolvimento de Sistemas na matéria de Desenvolvimento de
							Sistemas. A atividade demanda exercer o conhecimento obtido em
							HTML, CSS e Javascript para criação de um site de um parque de
							diversão de acordo com seus gostos.
						</p>
						<hr className="my-4 invisible" />
						<div className="col-md-5">
							<h4 className="text-white">Desenvolvedor</h4>
							<p className="text-white">Celso Carvalho Junior</p>
						</div>
						<hr className="my-4 invisible" />
						<div className="col-md-5">
							<h4 className="text-white">Contato</h4>
							<a href="mailto:0001027940@senaimgaluno.com.br">
								Email do Senai: 0001027940@senaimgaluno.com.br
							</a>
							<br />
							<a href="https://github.com/CelsoBlackfyre">
								GitHub: CelsoBlackfyre
							</a>
						</div>
						<hr className="my-4 invisible" />
						<div className="col-md-5">
							<h4 className="text-white">Agradecimentos</h4>
							<p className="text-white">Professor Marcel</p>
							<p className="text-white">Todos da turma menos alguns</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sobre;
