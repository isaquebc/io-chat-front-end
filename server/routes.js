const data = { 
	seo: { 
		title: "Io Ch4t", 
	},
};
const routes = (app) => {
	app.get("/detalhes/:property_id", (req, res) => renderPropertyDetails(req, res, data) );
	app.get("*", (req, res) => res.render("index", { data }));
	
};

export default routes;

