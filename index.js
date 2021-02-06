const fs = require("fs");

const express = require('express');
const app = express();
const visits = 0
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('Static'));

app.get('/', (req, res) => {
  res.render('index');
  // Just decided to change this:
  console.log("Serving Home Page");
});
app.get('/signup', (req, res) => {
  res.render('signup');
  console.log("Serving Signup Page");
});

// Don't get rid of anything below! (Except the inefficient use of all those request handlers)

app.get("/:user", (req, res) => {
	fs.exists(`views/${req.params.user}.html`, (exists) => {
		if (exists)
			res.render(req.params.user);
      console.log("Serving user: " + req.params.user);
		else
			res.status(404).render("404");
      console.log("404 Error, Page Not Found")
	});
});

/*app.get('/ch1ck3n', (req, res) => {

  res.render('ch1ck3n');
  console.log("Entering, the one, the only, ch1ck3n!");
});

app.get('/codemonkey51', (req, res) => {
	res.render('codemonkey51')
	console.log("Does anyone even remember Codemonkey51, still going there anyways");
});
app.get('/colepete', (req, res) => {
  res.render('colepete');
  console.log("Going to ColePete's page...");
});

app.get('/dark', (req, res) => {
  
  res.render('dark');
  console.log("You have gone to darkdarcool's page aahahaha");
});

app.get('/codingredpanda', (req, res) => {
  res.render('codingredpanda');
  console.log("a redpanda who may or may not be a hacker...");
});

app.get('/JBloves27', (req, res) => {
  res.render('JBLOVES');
  console.log('Entering glitch territory!')
});
app.get('/BD103', (req, res) => {
 
  res.render('bd');
  console.log("Yay someone actually is looking at BD103's page! 🥳")
});
app.get("/head", (req, res) => {
  res.render("head");
  console.log("Entering a floating head's territory")
});
app.get("/epicraisin", (req, res) => {
  res.render("epicraisin");
  console.log("beep beep epicraisin");
});
app.get('/programmeruser', (req, res) => {
	res.redirect('https://programmeruser.repl.co');
});*/

// app.use((req, res, next) => {res.status(404).send("Error")});

// app.use((req, res, next) => {res.status(404).render('404')});

app.listen(8000, () => {
  console.log("Server running.");
});