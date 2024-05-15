import React, { useState } from "react";
import okonomiyakiimg from "../src/imagens/okonomiyakiimg.jpg";
import uramakisushi from "../src/imagens/uramakisushiimg.jpg";
import yakitori from "../src/imagens/yakitoriimg.jpg";
import tempura from "../src/imagens/tempuraimg.jpg";
import sashimi from "../src/imagens/sashimiimg.jpg";
import udon from "../src/imagens/udonimg.jpg";
import tonkatsu from "../src/imagens/Tonkatsu img.jpg";
import takoyaki from "../src/imagens/Takoyakiimg.jpeg";

export default function ModalComida() {
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
					<div>
						{/* Modal Alimentacao */}
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
														src: okonomiyakiimg,
														title: "Okonomiyaki",
														description: "...",
													},
													{
														src: uramakisushi,
														title: "Uramaki Sushi",
														description: "...",
													},
													{
														src: yakitori,
														title: "Yakitori",
														description: "...",
													},
													{
														src: tempura,
														title: "Tempura",
														description: "...",
													},
													{
														src: sashimi,
														title: "Sashimi",
														description: "...",
													},
													{ src: udon, title: "Udon", description: "..." },
													{
														src: tonkatsu,
														title: "Tonkatsu",
														description: "...",
													},
													{
														src: takoyaki,
														title: "Takoyaki",
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
																<h4 className="text-danger">R$ 25,00</h4>
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
