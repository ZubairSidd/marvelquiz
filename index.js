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