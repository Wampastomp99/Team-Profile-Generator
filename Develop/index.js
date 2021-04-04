const Manager = require("./lib/Manager");
const Engineer = require(".lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const emptyId =[];

const questionsEmployee = [
    {
        type: "input",
        name: "nameManager",
        message: "Managers name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "Managers ID?"
    },
    {
        type: "input",
        name: "emailManager",
        message: "Managers email?"
    },
    {
    type: "input",
    name: "officeNumber",
    message: "Managers office number?"
    }
];

function manager() {
    console.log("Let's build your team");
    inquirer.prompt(questionsEmployee).then(function(data){
        const manager = new Manager(data.nameManager, data.managerId, data.emailManager, data.officeNumber);
        teamMembers.push(manager);
        emptyId.push(data.managerId);
        team();
    });
};

function team() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(function(data){
        if (data.memberChoice === "Engineer"){
            engineer();
        } else if (data.memberChoice === "Intern"){
            intern();
        } else (outputTeam());
    });
};