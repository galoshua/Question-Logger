const body= document.body;
const input = document.querySelector(".question-input");
const overlay = document.querySelector(".overlay");
const form= document.querySelector("#question-form");
const questionList = document.querySelector(".question-list");

// global variables //
const allQuestions = JSON.parse(localStorage.getItem("question_list")) || [];

// function declerations //
function focusInput(){
    body.classList.add("focus-form");
}

function removeFocus(){
    if(body.classList.contains("focus-form"))
    body.classList.remove("focus-form");
}
async function formQuestion(e){
    e.preventDefault();

    if(!input.value) return;

    const question = await input.Value;

    allQuestions.push(question);

    populateQuestionList(allQuestions)

    saveQuestionListToLocalStorage(allQuestions);
}
function populateQuestionList(question=[]){
    questionList.innerHTML= question
        .map(
            (question, idx)=>`
            <li data-index=${idx}">
            <a class="question" target="_blank"></a>
            <button class="clsoe-btn">&times;</button>
            </li>`
        )
        .join("");
}
function saveQuestionListToLocalStorage(questions=[]){
    localStorage.setItem("question_list",JSON.stringify(questions));
}




// event listeners //
input.addEventListener("focusin",focusInput);
input.addEventListener("focusout", removeFocus);
overlay.addEventListener("click",removeFocus);
form.addEventListener("submit",formQuestion)