// the question will be randomly picked within this question list.

const quizQuestions = [{
        title: 'How to write an IF statement in JavaScript?',
        choices: [`if i = 5`,`if (i === 5)`,'if (i : 5)','if (i = 5) then '],
        answer: 'if (i === 5)'  
    },
    {
        title: 'How do you write a string in an alert box?',
        choices: [`alert"string"`,`prompt("string")`,`alert("string")`,`confirm("string")`],
        answer: `alert("string")`
    },
    {
        title: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        choices: ['if (i !=5)','if != 5','if (i =!5)','if (!=5)'],
        answer:'if (i !=5)'  
    },
    {
        title: 'How does a WHILE loop start?',
        choices: ['while (i <= 10; i++)','while i <= 10','while i <= 10;','while (i <= 10)'],
        answer: 'while (i <= 10)',
    },
    {
        title: 'What is the correct way to write a JavaScript array?',
        choices: ['const arr = 1,2,3','const arr = [1,2,3]','const arr = {1,2,3}','const arr = (1,2,3)'],
        answer: 'const arr = [1,2,3]'  
    },
    {
        title: 'Which operator is used to assign a value to a variable?',
        choices: ['||','>','=','-'],
        answer: '='  
    },
    {
        title: 'How do you find the number with the highest value of x and y?',
        choices: ['Math.max(x, y)','Math.ceil(x, y)','top(x, y)','ceil(x, y)'],
        answer: 'Math.max(x, y)'  
    },
    {
        title: 'How do you round the number to the nearest integer?',
        choices: ['round(num)','Math.rd(num)','Math.round = num','Math.round(num)'],
        answer: 'Math.round(num)'  
    },
    {
        title: 'How do you create a FUNCTION EXPRESSION in JavaScript?',
        choices: ['const function()','const functionName = function()','function() = function','function = function()'],
        answer: 'const functionName = function()'  
    },
    {
        title: 'How to select an HTML element by its ID?',
        choices: [`document.getElementById('element_id')`,`document.getElementById(element_id)`,`document.querySelector('element_id')`,`document.innerHTML('element_id')`],
        answer: `document.getElementById('element_id')`
    },
]
