// TO CONFIGURE:
// UPLOAD A IMAGE TO USE AS A FAVICON INTO THE 'TEMPLATES' FOLDER
// THEN RENAME IT TO 'favicon.png'
// IT WILL AUTOMATICALLY BE SET AS THE FAVICON
// GOTO ALL OF THE HTML DOCUMENTS IN THE 'TEMPLATES' FOLDER AND EDIT THE TEXT.
// TELL PEOPLE ABOUT YOUR SITE!
console.clear();
const express = require('express');
const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('Static'));

app.get('/', (req, res) => {
  res.render('index');
  console.log("You have entered the INDEX, dun dun duuuuuuuhn")
});
app.get('/ch1ck3n', (req, res) => {
  res.render('ch1ck3n');
  console.log("Entering, the one, the only, ch1ck3n!")
});
app.get('/dark', (req, res) => {
  res.render('dark');
  console.log("You have gone to darkdarcool's page aahahaha")
});
app.get('/codingredpanda', (req, res) => {
  res.render('codingredpanda');
  console.log("Entering, the one, the only, CodingRedpanda!")
});
app.get('/dark.style', (req, res) => {
  res.sendFile('Static/Darkdarcool.css/');
  console.log("You have entered the INDEX, dun dun duuuuuuuhn")
});
app.get("*", (req, res) => {
  res.render("404");
  console.log("Hi, you reached the wrong number. Please try again IMMEDIATELY")
})
app.use((req, res, next) => {res.status(404).render('404')});

app.listen(8080, () => {
  console.log('Page iiiis woooorking');
});