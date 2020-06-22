const path = require("path");

var config = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				// make sure the file is typsescript, use regex
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		publicPath: "public",
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
};

// needs to be a function that returns an object...
// This allows us to tweak the settings
// depending on our development environment.

module.exports = (env, argv) => {
	if (argv.mode === "production") {
		config.devtool = "source-map";
	} else {
		config.devtool = "eval-source-map";
	}
	console.log(argv);
	return config;
};
