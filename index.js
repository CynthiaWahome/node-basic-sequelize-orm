const express = require('express');
const app = express();
const db = require('./models');
const { user } = require ('./models')

// Middleware to parse JSON bodies
app.use(express.json());

// Route for selecting all entries
app.get('/select', (req, res) => {
    user.findAll()
    .then((user) => {
        res.send(user);
    }) 
    .catch(err => {
        console.log(err);
    });
})

// Route for selecting a specific user
app.get('/select/user', (req, res) => {
    user.findAll({ where: { first_name: "Chuck"}})
    .then((user) => {
        res.send(user);
    }) 
    .catch(err => {
        console.log(err);
    });
})

// Route for inserting a new user
app.get('/insert', (req, res) => {
    user.create({
        first_name: "Mariana",
        last_name: "Woodvale",
        age: 27,
        department_name: "Database"
    }).catch(err => {
        console.log(err)
    });
    res.send('Entry inserted successfully')
})

// Route for deleting a user
app.get('/delete', (req, res) => {
    user.destroy({ where: { id: 8 }});
    res.send('Entry deleted successfully')
})


// Sync the Sequelize models with the db
db.sequelize.sync().then((req) => {
    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on port 3000!!");
    });
});
