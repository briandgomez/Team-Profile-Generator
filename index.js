const fs = require('fs');
const inquirer = require('inquirer');

/*
Questions

1. 
Manager's Info:
-Name
-Employee ID
-Email
-Office Number

2. 
Option to add engineer,intern OR finsih building team
Add engineer:
-Name
-Employee ID
-Email
-Github username

Add intern:
-Name
-Employee ID
-Email
-School

Finish building team:
-Exit application and create html
*/

const teamGenerator = require('./lib/Parent');

new teamGenerator().sameQuestions();