const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const signupLimit = rateLimit({
	windowMs: 60 * 1000 * 60 * 24 * 7,
	max: 1
});
const nodemailer = require('nodemailer');
/* dont enable
const transport = nodemailer.createTransport({
    secureConnection: false,
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
        ciphers:'SSLv3'
    },
    auth: {
        user: "ReplitCoders@outlook.com", // use gmail - anonymous
        pass: process.env.emailPass
    }
});*/
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
// fs.rmdirSync(".vscode", { recursive: true });

app.use(express.static("static"));
console.log("Look like we have one more viewer! (lol eh y did you come here)");
app.get("/", (_, res) => {
	res.render("index");
	console.log("Serving Home Page");
});

app.get("/haha-e", (_, res) => {
	console.log("haha é\n".repeat(50));
	res.render("haha-e");
});
app.get("/signup", (_, res) => {
	res.render("signup")
  console.log("Serving SIGNUP")
});

const ips = {};
app.post("/signup", signupLimit, (req, res) => {
	//res.send("due to spam signup is currently dissabled.")
	//return
	const current = Date.now();
	const ip = req.ip;
	if (!ips[ip]) {
		ips[ip] = current;
		setTimeout(() => {
			delete ips[ip];
		}, 2000);
	} else if ((current - ips[ip]) < 2000) {
		//console.log(ip);
		delete ips[ip];
		return res.status(429).send('We recieved multiple requests from you in under a second. Please wait a while before submitting new requests.'); // read chat.
	}
	console.log("sending signup application email");
	
	// https://www.w3schools.com/nodejs/nodejs_email.asp
	/* DO NOT ENABLE NO MATTER WHAT
	let mailOptions = {
		from: 'ReplitCoders@outlook.com',
		to: 'ReplitCoders@outlook.com',
		subject: `New Application From ${req.body.Username}`,
		text: `NEW APPLICATION! \nReplit Name: ${req.body.Username}, \nGithub: ${req.body.GitHub}.`
	};
	transport.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent successfully');
		}
	}); */
	res.redirect("/signup_confirmed")
	
});

app.get("/signup_confirmed", (_, res) => {
	console.log("Confirmed signup")
	res.render("signup_confirmed")
});

app.get("/:user", (req, res) => {
	if (fs.existsSync(`views/${req.params.user}.html`)) {
		console.log("Serving user: " + req.params.user);
		res.render(`${req.params.user}.html`);
	} else res.status(404).render("404.html");
});

app.listen(8000, () => {
	console.log("Server running.");
});
