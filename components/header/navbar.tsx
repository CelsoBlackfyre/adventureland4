import React, { useState } from "react";
import "./App.css";

function AppHeader() {
	const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-dark"
				style={{ backgroundColor: "#191919" }}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Adventure Land
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarColor02"
						aria-controls="navbarColor02"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setOpenNavColorSecond(!openNavColorSecond)}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={
							"collapse navbar-collapse" + (openNavColorSecond ? " show" : "")
						}
						id="navbarColor02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Loja
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Alimentacao
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sobre
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Conta
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Socio
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default AppHeader;
