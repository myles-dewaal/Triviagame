var questions = [
    {
        question: "What year was the company Nike founded?",
        answers: ["1987", "1980", "1964", "1973"],
        correct: "1964"
    },    {
        question: "What year was the company Nike founded?",
        answers: ["1987", "1980", "1964", "1973"],
        correct: "1964"
    },
]
$(document).ready(function () {
    $(".submit-button").on("click", function (event) {
        event.preventDefault()
        console.log(this)
    })
    // $("#after_submit").style.visibility = "visible";
    // $("#number_correct").innerHTML = "You got " + correct + " correct.";
    var i = 3;
    $(".timeremaining").text(i);
    setInterval(function () {
        $(".timeremaining").text(i > -1 ? i : 0);
        i--;
    }, 1000);
    if (i === 0) { (".timeremaining").text("Times Up"); }


});


