#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "Yourguessednumber",
        type: "number",
        message: "Please guess the number between 1 to 6:",
    }]);
if (answer.Yourguessednumber === randomnumber) {
    console.log("Congratulations you guessed it right!");
}
else {
    console.log("Sorry your guess was wrong!");
}
