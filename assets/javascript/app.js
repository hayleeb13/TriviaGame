$(document).ready(function() {
var number = 100;
var intervalId;
var correctanswers = 0;  
var incorrectanswers = 0;  
var unanswered = 0; 
var answers = ['D', 'D', 'B', 'B', 'C', 'D', 'A', 'B', 'D', 'C', 'B', 'C', 'A', 'D', 'A'];

function checkAnswers() {
  var zero = document.querySelector('input[name = "question0"]:checked');
  if((zero != null) && (zero.value == answers[0])){
    correctanswers++;
  }
  else if((zero != null) && (zero.value != answers[0])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var one = document.querySelector('input[name = "question1"]:checked');
  if((one != null) && (one.value == answers[1])){
    correctanswers++;
  }
  else if((one != null) && (one.value != answers[1])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var two = document.querySelector('input[name = "question2"]:checked');
  if((two != null) && (two.value == answers[2])){
    correctanswers++;
  }
  else if((two != null) && (two.value != answers[2])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var three = document.querySelector('input[name = "question3"]:checked');
  if((three != null) && (three.value == answers[3])){
    correctanswers++;
  }
  else if((three != null) && (three.value != answers[3])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var four = document.querySelector('input[name = "question4"]:checked');
  if((four != null) && (four.value == answers[4])){
    correctanswers++;
  }
  else if((four != null) && (four.value != answers[4])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var five = document.querySelector('input[name = "question5"]:checked');
  if((five != null) && (five.value == answers[5])){
    correctanswers++;
  }
  else if((five != null) && (five.value != answers[5])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var six = document.querySelector('input[name = "question6"]:checked');
  if((six != null) && (six.value == answers[6])){
    correctanswers++;
  }
  else if((six != null) && (six.value != answers[6])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var seven = document.querySelector('input[name = "question7"]:checked');
  if((seven != null) && (seven.value == answers[7])){
    correctanswers++;
  }
  else if((seven != null) && (seven.value != answers[7])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var eight = document.querySelector('input[name = "question8"]:checked');
  if((eight != null) && (eight.value == answers[8])){
    correctanswers++;
  }
  else if((eight != null) && (eight.value != answers[8])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var nine = document.querySelector('input[name = "question9"]:checked');
  if((nine != null) && (nine.value == answers[9])){
    correctanswers++;
  }
  else if((nine != null) && (nine.value != answers[9])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var ten = document.querySelector('input[name = "question10"]:checked');
  if((ten != null) && (ten.value == answers[10])){
    correctanswers++;
  }
  else if((ten != null) && (ten.value != answers[10])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var eleven = document.querySelector('input[name = "question11"]:checked');
  if((eleven != null) && (eleven.value == answers[11])){
    correctanswers++;
  }
  else if((eleven != null) && (eleven.value != answers[11])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var twelve = document.querySelector('input[name = "question12"]:checked');
  if((twelve != null) && (twelve.value == answers[12])){
    correctanswers++;
  }
  else if((twelve != null) && (twelve.value != answers[12])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var thirteen = document.querySelector('input[name = "question13"]:checked');
  if((thirteen != null) && (thirteen.value == answers[13])){
    correctanswers++;
  }
  else if((thirteen != null) && (thirteen.value != answers[13])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
  var fourteen = document.querySelector('input[name = "question14"]:checked');
  if((fourteen != null) && (fourteen.value == answers[14])){
    correctanswers++;
  }
  else if((fourteen != null) && (fourteen.value != answers[14])) {
    incorrectanswers++;
  }
  else {
    unanswered++;
  }
}

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html("Time Remaining: " + number + " seconds");
  if (number === 0) {
    $("#timer").hide();
    $("#questions").hide();
    $("#end").hide();
    $("#results").show();
    $(".container").height(700);
    checkAnswers();
    $("#correctanswers").html("Correct Answers: " + correctanswers);           
    $("#incorrectanswers").html("Incorrect Answers: " + incorrectanswers);
    $("#unanswered").html("Unanswered: " + unanswered);     
  }
}

$("#start").on("click", function () {
  $("#start").hide();
  $("#timer").show();
  $("#questions").show();
  $("#end").show();
  $(".container").height(2400);
  run();
})

$("#end").on("click", function () {
  $("#timer").hide();
  $("#questions").hide();
  $("#end").hide();
  $("#results").show();
  $(".container").height(700);
  checkAnswers();
  $("#correctanswers").html("Correct Answers: " + correctanswers);           
  $("#incorrectanswers").html("Incorrect Answers: " + incorrectanswers);           
  $("#unanswered").html("Unanswered: " + unanswered);
})
})