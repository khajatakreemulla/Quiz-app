var quizQuestion = [
    {
        Question: 'Most widely used programming language for web development?',
        a: 'Java',
        b: 'Python',
        c: 'JavaScript',
        d: 'c++',
        correct: 'c'
    },
    {
        Question: 'What is React.js?',
        a: 'Java library',
        b: 'JavaScript library',
        c: 'JavaScript framework',
        d: 'none of the above',
        correct: 'b' 
    },
    {
        Question: 'Which data structures are used to implement undo and redo?',
        a: 'Stacks',
        b: 'Arrays',
        c: 'LinkList',
        d: 'Queues',
        correct: 'a' 
    },
    {
        Question: 'Which data structure gets in mind while standing in railway queue?',
        a: 'LinkList',
        b: 'Python',
        c: 'Queues',
        d: 'Array',
        correct: 'c' 
    },
    {
        Question: 'When was the year when javascript launched?',
        a: 1994,
        b: 1995,
        c: 1996,
        d: 'none of the above',
        correct: 'b' 
    }
]

const headQuestion = document.getElementById('head_question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const btn = document.querySelector('.btn')
var selected = document.querySelectorAll('.answer')

var quizData = 0
var questions;
var score = 0

function getData () {
    deselect()
    questions = quizQuestion[quizData]
    headQuestion.innerHTML = questions.Question
    a_text.innerHTML = questions.a
    b_text.innerHTML = questions.b
    c_text.innerHTML = questions.c
    d_text.innerHTML = questions.d
}

btn.addEventListener('click', ()=>{
    var result = getSelected()
    if(result === quizQuestion[quizData].correct){
        score++
    }
    if(result){
        quizData++
        if(quizData < quizQuestion.length){
            getData()
        }else{
            alert(`Your Score ${score}/${quizQuestion.length}`)
            location.reload()
        }
    }
    
})

function deselect(){
    selected.forEach(answerEl => {
       answerEl.checked = null
    });
}

function getSelected(){
    let answer = undefined
    selected.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });
    return answer
}

getData()
