const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const nodemailer = require('nodemailer');
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
});

fs.deleteD

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
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

app.post("/signup", (req, res) => {
	console.log("sending signup application email")
	
	// https://www.w3schools.com/nodejs/nodejs_email.asp
	var mailOptions = {
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
	});
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
null;