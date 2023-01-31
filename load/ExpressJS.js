import chalk from "chalk";
import inquirer from 'inquirer'
import { execSync } from 'child_process';
import Logo from "./LOgo/Logo.js";

function ExpressJS(name){
    const gitExpress_MongoDB = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    const gitExpress_Pg = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    const runCommand = command => {
        try {
            execSync(`${command}`,{stdio:'inherit'});
        } catch (e) {
            console.error(`Failed to execute ${command}`,e)
            return false ;
        }
        return true ;
    }
    inquirer.prompt(
        { 
          type: "list",
          name: "database",
          message: "Select Database :",
          choices : [
            "MongoBD",
            "PostgreSQL (not finish)"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.database}   `))
        const chosen = awnser.database ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "MongoDB"){
            const checkOut = runCommand(gitExpress_MongoDB)
            if(!checkOut) process.exit(-1)
            Logo();
        inquirer.prompt(
            { 
              type: "list",
              name: "con",
              message: chalk.green("End : "),
              choices : [
                "finish",
                "VScode"]
            }).then(awn =>{
                if(awn.con === "VScode"){
                    runCommand(`cd ${name} && code .`)
                }
            })
        }else if(chosen === "PostgreSQL (not finish)"){
            console.log(chalk.red("Sorry,We are soon ....."))
        }
        
    })
}

export default ExpressJS ;