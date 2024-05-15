import React from "react";

type Props = {
	label: string;
	name: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CampoTexto = (props: Props) => {
	return (
		<div className="container">
			<label>{props.label}</label>
			<name>{props.nome}</name>
			onChange={props.handleChange}
		</div>
	);
};

export default CampoTexto;
