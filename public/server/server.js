const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const  patients = require('../models/patients');
const patientsRoutes = require('../routes/patients')

const app = express();
app.use(bodyParser.json());

app.use('/patients', patientsRoutes);

app.get('/', (req, res) => {
    res.send('Hello Word!');

    sequelize.sync().then(() => {
        console.log('Database & tables created!');
    })

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    })
})