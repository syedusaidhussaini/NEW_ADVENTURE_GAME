#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const firstQuestion = await inquirer.prompt([{
  name : "first",
  message: chalk.bgBlackBright.italic("Welcome to the High Scary Mountain & Forest Game :"),
  type: "list",
  choices: ["Forest","Mountain"]
}]);

if (firstQuestion.first === "Forest") {
  let inforest = await inquirer.prompt([{
    name: "Inforest",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1","Door2","GiveUp"]
  }]);
  if (inforest.Inforest === "Door1") {
    console.log(chalk.redBright.bgCyan("VERY BAD\nyou enter a wrong door.Now you walking in a forest with a Dark horse.\nHe starting attacks you what will you do."))
   let moreforest = await inquirer.prompt([{
    name: "Moreforest",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1","Door2","GiveUp"]
   }]);
   if (moreforest.Moreforest === "Door1") {
    console.log("He attacks you with the help of knife and kill you you are die.\n**GAME OVER**")
   } else if (moreforest.Moreforest === "Door2") {
    console.log("He attacks you with knife but you had succeed to run.\n**CONGRATULATIONS, YOU WIN.")
   } else if (moreforest.Moreforest === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
   }
  }
  if (inforest.Inforest === "Door2") {
    console.log(chalk.green.bgBlackBright("CONGRATULATIONS ! You enter a correct door\nYour journey begins from here.\nNow you walking in a forest and clicking pictures of animals and suddenly a Dark horse come to your way and he watch you."))
   let nextforest = await inquirer.prompt([{
    name: "Nextforest",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1", "Door2","GiveUp"]
   }]);
   if (nextforest.Nextforest === "Door2") {
    console.log("He attacks you with the help of knife and kill you you are die.\n**GAME OVER**")
   } else if (nextforest.Nextforest === "Door1") {
    console.log("He attacks you with knife but you had succeed to run.\n**CONGRATULATIONS, YOU WIN.")
   } else if (nextforest.Nextforest === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
   }
  } else if (inforest.Inforest === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
  }
}
if (firstQuestion.first === "Mountain") {
  let inmountain = await inquirer.prompt([{
    name: "InMountain",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1","Door2","GiveUp"]
  }]);
  if (inmountain.InMountain === "Door1") {
    console.log(chalk.redBright.bgCyan("VERY BAD\nyou enter a wrong door.As Your begins his ascent, a sudden rockslide blocks his path, threatening to derail his journey before it even begins..\nWhat will you do."))
   let moremountain = await inquirer.prompt([{
    name: "MoreMountain",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1","Door2","GiveUp"]
   }]);
   if (moremountain.MoreMountain === "Door1") {
    console.log("You jump from ascent to rockslide and passed the slides very easily.\n**CONGRATULATIONS, YOU WIN.**")
   } else if (moremountain.MoreMountain === "Door2") {
    console.log("You find another way to go the ascent.\nWhen you placed your foot in anther rockslide this slide is break into pieces and you drop in coldsnow..\n**Game Over..**")
   } else if (moremountain.MoreMountain === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
   }
  }
  if (inmountain.InMountain === "Door2") {
    console.log(chalk.green.bgBlackBright("CONGRATULATIONS ! You enter a correct door\nAs you sets out on a solo hike through the Mountains, you come across a fork in the trail, one path leading deeper into the dense forest and the other winding along the edge of a steep cliff.."))
   let nextmountain = await inquirer.prompt([{
    name: "NextMountain",
    message: chalk.bgBlackBright.italic("Choose door with proper focus ."),
    type: "list",
    choices: ["Door1", "Door2","GiveUp"]
   }]);
   if (nextmountain.NextMountain === "Door1") {
    console.log("You decided to follow the cliffside trail, you taken risk a fall into the chasm below, and you fall in it.\n**GAME OVER**")
   } else if (nextmountain.NextMountain === "Door2") {
    console.log("You choose a path leading deeper into the dense forest and you walking slowly slowly and you feel  yourself to safe.\n**CONGRATULATIONS, YOU WIN.")
   } else if (nextmountain.NextMountain === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
   }
  } else if (inmountain.InMountain === "GiveUp") {
    console.log("You are a such a loose person with no ability to play game.")
  }
}
