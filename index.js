var readlineSync = require('readline-sync');
var score = 0;
var i = 1 ; //level number
const chalk = require('chalk');

console.log(chalk.green.bold("Welcome to the F.R.I.E.N.D.S game."));
console.log(chalk.green.bold("Today we will check how big fan are you of the show"));
var name = readlineSync.question(chalk.blue.bold("Enter your name->"));

console.log(chalk.green.bold("Hi!"+ name));
console.log(chalk.grey.bold("Instructions \n 1)There will be 2 questions in each round with weightage not known to you \n 2)If your score is more than 50% you'll go to next level \n"));

round1();

function round1()
{
  console.log(chalk.red.bold.underline("Entering round 1-----"));
  score=0;
  var array = [
    {
      ques:chalk.red("Q1)Pheobe's sister name is(")+chalk.green("Ursulla,Parcella,monica")+chalk.red(")->"),
      ans:"Ursulla",
      points:40
    },
    {
      ques:chalk.red("Q2)How many sisters does Joey have?(")+chalk.green("7,6,5")+chalk.red(")->"),
      ans:"7",
      points:60
    }
  ];
  for(var j=0;j<array.length;j++)
  {
    var temp = array[j];
    if(temp.ans.toUpperCase() === readlineSync.question(temp.ques).toUpperCase())
      {
         score+=temp.points;
      }
  }
  if(score>=50)
  {
    round2();
  }
  else
    console.log(chalk.red("Play again"));
}

function round2()
{
  console.log(chalk.red.bold.underline("Entering round 2------>"));
  score=0;
  var ques = [chalk.red("Q1)How many children does Chandler and Monica have?->"),chalk.red("Q2)How many main characters are there in show?->")];
  var ans = ["2","6"];
  var points = [45,55];
  for(var j=0;j<ques.length;j++)
  {
    if(readlineSync.question(ques[j])===ans[j])
    {
      score+=points[j];
    }
   // console.log(score);
  }
  if(score>50)
    console.log(chalk.green.bold.bgBlue("Yay! You Won \nPlay again:)"));
  else
    console.log(chalk.red.bold("Play again"));  
}

