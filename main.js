import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed("\t WELCOME TO CLI GAME\t"));
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: chalk.bgGreen("please guess a number 1 till 10")
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(chalk.bgGray("Congratulations! you win the game"));
}
else
    (console.log(chalk.bgBlue("you guess a wrong number")));
