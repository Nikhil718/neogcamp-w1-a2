var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.green("Please enter your name  "));

console.log(chalk.magentaBright.bold("Welcomming you to this quiz " + userName +"."));
console.log( "There are 8 questions and Please enter only the option in capital letter.")
console.log("###########################");

// quiz
var score = 0;
function myQuiz(question,answero,answerw){
  //printing the question and getting the answer from userName

  var userAnswer = readlineSync.question(chalk.bgBlack( question)+"   " + chalk.bgWhite(chalk.black("Answer : " )));
    if(userAnswer === answero)
    {
      console.log(chalk.green("RIGHT ANSWER!!"));
      score = score + 1 ;
    }
     else 
    {
      console.log(chalk.red("WRONG ANSWER!!"));
      console.log(chalk.green("Correct answer is " + answerw ));
      score = score;
    }
 console.log("Your score is " + score);

 console.log("************************");
}

// Creating set of questions

var questionBank = [{
  question : `1) Which is the smallest country in the world?"
    A. Vanuatu

    B. Vatican City

    C. Luxembourg

    D. Monaco  ` ,

                
   answero : 'B' ,

   answerw : ' B. Vatican City'
   
},
{
  question : `2. Which of the following country has given first time voting rights to women?

A. USA

B. France

C. New Zealand

D. India` ,

answero : 'C',

answerw : 'C. New Zealand'
},
{
  question : `3. Which is the safest country in Asia?

A. China

B. Malaysia

C. Japan

D. Korea`,

answero : 'C',

answerw : 'C. Japan'
},
{
  question : `4. Which of following countries has highest per capita income in the world?

A. Qatar

B. Luxembourg

C. Macau

D. Liechtenstein`,

answero : 'A',

answerw : 'A. Qatar'
},
{
  question : `	
5) The famous Dilwara Temples are situated in

A.	Uttar Pradesh

B.	Rajasthan

C.	Maharashtra

D.	Madhya Pradesh`,

answero : 'B',

answerw : 'B.	Rajasthan'

},
{
  question : `6) 	
Central Drug Research Institute is located at

A.	Trissur

B.	Nagpur

C.	Mysore

D.	Lucknow`,

answero : 'D',

answerw : 'D.	Lucknow'
},
{
  question : `7) 	
The world famous Ajanta caves are situated in

A.	Orissa

B.	Andhra Pradesh

C.	Kerala

D.	Maharashtra`,

answero : 'D',

answerw : 'D.	Maharashtra'
},
{
  question : `8) 	
The famous Meenakshi temple is located in

A.	Bihar

B.	Madurai

C.	Madras

D.	Trichy`,

answero : 'B',

answerw : 'B.	Madurai'
}];

for( var i = 0; i< questionBank.length;i++){
  var currentQuestion = questionBank[i];
  myQuiz(currentQuestion.question,currentQuestion.answero,currentQuestion.answerw);
}

console.log("Thank You, Your final score is " + score );
