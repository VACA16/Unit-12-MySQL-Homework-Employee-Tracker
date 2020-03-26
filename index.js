const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees'
});

connection.connect(function(err) {
    if (err) throw err;
    start();

});


function start() {
    inquirer.prompt({
        name: 'actiom',
        type: 'list',
        message: 'What would you like to do ?',
        choices: [
            'View All Employees',
            'View All Employees by Department',
            'View All Employees by Manager',
            'Add Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'Exit'
        ]
    }).then(function(answer) {
        switch (answer.action) {
            case 'View All Employees':
                allEmplloyees();
                break;

            case 'View All Employees by Department':
                allEmplloyeesDempartment();
                break;

            case 'View All Employees by Manager':
                allEmplloyeesManager();
                break;

            case 'Add Employee':
                addEmplloyee();
                break;

            case 'Remove Employee':
                removeEmplloyee();
                break;

            case 'Update Employee Role':
                updateRole();
                break;

            case 'Update Employee Manager':
                updateManager();
                break;

            case 'exit':
                connection.end();
                break;
        };
    });
};

function allEmplloyees() {
    console.log('Displaying All Employees...\n');
    connection.query('SELECT * FROM department role employee', function(err, res) {
        if (err) throw err;
        console.log(res);
        start();
    });
};

function allEmplloyeesDempartment() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Which department would you like to see employees for ?',
            choices: [
                'Sales',
                'Engineering',
                'Finance',
                'Legal',
                'exit'
            ]
        }).then(function(answer) {

        })
}