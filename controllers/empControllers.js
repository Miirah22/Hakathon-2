const knex = require('knex');
const knexConfig = require('../db/config');
const db = knex(knexConfig.development);

const empForm = async (req, res) => {
    try{
        const{picture, fname, employee_age, city, email, phone, post, sDate} = req.body;
        await db('empForm').insert({picture, fname, employee_age, city, email, phone, post, sDate });
        res.status(201).send('Registration sucessful!');
    }catch (error) {
        console.error(error);
        res.status(500).send('Registration failed.');
    }
};

module.exports = {
    empForm,
};