const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];



const submit = document.querySelector('.submit');
const labelA = document.querySelector('#a_text');
const labelB = document.querySelector('#b_text');
const labelC = document.querySelector('#c_text');
const labelD = document.querySelector('#d_text');
const question = document.querySelector('#question');
const quizHeader = document.querySelector('.quiz-header');

let currentQuiz = 0;
let correctCounter = 0;

render();

submit.addEventListener('click', ()=> {

    const inputs = document.querySelectorAll('li input');

    inputs.forEach(input => {

        if (input.checked && input.id === quizData[currentQuiz].correct){
            correctCounter++;
        }

        input.checked = false;
    })

    if (submit.innerText === 'Reload'){
        location.reload();
    }

    currentQuiz++;
    render();

})

function render(){

    if (currentQuiz > quizData.length - 1){

        quizHeader.innerHTML = `<h2>You answered ${correctCounter}/${quizData.length} questions correctly<h2/>`
        submit.innerText = `Reload`;

    } else {

        question.innerText = quizData[currentQuiz].question
        labelA.innerText = quizData[currentQuiz].a;
        labelB.innerText = quizData[currentQuiz].b;
        labelC.innerText = quizData[currentQuiz].c;
        labelD.innerText = quizData[currentQuiz].d;
    }
}
