const express = require('express');
const app = express();
//const empRoutes = require('./routes/empRoutes.js');
//const emplControllers = require('./controllers/empControllers.js');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));

// Serve the regForm page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/empForm',(req, res) => {
  try {
    const empForm = db('empForm').select('*')
    empForm.then((data) => {
      res.json(data);
      console.log(data)});
   
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
});

app.patch('/empForm',(req, res) => {
  try {
    const empForm = db('empForm').select('*')
    empForm.then((data) => {
      res.json(data);
      console.log(data)});
   
 } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}); 

// Handle the POST request from the employee form
app.post('/empForm', (req, res) => {
  const empForm = req.body;
  console.log(empForm)
  db ('empForm')
  .insert({fname: empForm['fname'], employee_age: empForm['employee_age'], city: empForm['city'], email: empForm['email'], phone: empForm['phone'], post: empForm['post'], sDate: '2022-05-03'})
  .then (() => {
    res.send('Registration successfull');
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send('Registration failed');
  })
});

app.put('/empForm',(req, res) => {
  try {
    const empForm = db('empForm').select('*')
    empForm.then((data) => {
      res.json(data);
      console.log(data)});
   
 } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}); 



// Handle the POST request from the employee form
/*app.post('/empForm', (req, res) => {
  const {picture, fname, employee_age, city, email, phone, post, sDate} = req.body;
  
  db ('empForm')
  .insert({picture, fname, employee_age, city, email, phone, post, sDate})
  .then (() => {
    res.send('Registration successfull');
  })
  .catch((err) => {
    res.status(500).send('Registration failed');
  })
});*/

app.delete('/empForm',(req, res) => {
  try {
    const empForm = db('empForm').select('*')
    empForm.then((data) => {
      res.json(data);
      console.log(data)});
   
 } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
 }
}); 

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});