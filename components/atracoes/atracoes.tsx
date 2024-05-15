import React, { useState } from "react";

const Atracoes: React.FC = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div>
				<div>
					<h2 className="text-white">Atrações do Parque</h2>
					<h3 className="text-white">公園のアトラクション</h3>
				</div>
			</div>
			<div className="container-fluid text-white text-center">
				<div className="row mx-0">
					<div className="col-md-4">
						<h2 className="text-white text-center display-5 fw-bold">
							Roda Gigante
						</h2>
						<img
							src="https://via.placeholder.com/300"
							className="modal show"
							style={{ display: "block", position: "initial" }}
							alt=""
							onClick={handleShow}
						/>
						{show && (
							<div className="modal" style={{ display: "block" }}>
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Roda Gigante 観覧車</h5>
											<button
												type="button"
												className="btn-close"
												onClick={handleClose}
												aria-label="Close"></button>
										</div>
										<div className="modal-body">
											<p>
												Brinquedo tradicional, uma das atrações mais procuradas
												do parque. Sendo uma atração clássica, ela pode ser
												visitada em todos os dias e também serve para todas as
												idades.
											</p>
											<p>Intensidade: Moderada </p>
											<p>Preço: R$ 50</p>
											<p>
												Altura Mínima: 1.16
												<br /> 60 cm acompanhado
											</p>
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												onClick={handleClose}>
												Fechar
											</button>
											<button
												type="button"
												className="btn btn-primary"
												onClick={handleClose}>
												Comprar
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Atracoes;
