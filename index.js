var express = require("express");
var app = express();
//
// Set up a URL route
app.get("/", function(req, res) {
 res.send("Heroku Demo!");
});

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 6060;
app.listen(port);

// Render some console log output
console.log("Listening on port " + port);

// module.exports = {
//   configureServer(app) {
//     // `app` is the instance of the express server running Styleguidist
//     app.get('/', (req, res) => {
//       res.status(200).send({ response: 'Server invoked' })
//     })
//
//     var port = process.env.PORT || 6060;
//     app.listen(port);
//
//     // Render some console log output
//     console.log("Listening on port " + port);
//   }
// }


// module.exports = {
// 	components: 'src/components/**/[A-Z]*.js',
// 	defaultExample: true,
// 	webpackConfig: {
// 		module: {
// 			rules: [
// 				{
// 					test: /\.jsx?$/,
// 					exclude: /node_modules/,
// 					loader: 'babel-loader',
// 				},
// 				{
// 					test: /\.css$/,
// 					loader: 'style-loader!css-loader',
// 				},
// 			],
// 		},
// 	},
// };
