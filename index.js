const fs = require("fs");

const express = require("express");
const app = express();
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));
console.log("Look like we have one more viewer! (lol eh y did you come here)");
app.get("/", (_, res) => {
	res.render("index");
	// Just decided to change this:
	console.log("Serving Home Page");
});

app.get("/haha-e", (_, res) => {
	console.log("haha é\n".repeat(50));
	res.render("haha-e");
});

app.get("/signup", (_, res) => {
	res.sendFile(__dirname + "/views/signup.php");
	console.log("Serving Signup Page");
});
// * Someone please make sure this sends the PHP file
// Don't get rid of the efficient request handlers:

// app.get("/:user", (req, res) => {
//   fs.exists(`views/${req.params.user}.html`, (exists) => {
//     if (exists) {
//       res.render(req.params.user);
//       if (req.params.user == "ch1ck3n") {
//         console.log("Yeet someone is actually visiting ch1ck3n's page")
//       } else if (req.params.user.toLowerCase() == "codemonkey51") {
//       	console.log("Does anyone even remember Codemonkey51, still going there anyway");
//       } else if (req.params.user == "darkdarcool") {
//         console.log("Wow, what a lame-o. Someone is in darkdarcool's page!")
//       }
//       else if (req.params.user == "codingredpanda") {
//         console.log("ooooh, u want to see the amazing CodingRedpanda?")
//       }
//       else if (req.params.user == "jbloves27") {
//         console.log("I don't know what JB was gonna write so ummm hoi ~~ Whippingdot")//hrmm...
// 	  }
// 	  else if (req.params.user == "isaiah08") {
//         console.log("Wait, someone is ACTUALLY looking the isaiah08 page???")
//       }
// 	else {
//         console.log("Serving user: " + req.params.user);
//       }
//     } else {
//       res.status(404).render("404");
//       console.log("404 Error, Page Not Found");
//     }
//   });
// });

app.get("/:user", (req, res) => {
	// you've been é-ed - firefish
	// ÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉÉ - CodingRedpanda
	if (fs.existsSync(`views/${req.params.user}.html`)) {
		console.log("Serving user: " + req.params.user);
		res.render(`${req.params.user}.html`);
	} else res.status(404).render("404.html");
});

// Keep the below commented:

/*app.get('/ch1ck3n', (req, res) => {

  res.render('ch1ck3n');
  console.log("Entering, the one, the only, ch1ck3n!");
});

app.get('/codemonkey51', (req, res) => {
	res.render('codemonkey51')
	console.log("Does anyone even remember Codemonkey51, still going there anyway");
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

// app.use((req, res, next) => {res.status(404).f8mrender('404')});
// HAH I FIXED A BUG - elipie
// you did? - jb
app.listen(8000, () => {
	console.log("Server running.");
});
