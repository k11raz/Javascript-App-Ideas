const quizData = [
    {
        question : "İlk olarak adam misin?",
        a : "Hayir Değilim.",
        b : "Arasira olduğumuz oldu.",
        c : "Eskiden.",
        d : "O ney?",
        correct : "d"
    },

    {
        question : "13.Cumhurbaşkani Kim Olmali ?",
        a : "Bay Kemal",
        b : "Reis",
        c : "Çakma Reis",
        d : "Oan",
        correct : "a"
    },

    {
        question : "Fenerbahçe Şikeci midir?",
        a : "Hayir",
        b : "Evet",
        c : "Konu hakkinda bilgim yok.",
        d : "O ney?",
        correct : "b"
    },

    {
        question : "Türkiyenin en büyük takimi?",
        a : "8tas",
        b : "Şikebahçe",
        c : "Cimbom",
        d : "Hamsispor",
        correct : "c"
    },

    {
        question : "Ali Kiraz?",
        a : "Adam adam",
        b : "Teknik Direktör",
        c : "Atatürk gibi adam",
        d : "Ağaç",
        correct : "c"
    },
]

const question_el = document.querySelector(".question");
const a_text = document.querySelector("#a-text");
const b_text = document.querySelector("#b-text");
const c_text = document.querySelector("#c-text");
const d_text = document.querySelector("#d-text");
const quiz = document.querySelector("#quiz");
const submitBtn = document.querySelector(".btn");
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    getUnSelected()
    const currentQuizData = quizData[currentQuiz];
    question_el.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer
}

function getUnSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    currentQuiz++;

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    
    if (currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`;
    }

})