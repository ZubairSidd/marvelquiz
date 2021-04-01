const readline = require('readline-sync')
const log = console.log

var score = 0
log('Hello and Welcome to Marvel Quiz')

if (readline.keyInYN('Are you ready to play this game \n'))
{
  log('Here we go \n--------------------------')
} else {
  log('Adios mate')
}

function play(question, answer) {
    var userAnswer = readline.question(question + '\n\n')
    if (userAnswer.toUpperCase() == answer.toUpperCase()) {
      score++;
      log('That is Correct')
    } else {
      log('That is Wrong')
    }
    log('Your score is: ' + score)
    log('------------------------')
}

question = [
{
    'question': 'What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n-2005\n-2008\n-2010\n-2012',
    'answer': '2008'
},
{
    'question': 'What is Captain America’s shield made of\n-Admantium\n-Vibranium\n-Promethium\n-Carbonadium',
    'answer': 'Vibranium'
},
{
    'question': 'Before becoming Vision, what is the name of Iron Man’s A.I. butler\n-HOMER\n-JARVIS\n-ALFRED\n-MARVIN',
    'answer': 'JARVIS'
},
{
    'question': "What is the real name of the Black Panther\n-T'Challa\n-M'Baku\n-N'Jadaka\n-N'Jobu",
    'answer': "T'Challa"
},
{
    'question': 'What fake name does Natasha use when she first meets Tony?\n-Natalie Rushman\n-Natalia Romanoff\n-Nicole Rohan\n-Naya Rabe',
    'answer': 'Natalie Rushman'
},
{
    'question': 'Who does the Mad Titan sacrifice to acquire the Soul Stone?\n-Nebula\n-Ebony Maw\n-Cull Obsidian\n-Gamora',
    'answer': 'Gamora'
},
{
    'question': 'What is the name of the little boy Tony befriends while stranded in the Iron Man 3?\n-Harry\n-Henry\n-Harley\n-Holden',
    'answer': 'Harley'
},
{
    'question': 'What does the Winter Soldier say after Steve recognizes him for the first time?\n-“Who the hell is Bucky?”\n-“Do I know you?”\n-He is gone.\n-“What did you say?',
    'answer': 'Who the hell is Bucky?'
},
{
    'question': 'Who is killed by Loki in the Avengers?\n-Maria Hill\n-Nick Fury\n-Agent Coulson\n-Doctor Erik Selvig',
    'answer': 'Agent Coulson'
},
{
    'question': 'What type of doctor is Stephen Strange?\n-Neurosurgeon\n-Cardiothoracic Surgeon\n-Trauma Surgeon\n-Plastic Surgeon',
    'answer': 'Neurosurgeon'
}
]

