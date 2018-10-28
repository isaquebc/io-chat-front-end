const root_url = "http://www.permutafacil.net";

export default {
	about:{
		title:"SOBRE",
		array:[
			{
				id: "platform",
				href: root_url + "/sobre",
				label: "A Plataforma",
				target: "_blank"
			},
			{
				id: "blog",
				href: "http://blog.permutafacil.net",
				label: "Blog",
				target: "_blank"
			},
			{
				id: "social",
				label: "Facebook",
				href: "https://www.facebook.com/portalpermutafacil/",
				target: "_blank",
				icon1:"facebookFooter"
			},
			{
				id: "social",
				label: "Instagram",
				href: "https://www.instagram.com/permutafacil/",
				target: "_blank",
				icon1:"instagramFooter"
			}
		]
	},
	help:{
		title:"AJUDA",
		array:[
			{
				id: "terms",
				href: root_url + "/termos-de-servico",
				label: "Termos de Uso",
				target: "_blank"
			},
			{
				id: "contactUs",
				href: root_url + "/contato",
				label: "Fale Conosco",
				target: "_blank"
			},
			{
				id: "privacity",
				href: root_url + "/politica-de-privacidade",
				label: "Política de Privacidade",
				target: "_blank"
			},
			{
				id: "oftenQuestions",
				href: root_url + "/perguntas-frequentes",
				label: "Perguntas frequentes",
				target: "_blank"
			}
		]
	},
	attendance:{
		title:"ATENDIMENTO",
		array:[
			{
				id: "suport",
				href: "mailto:contato@permutafacil.net",
				label: "contato@permutafacil.net"
			},
			{
				id: "phone",
				label: "+55 11 5532-0033"
			},
			{
				id: "mobile",
				href: "https://api.whatsapp.com/send?Olá!=pt_BR&phone=5511998642440",
				label: "+55 11 99864-2440",
				icon1: "whatsAppFooter",
				target: "_blank"
			},
		]
	}
};