export  function getDummyCities(){
	return [
		{
			id:"sp",
			label:"São Paulo",
			type:"cidade",
			state_id:"SP"
		},
		{
			id:"camp",
			label:"Campinas",
			type:"cidade",
			state_id:"SP"
		},
		{
			id:"rj",
			label:"Rio de Janeiro",
			type:"cidade",
			state_id:"RJ"
		},
		{
			id:"par",
			label:"Parati",
			type:"cidade",
			state_id:"RJ"
		},
	];
}

export  function getDummyState(){
	return [
		{
			id:"SP",
			label:"São Paulo - Estado",
			type:"cidade"
		},
		{
			id:"RJ",
			label:"Rio de Janeiro - Estado",
			type:"cidade"
		},
	];
}

export  function getDummyDistricts(){
	return [
		{
			id:"vm",
			label:"Vila Mariana",
			type:"cidade",
			city_id:"sp"
		},
		{
			id:"vmd",
			label:"Vila Madalena",
			type:"cidade",
			city_id:"sp"
		},
	];
}

export default class LocationsModel {
	constructor(props) {
		super(props);
	}

}