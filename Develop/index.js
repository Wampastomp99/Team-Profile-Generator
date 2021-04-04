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
        message: "Managers ID?",
    }
    {
        type: "input",
        name: "emailManager",
        message: "Managers email?",
    }
    {
    type: "input",
    name: "officeNumber",
    message: "Managers office number?"
    }
];