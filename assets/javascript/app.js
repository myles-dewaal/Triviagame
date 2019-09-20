// var questions = [
//     {
//         question: "What year was the company Nike founded?",
//         answers: ["1987", "1980", "1964", "1973"],
//         correct: "1964"
//     },{
//         question: "How old is queen Elizabeth?",
//         answers: ["93", "88", "94", "89"],
//         correct: "93"
//     },{
//         question: "What date did Disneyland open in California?",
//         answers: ["July 17, 1955", "June 5, 1956", "September 13, 1957", "August 2, 1954"],
//         correct: "July 17, 1955"
//     },{
//         question: "What is the 9th pokemone listed in the Pokedex?",
//         answers: ["Charizard", "Blastiose", "Weedle", "Venusaur"],
//         correct: "Blastiose"
//     },{
//         question: "What is the networth of Jeff Bezos (CEO of Amazon)?",
//         answers: ["100.5 Biilion", "98.9 Billion", "114.4 Billion", "105.2 Billion"],
//         correct: "114.4 Billion"
//     }
// ]
var answers = ["1964", "93", "July 17, 1955", "Blastiose", "114.4"]
$(document).ready(function () {
    $(".submit-button").on("click", function (event) {
        event.preventDefault()
        $("input").on("click", function () {
            $("#number-correct").text($("input:checked").val() + " is checked!");
        })
    })
    // $("#after_submit").style.visibility = "visible";
    // $("#number_correct").innerHTML = "You got " + correct + " correct.";
    var i = 60;
    $(".timeremaining").text(i);
    setInterval(function () {
        $(".timeremaining").text(i > -1 ? i : 0);
        i--;
    }, 1000);
    if (i === 0) { (".timeremaining").text("Times Up"); }


});


