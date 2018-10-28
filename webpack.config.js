const {
	DefinePlugin,
	LoaderOptionsPlugin,
	optimize,
	NoEmitOnErrorsPlugin,
	EnvironmentPlugin
} = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const poststylus = require("poststylus");
const { resolve, join } = require("path");


const env = process.env.NODE_ENV || "local";
const isLocal = env == "local";
const apiEndpoint = process.env.API_ENDPOINT;
const uaAnalytics = process.env.UA_ANALYTICS;
const paypalClientId = process.env.PAYPAL_CLIENT_ID;
const paypalSecret = process.env.PAYPAL_SECRET;
const pagarmeToken = process.env.PAGARME_TOKEN;
const googleGeocodeKey = process.env.GOOGLE_GEOCODE_KEY;

const plugins = [];
const minimizer = [];

if(!isLocal) minimizer.push(new UglifyJsPlugin({ cache: true, parallel: true,	uglifyOptions: { compress: true,	ecma: 6, mangle: true }, sourceMap: true}));

plugins.push(new optimize.AggressiveMergingPlugin());
plugins.push(new NoEmitOnErrorsPlugin());
plugins.push(new DefinePlugin({"process.env": {NODE_ENV: JSON.stringify(env)}}));
plugins.push(new CompressionPlugin({asset: "[path].gz[query]", algorithm: "gzip", test: /\.js$|\.css$|\.html$/, threshold: 5120, minRatio: 0.8, deleteOriginalAssets: true	}));
plugins.push(new LoaderOptionsPlugin({options: { stylus: { use: [poststylus(["autoprefixer"])] }}}));

if (apiEndpoint) plugins.push(new EnvironmentPlugin(["API_ENDPOINT"]));
if (uaAnalytics) plugins.push(new EnvironmentPlugin(["UA_ANALYTICS"]));
if (paypalClientId) plugins.push(new EnvironmentPlugin(["PAYPAL_CLIENT_ID"]));
if (googleGeocodeKey) plugins.push(new EnvironmentPlugin(["GOOGLE_GEOCODE_KEY"]));
if (pagarmeToken) plugins.push(new EnvironmentPlugin(["PAGARME_TOKEN"]));
if (paypalSecret) plugins.push(new EnvironmentPlugin(["PAYPAL_SECRET"]));

module.exports = {
	entry: {
		app: resolve(__dirname, "app/index.js")
	},
	output: {
		path: join(__dirname, "public/dist"),
		filename: "[name].min.js",
		chunkFilename: "[name].chunk.js",
		publicPath: "/dist/",
	},
	mode: isLocal ? "development" : "production",
	devtool: isLocal ? "#eval-source-map" : "#nosources-source-map",
	module: {
		rules: [
			{
				test: /.js$/,
				include: [resolve("app")],
				loader: "babel-loader"
			},
			{
				test: /.styl$/,
				include: [resolve("app")],
				use: [
					{
						loader: "style-loader"
					}, {
						loader: "css-loader",
						options: { 
							importLoaders: 1
						}
					}, {
						loader: "stylus-loader"
					},
				]
			},
			{
				test: /\.svg$/,
				use: [
				  'file-loader'
				]
			},
			{
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
		]
	},
	resolve: {
		modules: ["node_modules", resolve("app")]
	},
	plugins,
	optimization: {
		minimizer
	},
	watch: isLocal
};