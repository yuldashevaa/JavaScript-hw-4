//TASK 1

let name = prompt('what is your name: ? ')
let birthYear = +prompt('your birth year: ? ')
let currentYear = +prompt('current year: ? ')

function person(name,birthYear,currentYear){
    let age = birthYear - currentYear
    return name + ' you are ' + age + ' years '
}

let result = person(name,birthYear,currentYear)
alert(result)


//TASK 2

function getRandomNumber(max){
    return Math.floor(Math.random()*max)+1
}


function getRandomOperator(){
    const rand = Math.floor(Math.random()*4)
    if(rand === 0) return '+';
    if(rand === 1) return '-';
    if(rand === 2) return '*';
    if (rand === 3) return '/';
}

function getRandomExample(max){
    const num1 = getRandomNumber(max);
    const num2 = getRandomNumber(max);
    const operator = getRandomOperator()

    let correctAnswer;

    if(operator === '+'){
        correctAnswer = num1+num2;
    }
    else if(operator === '-'){
        correctAnswer = num1-num2
    }
    else if(operator === '*'){
        correctAnswer = num1*num2
    }else if(operator === '/'){
        correctAnswer = (num1/num2).toFixed(2)
    }

    const problem = num1 + ' ' + operator + ' ' + num2 + ' ='
    const userAnswer = prompt('Solve this: ' + problem)

    if (parseFloat(userAnswer) === parseFloat(correctAnswer)){
        alert('Correct! Your answer is ' + correctAnswer)
    }
    else{
        alert('Wrong! Correct answer is ' + correctAnswer)
    }
}

const MaxNumber = parseInt(prompt('Enter the maximum amount of tasks '), 10)
const exampleCount = parseInt(prompt('How many tasks you want to solve ? '), 10)

for(let i = 0; i<exampleCount; i++){
    getRandomExample(MaxNumber)
}