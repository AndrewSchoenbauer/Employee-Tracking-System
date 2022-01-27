const mysql = require('mysql2');
const inquirer = require('inquirer');
const Ctable = require('console.table');



const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'andrewandmikki1',
      database: 'employee_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

  const init =()=> {
      inquirer.prompt([
          {
              type: "list",
              name: "name",
              message: "What would you like to begin with?",
              choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Finished"]
          },
      ])
      .then(choices => {
          switch(choices.name) {
              case "View all departments":
                  viewAll("DEPARTMENT");
                  break;
              case "View all roles":
                  viewAll("ROLES");
                  break;
              case "View all employees":
                  viewAll("EMPLOYEE");
                  break;
              case "Add a department":
                  addDepartment();
                  break;
              case "Add a role":
                  addRole();
                  break;
              case "Add an employee":
                  addEmployee();
                  break;
              case "Update an employee role":
                  updateRole();
                  break;
              default:
                  db.end();

          }
      })
      .catch(err => {
          console.error(err);
      })
  }

 const viewAll = (tables) => {
     let query;
     if (tables === "DEPARTMENT") {
         query= `SELECT * FROM department`;
     } else if (tables==="ROLES") {
         query= `SELECT * FROM roles JOIN department ON roles.department_id= department.id`;
     } else  {
         query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
         FROM employee e
         LEFT JOIN roles r
           ON e.roles_id = r.id
         LEFT JOIN department d
         ON d.id = r.department_id
         LEFT JOIN employee m
           ON m.id = e.manager_id`
     }
     db.query(query, (err, res)=>{
         if (err) throw (err);
         console.table(res);
         init();
     })
 }
 init();