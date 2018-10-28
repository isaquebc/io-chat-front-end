import React from "react";

export default {
	rows: [
		[
			{
				type: "select",
				id: "category",
				placeholder: "Tipo de Imóvel",
				options: [
					{label: "Todos", id: "all"},
					{label: "Sobrado", id: "adf"},
					{label: "Apartamento", id: "sdf"},
				]
			},
			{
				type: "select",
				placeholder: "Localização",
				id: "location",
				options: [
					{label: "SP", id: "rg"},
					{label: "RJ", id: "dsf"},
					{label: "Santomé", id: "fg"},
				]
			},
			{
				type: "area",
				placeholder: "Metragem"
			},
			{
				type: "price",
				placeholder: "Valor Médio"
			}

		],
		[
			{
				type: "select",
				id: "suites",
				placeholder: "Suites",
				options: [
					{label: "1", id: "1"},
					{label: "2", id: "2"},
					{label: "3", id: "3"},
				]
			},
			{
				type: "select",
				id: "bedrooms",
				placeholder: "Quartos",
				options: [
					{label: "1", id: "1"},
					{label: "2", id: "2"},
					{label: "3", id: "3"},
				]
			},
			{
				type: "select",
				id: "bathrooms",
				placeholder: "Banheiros",
				options: [
					{label: "1", id: "1"},
					{label: "2", id: "2"},
					{label: "3", id: "3"},
				]
			},
			{
				type: "select",
				id: "parking",
				placeholder: "Vagas",
				options: [
					{label: "1", id: "1"},
					{label: "2", id: "2"},
					{label: "3", id: "3"},
				]
			}

		],

		
	]

};