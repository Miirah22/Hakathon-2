 /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed =  async function(knex) {
  // Deletes ALL existing entries
  return knex('empForm')
  .del()
  .then(function () {
    return knex('empForm').insert([
      {fname: 'John Doe', employee_age: 26, city: 'New York', email: 'johndoe@gmail.com', phone: '58923645', post: 'Officer', sDate: '22-05-2022'}, 
    ]);
  });
};
