
const data=[
  {
       QUESTION:"who is making the web standards?”,
        a:"Google”,
        b:"Microsoft”,
        c:"Mozilla”,
        d:"The world wide webConsortium”,
        CORRECT:"d”,
},
{
       QUESTION:"choose the correct HTML element for the largest heading”
      a:"<head>”,
      b:"<heading>”,
      c:"<hi>”,
      d:"<h5>”,
      correct:"c”,
},
{
     QUESTION: "what does CSS stand for?”,
      a: "Central Style Sheets”,
      b:"Cascading Style Sheets”,
      c:"Cascading Simple Sheets”,
      d:"Cars Sun's Silboat”,
      correct: “b”,
}
{
     QUESTION: "what does HTML stand for?”,
      a:"Hypertext Markup Language”,
      b:"Hypertext Markdown Language”,
      c:"Hypertext Machine Language”
      d:"Helicopters Terminal Motorboats Lamborghinis”
      CORRECT:"a”,
},
]

const quiz = document.getElementById("quiz”);
const answerEls = document.querySelectAll("answer”)
const  questionEl = document.getelementById("question”)
const optionA = document.getelementById("optionA”)
const optionB = document.getelementById("optionB”)
const optionC = document.getelementById("optionC”)
const optionD = document.getelementById("optionD”)

const submitBtn = document.getelementById("submit”)

let currenrQuiz = 0
let score = 0
loadQuiz()
function loadQuiz(){ 
  deselectAnswers()
  const currentQuizData = data[currentQuiz]
  questionE1.innertext = currentQuizData.questions
  optionA.innertext = currentQuizData.a
  optionB.innertext = currentQuizData.b
  optionC.innertext = currentQuizData.c
  optionD.innertext = currentQuizData.d
}

function deselectAnswers(){
   answerEls.forEach((answerEL)=>
   ( answerEl.checked = false
))
}

function getSelect(){
  let answer
  answerEls.foreach((answer)=>{
        if(answerEl.checked){
            answer=answerEl.id
    }) 
    return answer
}
submitBtn.addEventListener("click”, () =>{
   const answer = getSelected()

   if(answer){
   if(answer == data[currentQuiz].correct){
           score++
   }
   currentQuiz++
   if(currentQuiz <data.length)
   {
      loadQuiz()
   }
   else{
      quiz.innerHTML = `<h2>you Answered $(score)/$(data.length) Questions correct
       <button onclick="location.reload()”> Do it Again</button>`
}
}
})
