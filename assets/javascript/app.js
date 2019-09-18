function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var score = 0
if (question1 === "1964") {
    score++
}
if (question2 === "93") {
    score++
}
if (question3 === "July 17, 1955") {
    score++
}
if (question4 === "Blastiose") {
    score++
}
if (question5 === "114.4 Billion") {
    score++
}
$("#score").text(score + "/5")

}
$(document).ready(function () {
    var i = 60;
    $(".timeremaining").text(i);
    setInterval(function () {
        if(i==0){alert ("Times Up");}
        i--;
        $(".timeremaining").text(i > -1 ? i : 0);
    }, 1000);

});


