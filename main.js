import questionBank from "./quizQuestions.js";

let index = 0, incorrect = 0, correct = 0;

let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let option4 = document.querySelector('.option4');

document.addEventListener("DOMContentLoaded", function () {
    update();

    const nextButton = document.querySelector('.next');
    let buttonContainer = document.querySelector(".button-container");
    let buttons = buttonContainer.querySelectorAll('button');

    nextButton.addEventListener('click', () => {

        index = index + 1;
        resetButtonStyles();

        if (index < questionBank.length) {

            update();

            buttons.forEach(button => {
                button.disabled = false;
            });

            resultText.textContent = "";

            nextButton.style.display = 'none';
        }
        else {
            let score = document.querySelector(".score");
            score.style.display = "block"
            score.innerHTML = `
            <h2 style="text-align:center;"> You have completed the quiz! </h2>
            <br>
                   <h3 style="text-align:center; display:block"> Your score :  ${correct} / ${questionBank.length} </h3>
             `
        let mainContainer = document.querySelector(".main-container")
            mainContainer.style.display="none";
        }
    });

    function resetButtonStyles() {
        buttons.forEach(button => button.style = "");
        resultText.textContent = "";
    }

    const resultText = document.querySelector('.result')

    function update() {
        questionId.textContent = questionBank[index].question;
        option1.textContent = questionBank[index].choices.a;
        option2.textContent = questionBank[index].choices.b;
        option3.textContent = questionBank[index].choices.c;
        option4.textContent = questionBank[index].choices.d;

        let questionTag = document.querySelector('.question-tag')
        questionId.textContent = questionBank[index].question;
        questionTag.textContent = 'Question' + questionBank[index].id +"/" + questionBank.length;
    }

    buttons.forEach(function (button) {
        button.addEventListener('click', buttonClicked);

        function buttonClicked() {
            if (!button.disabled) {
                buttons.forEach(btn => {
                    btn.disabled = true;
                });
                if (button.value == questionBank[index].answer) {
                    resultText.textContent = "Well Done! Correct!";
                    button.style = "background:green";
                    console.log("Well Done! Correct!");
                    correct++
                    nextButton.style.display = 'block';
                } else {
                    console.log("you're wrong");
                    resultText.textContent = "Incorrect";
                    incorrect--
                    button.style = "background:red";
                    nextButton.style.display = 'block';
                }
            }
        }
    });
});