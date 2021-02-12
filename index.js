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

// Don't get rid of the efficient request handlers:

// app.get("/:user", (req, res) => {
//   fs.exists(`views/${req.params.user}.html`, (exists) => {
//     if (exists) {
//       res.render(req.params.user);
//       if (req.params.user == "ch1ck3n") {
//         console.log("Yeet someone is actually visiting ch1ck3n's page")
//       } else if (req.params.user.toLowerCase() == "codemonkey51") {
//       	console.log("Does anyone even remember Codemonkey51, still going there anyways");
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


app.get("/:user",(o,e)=>{fs.exists(`views/${o.params.user}.html`,a=>{a?(e.render(o.params.user),"ch1ck3n"==o.params.user?console.log("Yeet someone is actually visiting ch1ck3n's page"):"codemonkey51"==o.params.user.toLowerCase()?console.log("Does anyone even remember Codemonkey51, still going there anyways"):"darkdarcool"==o.params.user?console.log("Wow, what a lame-o. Someone is in darkdarcool's page!"):"codingredpanda"==o.params.user?console.log("ooooh, u want to see the amazing CodingRedpanda?"):"jbloves27"==o.params.user?console.log("I don't know what JB was gonna write so ummm hoi ~~ Whippingdot"):"isaiah08"==o.params.user?console.log("Wait, someone is ACTUALLY looking the isaiah08 page???"):console.log("Serving user: "+o.params.user)):(e.status(404).render("404"),console.log("404 Error, Page Not Found"))})});


// Keep the below commented:

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