import React, { useState } from "react";
import kombucha from "../src/imagens/kombuchaimg.jpg";
import aojiru from "../src/imagens/aojiruimg.jpg";
import sakuratea from "../src/imagens/sakuracha.jpg";
import uroncha from "../src/imagens/uronchaimg.jpg";
import ofukucha from "../src/imagens/Obukuchaimg.jpg";
import mugicha from "../src/imagens/mugichaimg.jpg";
import girltea from "../src/video/japanesetea.mp4";

export default function ModalBebida() {
	const [staticModal, setStaticModal] = useState<boolean>(false);

	const toggleOpen = () => setStaticModal(!staticModal);

	return (
		<>
			<div className="container">
				<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
					Alimentação
				</h1>
				<h2 className="text-white text-center">食べ物</h2>
				<div className="d-flex justify-content-md-center">
					{/* Modal Bebidas */}
					<div>
						{/* Modal Alimentacao */}
						<div className="card h-100" style={{ backgroundColor: "#191919" }}>
							<video className="h-100" autoPlay loop muted>
								<source src={girltea} type="video/mp4" />
							</video>
							<div className="card-body">
								<h1 className="text-center fs-1" style={{ color: "red" }}>
									Comidas
								</h1>
								<p className="fs-4 text-white">
									Veja o melhor que a culinaria japonesa pode oferecer.
								</p>
							</div>
						</div>
						<button onClick={toggleOpen} className="btn fs-1">
							Confira
						</button>

						{staticModal && (
							<div className="modal" style={{ display: "block" }}>
								<div className="modal-dialog modal-xl">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Comida</h5>
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												onClick={toggleOpen}></button>
										</div>
										<div
											className="modal-body"
											style={{ backgroundColor: "#191919" }}>
											<div className="row row-cols-1 row-cols-md-3 g-4">
												{/* Card for each item */}
												{[
													{
														src: kombucha,
														title: "Kombucha",
														description: "...",
													},
													{ src: aojiru, title: "Aojiru", description: "..." },
													{
														src: sakuratea,
														title: "Chá de Sakura",
														description: "...",
													},
													{
														src: uroncha,
														title: "Uroncha",
														description: "...",
													},
													{
														src: ofukucha,
														title: "Ofukucha",
														description: "...",
													},
													{
														src: mugicha,
														title: "Mugicha",
														description: "...",
													},
												].map((item, index) => (
													<div key={index} className="col">
														<div
															className="card"
															style={{ backgroundColor: "#191919" }}>
															<img
																src={item.src}
																className="card-img-top"
																alt="..."
															/>
															<div className="card-body">
																<h5 className="card-title text-danger">
																	{item.title}
																</h5>
																<p className="card-text text-white fs-5">
																	{item.description}
																</p>
															</div>
															<div className="card-footer">
																<h4 className="text-danger">R$ 15,00</h4>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												onClick={toggleOpen}>
												Fechar
											</button>
											<button type="button" className="btn btn-danger">
												Tenho Interesse
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
}
