const express = require('express');
const app = express();
const visits = 0
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('Static'));

app.get('/', (req, res) => {
  res.render('index');

  console.log("You have entered the INDEX, dun dun duuuuuuuhn");
});
app.get('/signup', (req, res) => {
  res.render('signup');
 
  console.log("DIS DEM SIGNUP PAGE BOI");
});
// Don't get rid of anything below!

app.get('/ch1ck3n', (req, res) => {

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
  console.log("Entering, the one, the only, CodingRedpanda!");
});
app.get('/BD103', (req, res) => {
 
  res.render('bd');
  console.log("Yay someone actually is looking at BD103's page! 🥳")
});

app.get("*", (req, res) => {
 
  res.render("404");
  console.log("Hi, you reached the wrong number. Please try again IMMEDIATELY");
});
// DON'T LOOK PAST HERE PUBLIC
// Devs i need help please make this work
app.get("/admin", (req, res) => {
  res.render('admin')
  console.log("HOW DID YOU FIND THIS HACKER")
});

// Random tings
app.get("/a", (req, res) => {
  console.log("a");
});
app.get("/b", (req, res) => {
  console.log("b");
});
app.get("/c", (req, res) => {
  console.log("c");
});
app.get("/d", (req, res) => {
  console.log("d");
});
app.get("/e", (req, res) => {
  console.log("e");
});
app.get("/f", (req, res) => {
  console.log("f");
});
app.get("/g", (req, res) => {
  console.log("g");
});
app.get("/h", (req, res) => {
  console.log("h");
});
app.get("/i", (req, res) => {
  console.log("/i");
});
app.get("/j", (req, res) => {
  console.log("j");
});
app.get("/k", (req, res) => {
  console.log("k");
});
app.get("/l", (req, res) => {
  console.log("l");
});
app.get("/m", (req, res) => {
  console.log("m");
});
app.get("n", (req, res) => {
  console.log("n");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});
app.get("", (req, res) => {
  console.log("");
});app.get("", (req, res) => {
  console.log("");
});

app.use((req, res, next) => {res.status(404).render('404')});

app.listen(8080, () => {
  console.log('Page iiiis woooorking');
});