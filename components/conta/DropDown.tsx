import React from "react";

type DropDownProps = {
	label: string;
	name: string;
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	values: Array<{ value: string; label: string }>;
	valorAtual: string;
};

const CampoTexto = (props: DropDownProps) => {
	return (
		<div className="container">
			<select
				label={props.label}
				name={props.name}
				onChange={props.handleChange}
				value={props.valorAtual}
				id=""></select>
		</div>
        {props.values.map(option => (
           <MenuItem>
            key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}

	);
};
